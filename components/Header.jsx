import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/LF_22.png';
import { UilShoppingBag, UilReceipt } from '@iconscout/react-unicons'
import { useStore } from "../store/store"
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function Header() {

  const [Order, setOrder] = useState("");

  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  }, [])

  const items = useStore((state) => state.cart.pizzas.length)

  return (
    <div className={css.header}>

      {/* Logo Side */}
      <div className={css.logo}>
        <Link href={"/"}><Image src={Logo} alt="" width={50} height={50} /></Link>
        <Link href={"/"}><span>Pizzaria LF</span></Link>
      </div>

      {/* Menu Side */}
      <ul className={css.menu}>
        <li><Link href='../'>Início</Link></li>
        <li><Link href={"#menu"} scroll={false}>Menu</Link></li>
        <li><Link href={"https://api.whatsapp.com/send?phone=5562991624471&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20voc%C3%AA"} passHref>
          <a target="_blank" rel="noopener noreferrer">
            Contato
          </a>
        </Link></li>
      </ul>

      {/* Right Side */}
      <div className={css.rightSide}>
        <Link href='/cart'>
          <div className={css.cart}>
            <UilShoppingBag size={35} color="#2E2E2E" />
            <div className={css.badge}>{items}</div>
          </div>
        </Link>

        {Order && (
          <Link href={`/order/${Order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color='#2E2E2E' />
              {Order != "" && (<div className={css.badge}>1</div>)}
            </div>
          </Link>
        )}
      </div>
    </div>
  )
};