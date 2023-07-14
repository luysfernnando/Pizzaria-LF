import css from '../styles/Services.module.css'
import Image from 'next/image'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'

export default function Services()
{
  return (
    <>
      <div className={css.heading}>
        <span>O QUE NÓS SERVIMOS</span>
        <span>Sua comida Favorita</span>
        <span>Parceiro de Entrega</span>
      </div>

      {/* Features */}
      <div className={css.services}>

        <div className={css.feature}>

          <div className={css.ImageWrapper}>
            <Image src={s1} alt="" objectFit='cover' layout='intrinsic' />
          </div>

          <span>Fácil de Pedir</span>
          <span>Você só precisa de alguns passos pra pedir sua pizza</span>
        </div>

        <div className={css.feature}>

          <div className={css.ImageWrapper}>
            <Image src={s2} alt="" objectFit='cover' layout='intrinsic' />
          </div>

          <span>Entrega Ninja</span>
          <span>Nossas entregas são feitas sempre no prazo estipulado</span>
        </div>

        <div className={css.feature}>

          <div className={css.ImageWrapper}>
            <Image src={s3} alt="" objectFit='cover' layout='intrinsic' />
          </div>

          <span>Qualidade e Confiança</span>
          <span>A velocidade não é tudo, qualidade é o nosso foco número um</span>
        </div>
        
      </div>
    </>
  )
}