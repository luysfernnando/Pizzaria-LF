import css from '../styles/Header.module.css';
import Image from 'next/image'
import Logo from '../assets/LF_22.png';
import {UilShoppingBag} from "@iconscout/react-unicons";
export default function Header() {
    return (
        <div className={css.header}>
            {/* Logo side */}
            <div className={css.logo}>
                <Image src = {Logo} alt = "" width={50} height={50}/>
                <span>Pizzaria LF</span>
            </div>

            {/* Menu Side */}
            <ul className={css.menu}>
                <li>Início</li>
                <li>Menu</li>
                <li>Contato</li>
            </ul>

            {/* Right Side */}
            <div className={css.rightSide}>
                <div className={css.cart}>
                    <UilShoppingBag size={35} color="#2E2E2E"/>
                    <div className={css.badge}>1</div>
                </div>
            </div>
        </div>
    )
};
