import profile from "../assets/profilePic.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#0a0a0a] text-white relative">

      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-[#0a0a0a]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

       
          <div className="flex justify-center">
            <img
            src={profile}
            alt="Gunjan Singh profile"
            className="w-64 h-64 object-cover rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(168,85,247,0.3)]"
          />
          </div>

          
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            
            <p className="text-gray-200 leading-relaxed">
              I am a passionate Full Stack Developer specializing in building modern,
              scalable web applications using the MERN stack. I enjoy crafting clean,
              responsive UI and solving real-world problems with efficient backend systems.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              I have hands-on experience with React, Node.js, MongoDB, and REST APIs.
              I love learning new technologies and continuously improving my skills.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#projects"
                className="px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-5 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About