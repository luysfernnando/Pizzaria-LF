import css from '../styles/Menu.module.css'
import { urlFor } from '../lib/client'
import Image from 'next/image'
import Link from 'next/link'

export default function Menu({ pizzas }) {
  // console.log(pizzas)
  return (
    <div className={css.container} id="menu">

      <div className={css.heading}>
        <span>NOSSO MENU</span>
        <span>Menu Que Sempre</span>
        <span>Te Deixa Com Água na Boca</span>
      </div>

      <div className={css.menu}>

        {/* Pizza Menus */}
        {pizzas.map((pizza, id) => {

          const src = urlFor(pizza.image).url();

          return (
            <div className={css.pizza} key={id} >

              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className={css.ImageWrapper}>
                  <Image
                    loader={() => src}
                    src={src} alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>

              <span>
                {pizza.name}
              </span>

              <span>
                <span style={{ color: 'var(--themeRed)' }}>R$</span> {pizza.price[1]}
              </span>

            </div>
          )
        })}
      </div>
    </div>
  )
}