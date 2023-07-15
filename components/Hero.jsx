import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Cherry from '../assets/Cherry.png';
import HeroImage from '../assets/HeroImage.png'
import { UilPhone } from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.png'
import Link from 'next/link';

export default function Hero() {
  return (
    <div className={css.container}>
      {/* Left Side */}
      <div className={css.left}>

        <div className={css.cherryDiv}>
          <span>Mais do que Rápido</span>
          <Image src={Cherry} alt="" width={40} height={25} />
        </div>

        {/* Catch Phrase */}
        <div className={css.heroText}>
          <span>Os Mais Rápidos</span>
          <span>Em Entregar</span>
          <span>
            A Sua <span style={{ color: "var(--themeRed)" }}>Pizza</span>
          </span>
        </div>

        <span className={css.miniText}>
          Nossa missão é encher sua barriga com comidas deliciosas e com entrega rápida e gratuita
        </span>

        <button className={`btn ${css.btn}`}>
          <Link href="#menu">Pedir Agora</Link>
        </button>

      </div>

      {/* Right Side */}
      <div className={css.right}>

        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout='intrinsic' />
        </div>

        <div className={css.ContactUs}>
          <span>
            <a
              href="https://api.whatsapp.com/send?phone=5562991624471&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20voc%C3%AA" target="_blank"
              rel="noopener noreferrer">
              Fale Conosco
            </a>
          </span>
          <div>
            <UilPhone color='white' />
          </div>
        </div>

        <div className={css.Pizza}>

          <div>
            <Link href="../pizza/pizza-italiana">
              <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic" />
            </Link>
          </div>

          <div className={css.details}>
            <span><Link href="../pizza/pizza-italiana">Pizza Italiana</Link></span>
            <span>
              <span style={{ color: "var(--themeRed)" }}>R$</span> 59.00
            </span>
          </div>

        </div>
      </div>
    </div >
  )
};