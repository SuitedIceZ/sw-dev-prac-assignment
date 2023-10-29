import Image from "next/image"
import getHospital from "@/libs/getHospital"
import Link from "next/link"

export default async function HospitalDetailPage( {params} : { params: {hid:string}}){

    const hospitalDetail = await getHospital(params.hid)
    /**
     * Mock Data for Demonstration Only
     */
    // const mockHospitalRepo = new Map()
    // mockHospitalRepo.set("001",{hospitalName:"Chulalongkorn Hospital",imgSrc:"/img/chula.jpg"})
    // mockHospitalRepo.set("002",{hospitalName:"Rajavithi Hospital",imgSrc:"/img/rajavithi.jpg"})
    // mockHospitalRepo.set("003",{hospitalName:"Thammasat University Hospital",imgSrc:"/img/thammasat.jpg"})
    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium text-black">Hospital ID : {params.hid }</h1>
            <div className="flex flex-row my-5">
                <Image src={ hospitalDetail.data.picture }
                    alt="Hospital Image"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]">
                </Image>
                <div className="flex flex-col">
                    <div className="text-md mx-5 mb-10 text-black text-left">{ hospitalDetail.data.name }</div>
                    <div className="text-md mx-5 text-black text-left">Address: { hospitalDetail.data.address }</div>
                    <div className="text-md mx-5 text-black text-left">District: { hospitalDetail.data.district }</div>
                    <div className="text-md mx-5 text-black text-left">Province: { hospitalDetail.data.province }</div>
                    <div className="text-md mx-5 text-black text-left">Postalcode: { hospitalDetail.data.postalcode }</div>
                    <div className="text-md mx-5 text-black text-left">Tel: { hospitalDetail.data.tel }</div>

                    {/* <Link href={`/booking?id=${params.hid}&hospitalName=${hospitalDetail.data.name}`}>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">Book a Vaccine</button>
                    </Link> */}
                </div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{hid:'001'},{hid:'002'},{hid:'003'}]
}