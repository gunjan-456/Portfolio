import { useState } from "react"

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message Sent 🚀 (connect backend later)")
  }

  return (
    <section id="contact" className="py-20 px-6 bg-[#0b0f1a] text-white">

      <div className="max-w-6xl mx-auto">

        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 
        bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 
        bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

         
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Let's Connect 👋</h3>

            <p className="text-gray-400">
              I'm open to freelance projects, internships, and full-time opportunities.
              Feel free to reach out!
            </p>

            <div className="space-y-3 text-gray-300">
              <p>📧 gunjansingh72002@gmail.com</p>
              <p>📍 Delhi</p>
            </div>

           
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/gunjan-456" target="_blank"
                className="px-4 py-2 border border-white/20 rounded-md hover:bg-white/10 transition">
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/gunjan-singh-3620b822a/" target="_blank"
                className="px-4 py-2 border border-white/20 rounded-md hover:bg-white/10 transition">
                LinkedIn
              </a>
            </div>
          </div>

         
          <form onSubmit={handleSubmit}
            className="backdrop-blur-lg bg-white/10 p-6 rounded-xl border border-white/10 
            shadow-[0_0_20px_rgba(168,85,247,0.2)] space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-white/5 border border-white/10 
              focus:outline-none focus:border-purple-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-white/5 border border-white/10 
              focus:outline-none focus:border-purple-400"
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-white/5 border border-white/10 
              focus:outline-none focus:border-purple-400"
              required
            />

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 
              rounded-md hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] 
              transition duration-300">
              Send Message 🚀
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact