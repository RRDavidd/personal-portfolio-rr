
export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto">
      <div className="flex justify-between gap-5">
        <div className="flex-shrink-0 top-0 sticky max-h-screen w-1/2 py-24">
          <h1 className="text-7xl font-bold mb-2">Raphael David</h1>
          <p className="font-normal mb-4">Junior Web Developer</p>
          <p className="font-light text-gray-400">Some guy trying to get on dev stuff.</p>
        </div>
        <div className="py-24">
          <section className="mb-28">
            <p className="text-gray-400 mb-4">
              This will be the section about <strong>myself</strong>, where I will talk about myself and stuff
            </p>
            <p className="text-gray-400 mb-4">
              This will be the section about <strong>myself</strong>, where I will talk about myself and stuff
            </p>
            <p className="text-gray-400 mb-4">
              This will be the section about <strong>myself</strong>, where I will talk about myself and stuff
            </p>
            <p className="text-gray-400 mb-4">
              This will be the section about <strong>myself</strong>, where I will talk about myself and stuff
            </p>
          </section>

          <section className="mb-28">
            <h2 className="text-4xl mb-4 font-medium">Experience</h2>
              <a href="https://www.jaladesign.com.au/" target="_blank">
                <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 hover:backdrop-blur-2xl transition-all duration-300 rounded flex gap-10 mb-1">
                  <div className="text-gray-400 flex-shrink-0 w-1/4 text-xs">
                    2023 — PRESENT
                  </div>
                    <div className="transition-all">
                      <p className="group-hover:text-sky-300 duration-300">Jala Design — Junior Web Developer</p>
                      <p className="text-gray-400 ">Worked with a small team using <strong>PHP/WordPress</strong> and <strong>JS (jQuery)</strong> to develop websites</p>
                  </div>
                </div>
              </a>
              <a href="https://thehandsomedevs.com.au/" target="_blank">
                <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 hover:backdrop-blur-2xl transition-all duration-300 rounded flex gap-10 mb-1">
                  <div className="text-gray-400 flex-shrink-0 w-1/4 text-xs">
                    2021 — PRESENT
                  </div>
                    <div className="transition-all">
                      <p className="group-hover:text-sky-300 duration-300">The Handsome Devs — Junior Web Developer</p>
                      <p className="text-gray-400 ">Small startup project team to create websites using <strong>React</strong> where try out headless CMS' usually using <strong>GraphQL</strong> for data queries.</p>
                  </div>
                </div>
              </a>
          </section>

          <section className="mb-28">
            <h2 className="text-4xl mb-4 font-medium">Education</h2>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 hover:backdrop-blur-2xl transition-all duration-300 rounded flex gap-10 mb-1">
              <div className="text-gray-400 flex-shrink-0 w-1/4 text-xs">
                2021 — PRESENT
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Bachelor of Information Technology Major in Computer Science</p>
                <p className="text-gray-400">Macquarie University</p>
              </div>
            </div>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 hover:backdrop-blur-2xl transition-all duration-300 rounded flex gap-10 mb-1">
              <div className="text-gray-400 flex-shrink-0 w-1/4 text-xs">
                2020 — 2020
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Diploma of Information Technology</p>
                <p className="text-gray-400">Macquarie University</p>
              </div>
            </div>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 hover:backdrop-blur-2xl transition-all duration-300 rounded flex gap-10 mb-1">
              <div className="text-gray-400 flex-shrink-0 w-1/4 text-xs">
                2019 — 2020
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Highschool</p>
                <p className="text-gray-400">St. Leo's Catholic College</p>
              </div>
            </div>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 hover:backdrop-blur-2xl transition-all duration-300 rounded flex gap-10 mb-1">
              <div className="text-gray-400 flex-shrink-0 w-1/4 text-xs">
                2011 — 2018
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Elementary - Highschool</p>
                <p className="text-gray-400">Don Bosco Academy Pampanga</p>
              </div>
            </div>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 hover:backdrop-blur-2xl transition-all duration-300 rounded flex gap-10 mb-1">
              <div className="text-gray-400 flex-shrink-0 w-1/4 text-xs">
                2006 — 2011
              </div>
              <div className="transition-all duration-300">
                <p className="group-hover:text-sky-300 duration-300">Elementary</p>
                <p className="text-gray-400">Westfields International School</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
