import ProductCard from "./ProductCard";
import Link from 'next/link';

export default async function HospitalCatalog({hospitalJson}: {hospitalJson:Object}) {
    const hospitalJsonReady = await hospitalJson;
    
    return (
        <>
        <h1 className="text-xl font-small text-black">Explore {hospitalJsonReady.count} hospitals in our system</h1>

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