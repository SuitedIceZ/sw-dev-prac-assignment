"use client"
import { useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeVaccineBook } from "@/redux/features/bookSlice"
export default function mybooking(){

    const hospitalItems = useAppSelector( (state)=> state.bookSlice.hospitalItems)
    const dispatch = useDispatch()
    return (
        <main className="p-5">
            <h1 className="text-lg font-medium text-black">my booking</h1>
            {
                hospitalItems.length != 0 ? (
                hospitalItems.map((bookingItem)=>(
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                        // key={bookingItem.hospitalId}>
                        key={bookingItem.hospitalName}>
                            <div className="text-xl text-black">{bookingItem.hospitalName}</div>
                            <div className="text-sm text-black">Name: {bookingItem.name}</div>
                            <div className="text-sm text-black">Surname: {bookingItem.surname}</div>
                            <div className="text-sm text-black">ID: {bookingItem.citizenId}</div>
                            <div className="text-md text-black">Booking Date: {bookingItem.bookingDate}</div>
                            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                            onClick={() => dispatch(removeVaccineBook(bookingItem))}>Remove Booking</button>
                    
                    </div>
                ))
                ) :
                <div>
                    <div className="text-xl text-black">No Vaccine Booking</div>
                </div>
            }
        </main>
    )
}