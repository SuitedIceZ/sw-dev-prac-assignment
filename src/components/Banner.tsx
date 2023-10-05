"use client"
import style from './banner.module.css'
import Image from 'next/image'
import { useState } from 'react'; 
import { useRouter } from 'next/navigation';
export default function Banner () {
    const covers = ['/img/cover1.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()

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
            <button className='bg-white text-cyan-600 border boder-cyan-600
                    font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
                    hover:bg-cyan-600 hover:text-white hover:border-transparent'
                    onClick={(e) => { e.stopPropagation; router.push('/hospital')}}>
                Select Your Hospital
            </button>
        </div>
    )
}