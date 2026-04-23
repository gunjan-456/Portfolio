import profile from "../assets/profilePic.jpg"

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-[#0a0a0a] text-white scroll-mt-24">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>

      
        <div className="grid md:grid-cols-2 gap-10 items-center">

         
          <div className="flex justify-center">
            <img
              src={profile}
              alt="Gunjan Singh"
              className="w-56 h-56 object-cover rounded-xl border border-white/10 shadow-md"
            />
          </div>

    
          <div className="space-y-5">

            <p className="text-gray-300 leading-relaxed">
              I’m a Full Stack Developer specializing in MERN stack, focused on building scalable and high-performance web applications.
            </p>

            <p className="text-gray-400">
              I enjoy solving real-world problems and continuously learning new technologies.
            </p>

            
            <div className="flex flex-wrap gap-3 mt-4">

              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                React
              </span>

              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                Node.js
              </span>

              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                MongoDB
              </span>

              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                JavaScript
              </span>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About