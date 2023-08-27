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

  if (!randArr.length) return null;
  return (
    <>
      {console.log(randArr)}
      {Array(11)
        .fill(0)
        .map((_, i) => {
          return (
            <div
              className="fixed -z-10 opacity-40"
              key={i}
              style={{ top: `${randArr[i][1]}px`, left: `${randArr[i][0]}px` }}
            >
              <Image
                alt="cat"
                width={25}
                height={50}
                src={`/cat${i + 1}.png`}
              />
            </div>
          );
        })}
    </>
  );
}
