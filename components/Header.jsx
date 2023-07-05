import css from '../styles/Header.module.css';
import Image from 'next/image'
import Logo from '../assets/LF_22.png';
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import Link from 'next/link';
import { useStore } from '../store/store';
import { useState, useEffect } from 'react';
export default function Header() {

    // state in terminal
    // const state = useStore((state) => state);
    // console.log(state);

    const [Order, setOrder] = useState("");
    useEffect(() => {
        setOrder(localStorage.getItem("order"));
    }, [])

    const items = useStore((state) => state.cart.pizzas.length);
    return (
        <div className={css.header}>
            {/* Logo side */}
            <div className={css.logo}>
                <Link href={"/"}><Image src={Logo} alt="" width={50} height={50} /></Link>
                <Link href={"/"}><span>Pizzaria LF</span></Link>
            </div>

            {/* Menu Side */}
            <ul className={css.menu}>
                <li><Link href="../">Início</Link></li>
                <li><Link href={"#menu"}>Menu</Link></li>
                <li><Link href={"/"}>Contato</Link></li>
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
                            <UilReceipt size={35} color="#2E2E2E" />
                            {Order != "" && <div className={css.badge}>1</div>}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
};
