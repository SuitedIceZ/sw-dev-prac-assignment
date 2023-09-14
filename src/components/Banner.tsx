"use client"
import style from './banner.module.css'
import Image from 'next/image'
import { useState } from 'react'; 
export default function Banner () {
    const covers = ['/img/cover1.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index, setIndex] = useState(0)

    return (
        <div className={style.banner}>
            <Image src={covers[index%4]}
            onClick={()=>setIndex(index+1)}
            alt='cover' 
            fill={true}
            objectFit='cover'/>
            <div className={style.bannerText}>
                <h1 className='text-4xl font-medium'>ศูนย์บริการฉีดวัคซีนโรคโควิด19 ฟรี</h1>
                <h3 className='text-3xl font-serif'>เพียงแจ้งชื่อ นั่งรอ และพร้อมฉีด</h3>
            </div>
        </div>
    )
}