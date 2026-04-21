import profile from "../assets/profilePic.jpg"

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] text-white">

      
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#0a0a0a] to-[#0b1f3a]"></div>

    
      <div className="absolute w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

  
      <div className="relative z-10 text-center backdrop-blur-lg bg-white/10 p-10 rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] max-w-xl w-full">

      
        <img
          src={profile}
          alt="Gunjan Singh profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)] hover:scale-105 transition duration-300"
        />

    
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Gunjan Singh
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-200 leading-relaxed">
          Crafting fast, scalable & user-focused web experiences ⚡
        </p>

       
        <a href="#projects">
          <button className="mt-6 px-7 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition duration-300">
            View My Projects 
          </button>
        </a>

      </div>
    </section>
  )
}

export default Hero