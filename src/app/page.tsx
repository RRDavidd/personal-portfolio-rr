import RandomCats from '@/_components/cats/RandomCats'
import Sidecats from '@/_components/cats/Sidecats'
import Lefsticky from '@/_components/layout/Leftsticky'
import Rightcontent from '@/_components/layout/Rightcontent'


export default function Home() {
  return (
    <>
      <Sidecats />
      <main className="max-w-screen-xl mx-auto">
        {/* <RandomCats /> */}
        <div className="flex justify-between gap-5 md:flex-row flex-col">
          <Lefsticky />
          <Rightcontent />
        </div>
      </main>
    </>
  )
}
