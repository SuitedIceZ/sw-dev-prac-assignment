'use client'
import React from "react";

export default function InteractiveCard({children,hospitalName}:{children:React.ReactNode,hospitalName:string}){
//   function onCardSelected(){
//     alert("You Select " + hospitalName)
//   }
  function onCardMouseAction(event:React.SyntheticEvent) {
    if(event.type=='mouseover'){
      event.currentTarget.classList.remove('bg-white')
      event.currentTarget.classList.remove('shadow-lg')
      event.currentTarget.classList.add('bg-neutral-200')
      event.currentTarget.classList.add('shadow-2xl')
    }
    else{
      event.currentTarget.classList.remove('bg-neutral-200')
      event.currentTarget.classList.remove('shadow-2xl')
      event.currentTarget.classList.add('bg-white')
      event.currentTarget.classList.add('shadow-lg')
    }
  }

  return(
    <div className="h-[300px] rounded-lg shadow-lg"
    // onClick={()=>onCardSelected()}
    onMouseOver={(e)=>onCardMouseAction(e)}
    onMouseOut={(e)=>onCardMouseAction(e)}
    >
      {children}
    </div>
  )
}