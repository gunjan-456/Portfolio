const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Gunjan
      </h1>

      <ul className="flex gap-8 text-sm">
        <li className="hover:text-purple-400 cursor-pointer">Home</li>
        <li className="hover:text-purple-400 cursor-pointer">About</li>
        <li className="hover:text-purple-400 cursor-pointer">Projects</li>
        <li className="hover:text-purple-400 cursor-pointer">Contact</li>
      </ul>

    </nav>
  )
}

export default Navbar