import ProductCard from "./ProductCard";
import Link from 'next/link';

export default async function HospitalCatalog({hospitalJson}: {hospitalJson:Object}) {
    const hospitalJsonReady = await hospitalJson;
    return (
        <>
        Explore {hospitalJsonReady.count} models in our calalog
        <div className= "m-5 flex flex-row content-around justify-around flex-wrap" >
        {
          hospitalJsonReady.data.map((hospitalItem:Object)=>(
             <Link href={`/hospital/${hospitalItem.id}`} className='w-1/5'>
              <ProductCard hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}
                        //   score={ratingList.has(hospitalItem.name) ? ratingList.get(hospitalItem.name)! : 0}
                          />
             </Link>
          ))
        }
     </div>
        </>
    )
}