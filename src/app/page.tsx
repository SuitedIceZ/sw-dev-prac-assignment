import Image from 'next/image'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main>
      <Banner/>
      <div className="m-5 flex flex-row content-around justify-around flex-wrap">
        <ProductCard hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg'/>
        <ProductCard hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'/>
        <ProductCard hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg'/>
      </div>
    </main>
  )
}
