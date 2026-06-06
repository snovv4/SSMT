import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'
import Searchbar from './Searchbar.jsx'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      
      {/* Main bar */}
      <div className="flex items-center justify-between px-8 h-16">
        
        <div className="flex items-center gap-16">
          <Link to="/" className="text-3xl font-bold text-gray-900 tracking-wide no-underline">
            SSMT
          </Link>
          {/* Links — ẩn khi màn hình nhỏ hơn md */}
          <div className="hidden md:flex gap-7">
            <Link to="/" className="text-gray-600 text-sm font-medium no-underline hover:text-gray-900 transition-colors">Home</Link>
            <Link to="/items" className="text-gray-600 text-sm font-medium no-underline hover:text-gray-900 transition-colors">Items</Link>
            <Link to="/posts" className="text-gray-600 text-sm font-medium no-underline hover:text-gray-900 transition-colors">Posts</Link>
          </div>
        </div>

        {/* Actions — ẩn khi màn hình nhỏ hơn md */}
        <div className="hidden md:flex items-center gap-4">
          <Searchbar />
          <Link to="/cart" className="no-underline hover:scale-110 transition-transform">
            <ShoppingCart size={22} strokeWidth={1.5} />
          </Link>
          <Link to="/login" className="text-gray-600 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors no-underline">Login</Link>
          <Link to="/register" className="bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-700 transition-colors no-underline">Register</Link>
        </div>

        {/* Hamburger — chỉ hiện khi màn hình nhỏ hơn md */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile menu — chỉ hiện khi menuOpen = true */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-8 pb-4 gap-3 border-t border-gray-100">
          <Searchbar />
          <Link to="/" className="text-gray-700 text-sm font-medium no-underline py-1" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/items" className="text-gray-700 text-sm font-medium no-underline py-1" onClick={() => setMenuOpen(false)}>Items</Link>
          <Link to="/posts" className="text-gray-700 text-sm font-medium no-underline py-1" onClick={() => setMenuOpen(false)}>Posts</Link>
          <Link to="/cart" className="text-gray-700 text-sm font-medium no-underline py-1" onClick={() => setMenuOpen(false)}>Cart</Link>
          <div className="flex gap-3 mt-2">
            <Link to="/login" className="text-gray-600 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-100 no-underline" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" className="bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-700 no-underline" onClick={() => setMenuOpen(false)}>Register</Link>
          </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar