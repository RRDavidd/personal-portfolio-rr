'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const RandomNumber = (max: number) =>  {
  return Math.floor(Math.random() * max);
}


export default function RandomCats() {
  const [randArr, setRandArr] = useState<number[][]>([]);
  useEffect(() => {
    let newRandArr = [];
    for(let i = 0; i < 5; i++) {
      const rand1 = RandomNumber(1000);
      const rand2 = RandomNumber(1000);
      newRandArr.push([rand1, rand2]);

    }
    setRandArr(newRandArr);
  }, [])
  return(
    <>
      {console.log(randArr)}
      { randArr.length > 0 && (
        <div className={`absolute top-[${randArr[0][0]}px] right-[${randArr[0][1]}px]`}>
          <Image alt="cat" width={50} height={50} src="/cat5.png"/>
        </div>
        )
      }

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