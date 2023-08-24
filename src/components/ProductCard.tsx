import style from './productcard.module.css'
import Image from 'next/image'

export default function ProductCard () {
    return (
        <div className={style.card}>
            <div className={style.cardimg}>
            <Image src={'/img/vaccine.jpg'}
            alt='Vaccine Picture' 
            fill={true}
            objectFit='cover'/>
            </div>
            <div className={style.cardtext}>วัคซีน (Vaccine) คือ สารชนิดหนึ่งที่ฉีดเข้าสู่ร่างกาย 
            เพื่อกระตุ้นให้ร่างกายสร้างภูมิคุ้มกันโรค ในวัคซีนมีเชื้อโรคที่ไม่ทำให้เกิดโรค</div>
        </div>
    )
}