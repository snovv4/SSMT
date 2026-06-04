import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar.jsx'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 h-16 bg-white border-b border-gray-200 sticky top-0 z-50">
      
      <div className="flex items-center gap-28">
        <Link to="/" className="text-2xl font-bold text-gray-900 tracking-wide no-underline">
          SSMT
        </Link>
        <div className="flex gap-7">
          <Link to="/" className="text-gray-600 text-sm font-medium no-underline hover:text-gray-900 transition-colors">Home</Link>
          <Link to="/items" className="text-gray-600 text-sm font-medium no-underline hover:text-gray-900 transition-colors">Items</Link>
          <Link to="/posts" className="text-gray-600 text-sm font-medium no-underline hover:text-gray-900 transition-colors">Posts</Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Searchbar className="w-64" />
        <Link to="/cart" className="text-xl no-underline hover:scale-110 transition-transform">🛒</Link>
        <Link to="/login" className="text-gray-600 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors no-underline">Login</Link>
        <Link to="/register" className="bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-700 transition-colors no-underline">Register</Link>
      </div>

    </nav>
  )
}

export default Navbar