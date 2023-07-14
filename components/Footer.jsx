import { UilFacebook, UilGithub, UilInstagram } from "@iconscout/react-unicons"
import css from '../styles/Footer.module.css'
import Image from "next/image"
import Logo from "../assets/LF_22.png";
import Link from 'next/link';

export default function Footer()
{
  return (
    <div className={css.container}>
      <span>TODOS OS DIREITOS RESERVADOS</span>
      <div className={css.social}>
        <Link href={"#"}><UilFacebook size={45}/></Link>
        <Link href={"#"}><UilGithub size={45}/></Link>
        <Link href={"#"}><UilInstagram size={45}/></Link>
      </div>

      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Pizzaria LF</span>
      </div>
    </div>
  )
}