import style from './banner.module.css'
import Image from 'next/image'

export default function Banner () {
    return (
        <div className={style.banner}>
            <Image src={'/img/cover.jpg'}
            alt='cover' 
            fill={true}
            objectFit='cover'/>
            <div className={style.bannerText}>
                <h1>ศูนย์บริการฉีดวัคซีนโรคโควิด19 ฟรี</h1>
                <h3>เพียงแจ้งชื่อ นั่งรอ และพร้อมฉีด</h3>
            </div>
        </div>
    )
}