import { Input } from "@mui/material";
import LocationDateReserve from "@/components/LocationDateReserve";
export default function Booking() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium">New Booking</div>

      <div className="w-fit space-y-2 flet items-center">
        <div className="text-md text-left text-gray-600">Name</div>
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-[100%] px-10 py-5">
          <Input placeholder="name"/>
          <Input placeholder="surname"/>
        </div>

        <div className="text-md text-left text-gray-600">ID card number</div>
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-[100%] px-10 py-5">
          <Input placeholder="id card number"/>
        </div>

        <div className="text-md text-left text-gray-600">Location & Date</div>
        <LocationDateReserve />

      </div>
        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">Comfirm!</button>
    </main>
  );
}