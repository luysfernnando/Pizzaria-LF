import Image from "next/image";
import { urlFor } from "../lib/client";
import css from "../styles/Menu.module.css";
import Link from "next/link";


export default function Menu({ pizzas }) {
    return (
        <div id="menu" className={css.container}>
            <div className={css.heading}>
                <span>NOSSO MENU</span>
                <span>Menu Que Sempre</span>
                <span>Te Deixa Com Água na Boca</span>
            </div>

            <div className={css.menu}>
                {/* Pizzas */}
                {pizzas.map((pizza, id) => {
                    const src = urlFor(pizza.image).url();
                    return (
                        <div className={css.pizza} key={id}>

                            <Link href={`./pizza/${pizza.slug.current}`}>

                                <div className={css.ImageWrapper}>
                                    <Image
                                        loader={() => src}
                                        src={src}
                                        alt=''
                                        objectFit="cover"
                                        layout="fill"
                                    />
                                </div>
                            </Link>

                            <span>{pizza.name}</span>
                            <span>
                                <span style={{ color: 'var(--themeRed)' }}>R$</span> {pizza.price[1]}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
