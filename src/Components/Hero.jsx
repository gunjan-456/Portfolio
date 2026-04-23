import profile from "../assets/profilePic.jpg"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] text-white scroll-mt-24"
    >

    
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#0a0a0a] to-[#0b1f3a]"></div>

     
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

     
      <div className="relative z-10 text-center backdrop-blur-lg bg-white/10 p-10 rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] max-w-xl w-full">

        
        <div className="flex justify-center mb-6">
          <img
            src={profile}
            alt="Gunjan Singh"
            className="w-32 h-32 rounded-full object-cover object-center scale-110 border-2 border-purple-400 shadow-md hover:scale-110 transition duration-300"
          />
        </div>

       
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Gunjan Singh
          </span>
        </h1>

       
        <p className="mt-4 text-gray-300 text-lg">
          Crafting fast, scalable & user-focused web experiences ⚡
        </p>

      
        <div className="mt-6 flex justify-center gap-4 flex-wrap">

          <a href="#projects">
            <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md hover:scale-105 transition">
              View My Projects
            </button>
          </a>

          <a href="/Gunjan_FullStack_Resume.pdf" download>
            <button className="px-6 py-2.5 border border-purple-400 rounded-md hover:bg-white/10 transition">
              Download Resume
            </button>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero