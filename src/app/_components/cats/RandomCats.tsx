"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const RandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};

export default function RandomCats() {
  const [randArr, setRandArr] = useState<number[][]>([]);
  useEffect(() => {
    setRandArr(
      Array(11)
        .fill(0)
        .map((_, i) => {
          return [RandomNumber(1000), RandomNumber(1000)];
        })
    );
  }, []);

  if (!randArr.length) return null; // Or you can return a loader/spinner
  return (
    <>
      {console.log(randArr[0][0])}
      {Array(11)
        .fill(0)
        .map((_, i) => {
          return (
            <div className={`fixed top-[${randArr[0][0]}]`} key={i}>
              <Image
                alt="cat"
                width={50}
                height={50}
                src={`/cat${i + 1}.png`}
              />
            </div>
          );
        })}

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
  );
}
