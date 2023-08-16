'use client'

import Image from "next/image"
import { useEffect } from "react"

const RandomNumber = (max: number) =>  {
  return Math.floor(Math.random() * max);
}


export default function RandomCats() {
  const rand = RandomNumber(1000)
  useEffect(() => {
    console.log("refresh")
  }, [rand])
  return(
    <>
      <div className={`absolute top-[500px] right-[${rand}px]`}>
        <Image alt="cat" width={50} height={50} src="/cat5.png"/>
      </div>
      {/* <div className="absolute">
        <Image alt="cat" width={50} height={50} src="/cat6.png"/>
      </div>
      <div className="absolute">
        <Image alt="cat" width={50} height={50} src="/cat7.png"/>
      </div>
      <div className="absolute">
        <Image alt="cat" width={50} height={50} src="/cat8.png"/>
      </div>
      <div className="absolute">
        <Image alt="cat" width={50} height={50} src="/cat9.png"/>
      </div>
      <div className="absolute">
        <Image alt="cat" width={50} height={50} src="/cat10.png"/>
      </div>
      <div className="absolute">
        <Image alt="cat" width={50} height={50} src="/cat11.png"/>
      </div> */}
    </>
  )
}