import SwiggyProfile from "../assets/SwiggyProfile.png"
import InstaProfile from "../assets/InstaProfile.png"
import jobProfile from "../assets/jobProfile.png"


const projects = [
  {
    title: "Swiggy Clone",
    desc: "Responsive food ordering UI with live API integration and state management.",
    tech: "React, Redux, Tailwind",
    live: "https://swiggy-c6dq0a8eb-gunjan-singhs-projects.vercel.app/",
    github: "https://github.com/gunjan-456/swiggy",
    img: SwiggyProfile
  },
  {
    title: "Social Media App",
    desc: "Full stack MERN app with authentication and real-time features.",
    tech: "MERN, JWT, Socket.io",
    live: "https://social-media-fe-peach.vercel.app/",
    github: "https://github.com/gunjan-456/Social_Media_BE",
    img: InstaProfile
  },
  {
    title: "Job Portal",
    desc: "Role-based job portal with filtering, authentication and APIs.",
    tech: "MERN, JWT",
    live: "https://job-portal-fe.vercel.app",
    github: "https://github.com/gunjan-456/job-Portal-BE",
    img: jobProfile
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#0a0a0a] text-white">

      <div className="max-w-6xl mx-auto">

      
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          My Projects
        </h2>

       
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition duration-300"
            >

             
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

        
              <div className="p-5">

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-3">
                  {project.desc}
                </p>

                <p className="text-sm text-purple-400 mb-4">
                  {project.tech}
                </p>

           
                <div className="flex gap-3">

                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-sm hover:scale-105 transition"
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-1.5 border border-white/20 rounded-md text-sm hover:bg-white/10 transition"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects