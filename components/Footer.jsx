import { UilTwitter, UilGithub, UilInstagram } from "@iconscout/react-unicons"
import css from '../styles/Footer.module.css'
import Image from "next/image"
import Logo from "../assets/LF_22.png";
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={css.container}>
      <span>TODOS OS DIREITOS RESERVADOS</span>
      <div className={css.social}>
        <Link href={"https://twitter.com/luysfernnando"}><UilTwitter size={45} /></Link>
        <Link href={"https://www.github.com/luysfernnando"}><UilGithub size={45} /></Link>
        <Link href={"https://www.instagram.com/luysfernnando"}><UilInstagram size={45} /></Link>
      </div>

      <div className={css.logo}>
        <Link href={""}><Image src={Logo} alt="" width={50} height={50} /></Link>
        <Link href={""}><span>Pizzaria LF</span></Link>
      </div>
    </div>
  )
}