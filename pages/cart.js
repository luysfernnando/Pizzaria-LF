import Layout from '../components/Layout'
import css from '../styles/Cart.module.css'
import { useStore } from "../store/store"
import Image from 'next/image'
import { urlFor } from '../lib/client'
import toast, { Toaster } from "react-hot-toast"
import { useState } from 'react'
import OrderModal from '../components/OrderModal'
import { useRouter } from "next/router"

export default function Cart() {
  const CartData = useStore((state) => state.cart)
  const removePizza = useStore((state) => state.removePizza)
  const [PaymentMethod, setPaymentMethod] = useState(null)
  const { Order } = useState(
    typeof window !== 'undefined' && localStorage.getItem('order')
  )

  const handleRemove = (i) => {
    removePizza(i);
    toast.error('Item Removed');
  }

  const router = useRouter();

  const total = () => CartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0)

  const handleOnDelivery = () => {
    setPaymentMethod(0);
    /*
      Como o Next.js renderiza o componente primeiro no servidor, teriamos um erro ao usar
      o localStorage. Pra evitar isso, vamos verificar se há uma janela habilitada do browser
      do usuário. Se tiver, então podemos usar o localStorage. Caso contrário, não.
    */
    typeof window !== 'undefined' && localStorage.setItem('total', total())
  }

  const handleCheckout = async () => {
    typeof window !== 'undefined' && localStorage.setItem('total', total());
    setPaymentMethod(1);
    const response = await fetch('/api/stripe', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(CartData.pizzas),
    });

    if (response.status === 500) return;
    const data = await response.json();
    toast.loading("Redirecionando para o checkout...");
    router.push(data.url);
  }

  return (
    <Layout>
      <div className={css.container}>

        {/* details */}
        <div className={css.details}>

          <table className={css.table}>

            <thead>
              <th>Pizza</th>
              <th>Nome</th>
              <th>Tamanho</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
              <th></th>
            </thead>

            <tbody className={css.tbody}>
              {CartData.pizzas.length > 0 && CartData.pizzas.map((pizza, i) => {
                const src = urlFor(pizza.image).url()

                return (
                  <tr key={i}>
                    <td className={css.imageTd}>
                      <Image
                        loader={() => src}
                        src={src}
                        alt=""
                        objectFit="cover"
                        width={85}
                        height={85}
                      />
                    </td>

                    <td>{pizza.name}</td>

                    <td>
                      {pizza.size === 0 ? "Pequena" : (pizza.size === 1 ? "Média" : "Grande")}
                    </td>

                    <td>{pizza.price}</td>
                    <td>{pizza.quantity}</td>
                    <td>{pizza.price * pizza.quantity}</td>

                    <td style={{ color: "var(--themeRed)", cursor: "pointer" }}
                      onClick={() => handleRemove(i)}>
                      x
                    </td>
                  </tr>

                )
              })
              }
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className={css.cart}>
          <span>Carrinho</span>
          <div className={css.CartDetails}>

            <div>
              <span>Items</span>
              <span>{CartData.pizzas.length}</span>
            </div>

            <div>
              <span>Total</span>
              <span>R$ {total()}</span>
            </div>
            
          </div>

          {!Order && CartData.pizzas.length > 0 ? (
            <div className={css.buttons}>
              <button className='btn' onClick={handleOnDelivery}>Pagar na Entrega</button>
              <button className='btn' onClick={handleCheckout}>Pagar Agora</button>
            </div>
          ) : null}

        </div>
      </div>
      <Toaster />

      {/* Modal */}
      <OrderModal
        opened={PaymentMethod === 0}
        setOpened={setPaymentMethod}
        PaymentMethod={PaymentMethod}
      />

    </Layout>
  )
}