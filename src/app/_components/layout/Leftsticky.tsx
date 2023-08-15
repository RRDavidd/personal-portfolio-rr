import Github from '../svgs/Github'
import Linkedin from '../svgs/Linkedin'
import Instagram from '../svgs/Instagram'
import Link from 'next/link'
import Navbar from './Navbar'

export default function Lefsticky(){
  return(
    <div className="flex-shrink-0 top-0 md:sticky max-h-screen w-1/2 py-24 flex flex-col justify-between">
      <div>
        <div className="mb-20">
            <h1 className="font-bold mb-2 hover:scale-110 hover:cursor-pointer duration-500 hover:drop-shadow-[0_0px_120px_rgba(0,255,0,.8)] transition-all">Raphael David</h1>
          <p className="font-normal mb-4">Junior Web Developer</p>
          <p className="font-light text-secondary">Some guy trying to get on dev stuff.</p>
        </div>
        <Navbar />
      </div>
      <div className="flex gap-8">
        <figure>
          <a href="https://github.com/RRDavidd" target="_blank">
            <Github width={30} height={30} className="fill-secondary hover:fill-white hover:scale-110 transition-all duration-300"/>
          </a>
        </figure>
        <figure>
          <a href="https://www.instagram.com/rrdvid/?" target="_blank">
            <Instagram width={30} height={30} className="fill-secondary hover:fill-white hover:scale-110 transition-all duration-300"/>
          </a>
        </figure>
        <figure>
          <a href="https://www.linkedin.com/in/raphael-david-013b49241/" target="_blank">
            <Linkedin width={30} height={30} className="fill-secondary hover:fill-white hover:scale-110 transition-all duration-300"/>
          </a>
        </figure>
      </div>
  </div>
  )
}