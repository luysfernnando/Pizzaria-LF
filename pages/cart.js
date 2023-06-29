import Image from "next/image";
import { useStore } from "../store/store";
import Layout from "../components/Layout";
import { urlFor } from "../lib/client";
import css from "../styles/Cart.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function Cart() {
    const CartData = useStore((state) => state.cart)
    const removePizza = useStore((state) => state.removePizza)

    const handleRemove = (i) => {
        removePizza(i);
        toast.success("Item removido do carrinho");
    };

    const total = () => CartData.pizzas.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
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
                            {CartData.pizzas.length > 0 &&
                                CartData.pizzas.map((pizza, i) => {

                                    const src = urlFor(pizza.image).url();

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
                                                {
                                                    pizza.size === 0 ?
                                                        "Pequena" :
                                                        pizza.size === 1 ?
                                                            "Média" :
                                                            "Grande"
                                                }
                                            </td>

                                            <td>{pizza.price}</td>
                                            <td>{pizza.quantity}</td>
                                            <td>{pizza.price * pizza.quantity}</td>
                                            <td
                                                style={{
                                                    color: "var(--themeRed)",
                                                    cursor: "pointer"
                                                }}

                                                onClick={() => handleRemove(i)}
                                            >x</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                {/* summary */}
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

                    <div className={css.buttons}>
                        <button className="btn">Pagar na Entrega</button>
                        <button className="btn">Pagar Agora</button>
                    </div>
                </div>
            </div>
            <Toaster />
        </Layout >
    )
};
