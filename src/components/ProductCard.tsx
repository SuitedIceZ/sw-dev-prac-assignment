import Image from 'next/image'
import InteractiveCard from "./InteractiveCard";

export default function ProductCard ( { hospitalName, imgSrc } : { hospitalName:string, imgSrc:string } ) {
    return (
        <InteractiveCard hospitalName={hospitalName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
            <Image src={imgSrc}
            alt='Vaccine Picture' 
            fill={true}
            className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%] p-[10px] text-black'>{hospitalName}</div>
         </InteractiveCard>
    )
}