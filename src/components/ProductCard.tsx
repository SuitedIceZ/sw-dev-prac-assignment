import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

export default function ProductCard(props: { hospitalName: string; imgSrc: string, onRating:Function,score:number }) {
  const { hospitalName, imgSrc, onRating, score } = props;

  return (
    <InteractiveCard hospitalName={hospitalName}>
      <div className="w-full h-[60%] relative rounded-t-lg">
        <Image src={imgSrc} alt="Pic" fill={true} objectFit="cover" />
      </div>
      <div className="w-full h-[20%] p-[10px] text-black">{hospitalName}</div>
      <Rating value={score} onChange={(e,v)=>onRating(hospitalName,v)}/>
    </InteractiveCard>
  );
}