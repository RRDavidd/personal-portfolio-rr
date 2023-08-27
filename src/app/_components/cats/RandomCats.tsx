"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const makeRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};

export default function RandomCats() {
  const [randArr, setRandArr] = useState<number[][]>([]);

  useEffect(() => {
    setRandArr(
      Array(11)
        .fill(0)
        .map((_, i) => {
          return [makeRandomNumber(1000), makeRandomNumber(1000)];
        })
    );
  }, []);

  if (!randArr.length) return null; // Or you can return a loader/spinner
  return (
    <>
      {Array(11)
        .fill(0)
        .map((_, i) => {
          return (
            <div
              className={`tae border border-pink-300 fixed`}
              key={i}
              style={{ top: `${randArr[i][1]}px` }}
            >
              <Image
                alt="cat"
                width={"150"}
                height={150}
                src={`/cat${i + 1}.png`}
              />
            </div>
          );
        })}

      <div className="absolute">
        <Image alt="cat" width={50} height={50} src="/cat6.png" />
      </div>
      <div className="absolute">
        <Image alt="cat" width={50} height={50} src="/cat7.png" />
      </div>
      <div className="absolute">
        <Image alt="cat" width={50} height={50} src="/cat8.png" />
      </div>
      <div className="absolute">
        <Image alt="cat" width={50} height={50} src="/cat9.png" />
      </div>
      <div className="absolute">
        <Image alt="cat" width={50} height={50} src="/cat10.png" />
      </div>
      <div className="absolute">
        <Image alt="cat" width={50} height={50} src="/cat11.png" />
      </div>
    </>
  );
}
