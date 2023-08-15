import Image from "next/image"
import Link from "next/link"

export default function Sidecats(){
  return(
    <>
      <figure className="absolute top-0 -left-52 hover:left-0 transition-all">
        <Image src="/cat1.png" width={300} height={250} alt="crazy-cat-1" />
        <p className="text-xs">stinker cat</p>
      </figure>
      <Link href="/">
        <figure className="absolute right-0 -bottom-full">
          <p className="text-xs text-center">scroll to top</p>
          <Image src="/cat5.png" width={150} height={250} alt="crazy-cat-1" />
        </figure>
      </Link>
    </>
  )
}