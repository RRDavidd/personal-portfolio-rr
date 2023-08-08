
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
              Raphael has been obsessed with technology and computer games from a very young age. He decided to take on tutorials about programming – eventually specialising in web development languages after starting to create his own websites as a hobby. Raphael is currently a university student, completing his Bachelor of IT Computer Science in QUT, providing a good foundation for his programming knowledge. Raphael is very keen on learning new technologies and expanding his knowledge every day.
            </p>
            <p className="text-gray-400 mb-4">
              Raphael is a determined problem-solver and never gives up until a solution has been determined. He is always down to trying out new things and is ready to risk it all. He likes having an enjoyable environment with his co-workers, having small talk and having fun.
            </p>
            <p className="text-gray-400">
              Outside of coding, you will find Raphael playing sports, especially basketball, going to the gym, or hanging out with his pretty girlfriend. Most of the time you will find him in his room playing video games or trying out a new framework. His table tennis skills are still in the works, but watch out! He is rapidly improving his spins and smashes, and is on his way to being number one!
            </p>
          </section>

          <section className="mb-28">
            <h2 className="text-4xl mb-4">Education</h2>
            <div className="group p-3 hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 hover:backdrop-blur-2xl transition-all rounded flex gap-10">
              <div className="text-gray-400">
                2020 — 2020
              </div>
              <div className="group-hover:text-sky-300 transition-all">
                Diploma of Information Technology
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
