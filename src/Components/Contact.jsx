import { useState } from "react"

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert("Message sent successfully")

    setFormData({
      name: "",
      email: "",
      message: ""
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-[#0a0a0a] text-white scroll-mt-24">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 
        bg-gradient-to-r from-purple-400 to-blue-400 
        bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          
          <div>
            <h3 className="text-xl font-semibold mb-4">Let's Connect 👋</h3>

            <p className="text-gray-400 mb-6">
              I'm open to freelance projects, internships, and full-time opportunities. Feel free to reach out!
            </p>

            <p className="mb-3">📧 gunjansingh72002@gmail.com</p>
            <p className="mb-6">📍 Delhi</p>

            <div className="flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg"
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full mb-4 p-3 rounded-lg bg-transparent border border-white/20 focus:outline-none focus:border-purple-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full mb-4 p-3 rounded-lg bg-transparent border border-white/20 focus:outline-none focus:border-purple-400"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full mb-4 p-3 rounded-lg bg-transparent border border-white/20 focus:outline-none focus:border-purple-400"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 
              hover:scale-105 transition duration-300 shadow-lg"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact