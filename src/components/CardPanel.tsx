'use client'
import { useReducer } from 'react'
import ProductCard from "./ProductCard";
import Link from 'next/link';

export default function CardPanel() {
  const ratingReducer = (ratingList:Map<string,number>, action:{type:string, hospitalName:string, score:number})=>{
    switch(action.type) {
      case 'add' : {
        return new Map(ratingList.set(action.hospitalName,action.score))
      }
      case 'remove' : {
        ratingList.delete(action.hospitalName)
        return new Map(ratingList)
      }
      default : return ratingList
    }
  }

  const [ratingList, dispatchRating] = useReducer(ratingReducer, new Map<string,number>())
  /**
   * Mock Data for Demontration Only
   */
  const mockHospitalRepo = [
    {hid: "001",hospitalName:"Chulalongkorn Hospital",imgSrc:"/img/chula.jpg"},
    {hid: "002",hospitalName:"Rajavithi Hospital",imgSrc:"/img/rajavithi.jpg"},
    {hid: "003",hospitalName:"Thammasat University Hospital",imgSrc:"/img/thammasat.jpg"},
  ]
  return (
    <div className= "w-full">
      <div className= "m-5 flex flex-row content-around justify-around flex-wrap" >
        {
          mockHospitalRepo.map((hospitalItem)=>(
             <Link href={`/hospital/${hospitalItem.hid}`} className='w-1/5'>
              <ProductCard hospitalName={hospitalItem.hospitalName} imgSrc={hospitalItem.imgSrc}
                          score={ratingList.has(hospitalItem.hospitalName) ? ratingList.get(hospitalItem.hospitalName)! : 0}
                          onRating={(hospitalName:string, score:number) => 
                            dispatchRating({type:'add', hospitalName:hospitalName, score:score })}/>
             </Link>
          ))
        }
     </div>
      {Array.from(ratingList).map(([hospitalName, score]) => (
        <div className= "m-2" key={hospitalName}
             onClick={()=>dispatchRating({type:'remove', hospitalName:hospitalName, score:score})}>
          
          <div className="p-[10px] text-black">{hospitalName} Rating = {score}</div>
        </div>
      ))}
    </div>
  )
}