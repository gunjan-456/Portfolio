const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Gunjan
      </h1>

      <ul className="flex gap-8 text-sm">
        <li><a href="#home" className="hover:text-purple-400">Home</a></li>
        <li><a href="#about" className="hover:text-purple-400">About</a></li>
        <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
      </ul>

    </nav>
  )
}

export default Navbar