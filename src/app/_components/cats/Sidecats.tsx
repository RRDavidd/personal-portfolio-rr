'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Sidecats(){
  const [scroll, setScroll] = useState(0)
  const [displayCat, setCat] = useState(false)
  useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY)
      })
      if(scroll > 648) {
        setCat(true)
      } else {
        setCat(false)
      }
    }, [scroll]
  )
  return(
    <>
      <figure className="absolute top-0 -left-52 hover:left-0 transition-all">
        <Image src="/cat1.png" width={275} height={250} alt="crazy-cat-1" />
        <p className="text-xs">stinker cat</p>
      </figure>
      <Link href="/">
        <figure className={`fixed right-0 -bottom-40 ${displayCat ? "-bottom-0 transition-all" : "-bottom-40 transition-all"} `}>
          <p className="text-xs text-center">scroll to top</p>
          <Image src="/cat5.png" width={75} height={250} alt="crazy-cat-1" />
        </figure>
      </Link>
    </>
  )
}