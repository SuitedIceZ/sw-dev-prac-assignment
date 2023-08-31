import style from './productcard.module.css'
import Image from 'next/image'

export default function ProductCard ( { hospitalName, imgSrc } : { hospitalName:string, imgSrc:string } ) {
    return (
        <div className={style.card}>
            <div className={style.cardimg}>
            <Image src={imgSrc}
            alt='Vaccine Picture' 
            fill={true}
            objectFit='cover'/>
            </div>
            <div className={style.cardtext}>{hospitalName}</div>
        </div>
    )
}