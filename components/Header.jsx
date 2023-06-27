import css from '../styles/Header.module.css';
import Image from 'next/image'
import Logo from '../assets/LF_22.png';
import { UilShoppingBag } from "@iconscout/react-unicons";
import Link from 'next/link';
export default function Header() {
    return (
        <div className={css.header}>
            {/* Logo side */}
            <div className={css.logo}>
                <Link href={"/"}>
                    <Image src={Logo} alt="" width={50} height={50} />
                </Link>
                <Link href={"/"}>
                    <span>Pizzaria LF</span>
                </Link>
            </div>

            {/* Menu Side */}
            <ul className={css.menu}>
                <li><Link href={"/"}>Início</Link></li>
                <li><Link href={"#menu"}>Menu</Link></li>
                <li><Link href={"/"}>Contato</Link></li>
            </ul>

            {/* Right Side */}
            <div className={css.rightSide}>
                <div className={css.cart}>
                    <UilShoppingBag size={35} color="#2E2E2E" />
                    <div className={css.badge}>1</div>
                </div>
            </div>
        </div>
    )
};
