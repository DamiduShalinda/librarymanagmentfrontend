
const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between p-5 w-full">
      <h1 className="text-lg font-bold">Library Managment</h1>
      <div className="flex flex-row gap-3">
        <a href="/">Home</a>
        <a href="/authors">Authors</a>
        <a href="/books">Books</a>
      </div>
    </nav>
  )
}

export default Navbar