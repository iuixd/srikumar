
const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center w-full py-4">
        <ul className="flex space-x-6 color-turquoise-500">
          <li><a href="#hero">Home</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#github-portfolio">GitHub Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar