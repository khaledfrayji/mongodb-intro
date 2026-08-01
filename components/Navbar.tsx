
const Navbar = () => {
  return (
    <nav
        className="bg-gray-800 p-4 text-white flex justify-between items-center"
    >   
       <h1 className="text-xl font-bold">My App</h1>
       <ul className="flex space-x-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
       </ul>
    </nav>
  )
}

export default Navbar