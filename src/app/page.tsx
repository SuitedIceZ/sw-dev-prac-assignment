import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{margin:'20px',display:'flex',flexDirection:"row",alignContent:"space-around",justifyContent:"space-around",flexWrap:"wrap"}}>
        <ProductCard hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg'/>
        <ProductCard hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'/>
        <ProductCard hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg'/>
      </div>
    </main>
  )
}
