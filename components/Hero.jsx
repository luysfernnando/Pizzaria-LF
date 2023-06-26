import css from '../styles/Hero.module.css';
import Image from 'next/image';
import Cherry from '../assets/Cherry.png';
import HeroImage from '../assets/HeroImage.png';
import { UilPhone } from "@iconscout/react-unicons";
import Pizza1 from '../assets/p1.jpg';
export default function Hero() {
    return (
        <div className={css.container}>
            {/* Left Side */}
            <div className={css.left}>


                <div className={css.cherryDiv}>
                    <span>Mais do que Rápido</span>
                    <Image src={Cherry} alt="" width={40} height={25} />
                </div>

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
                    Pedir Agora
                </button>
            </div>


            {/* Right Side */}

            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="" layout="intrinsic" />
                </div>


                <div className={css.ContactUs}>
                    <span>Fale Conosco</span>
                    <div>
                        <UilPhone color='white' />
                    </div>
                </div>



                <div className={css.Pizza}>
                    <div>
                        <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic" />
                    </div>

                    <div className={css.details}>
                        <span>Pizza Italiana</span>
                        <span>
                        <span style={{ color: "var(--themeRed)" }}>R$</span> 59.00
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};
