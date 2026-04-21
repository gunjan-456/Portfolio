const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Redux",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Git",
  "Postman"
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[#0a0a0a] text-white">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
            key={index}
            className="backdrop-blur-lg bg-white/10 p-6 rounded-xl border border-white/10 hover:scale-105 hover:border-purple-400/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition duration-300"
            >
              
              <p className="text-gray-200 font-semibold tracking-wide">
                {skill}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills