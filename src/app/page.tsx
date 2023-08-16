
import Image from "next/image"
import Link from "next/link"
import Sidecats from "./_components/cats/Sidecats"
import Github from "./_components/svgs/Github"
import Instagram from "./_components/svgs/Instagram"
import Linkedin from "./_components/svgs/Linkedin"
import Lefsticky from "./_components/layout/Leftsticky"
import Rightcontent from "./_components/layout/Rightcontent"
import RandomCats from "./_components/cats/RandomCats"

export default function Home() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto xl:p-0 lg:p-5 p-5">
        <Sidecats />
        {/* <RandomCats /> */}
        <div className="flex justify-between gap-5 md:flex-row flex-col ">
          <Lefsticky />
          <Rightcontent />
        </div>
      </main>
    </>
  )
}
