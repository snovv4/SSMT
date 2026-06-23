import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'
import Searchbar from './Searchbar.jsx'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="border-b border-[#D32F2F] sticky top-0 z-50 bg-[#121212]">
      
      {/* Main bar */}
      <div className="flex items-center justify-between px-8 h-16">
        
        <div className="flex items-center gap-16">
          <Link to="/" className="text-3xl font-bold tracking-wide no-underline text-[#ffffff]">
            SSMT
          </Link>
          {/* Links — ẩn khi màn hình nhỏ hơn md */}
          <div className="hidden md:flex gap-7">
            <Link to="/" className="text-[#FFFFFF] text-sm font-medium no-underline hover:text-[#D32F2F] transition-colors">Home</Link>
            <Link to="/items" className="text-[#FFFFFF] text-sm font-medium no-underline hover:text-[#D32F2F] transition-colors">Items</Link>
            <Link to="/posts" className="text-[#FFFFFF] text-sm font-medium no-underline hover:text-[#D32F2F] transition-colors">Posts</Link>
          </div>
        </div>

        {/* Actions — ẩn khi màn hình nhỏ hơn md */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center rounded-md overflow-hidden w-44 lg:w-72 xl:w-96">
            <Searchbar />
          </div>
          <Link to="/cart" className="no-underline hover:scale-110 transition-transform">
            <ShoppingCart size={22} strokeWidth={1.5} />
          </Link>
          <Link to="/login" className="text-[#FFFFFF] text-sm font-medium px-3 py-1.5 rounded-md hover:bg-[#D32F2F] transition-colors no-underline">Login</Link>
          <Link to="/register" className="bg-[#D32F2F] text-white text-sm font-medium px-3 py-1.5 rounded-md hover:bg-[#B71C1C] transition-colors no-underline">Register</Link>
        </div>

        {/* Hamburger — chỉ hiện khi màn hình nhỏ hơn md */}
        <button
          className="md:hidden text-[#FFFFFF]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile menu — chỉ hiện khi menuOpen = true */}
      {menuOpen && (
        <div className="bg-transparent md:hidden flex flex-col items-center px-8 pb-4 gap-3 border-t border-[#D32F2F]">
          <Searchbar />
          <Link to="/" className="text-[#FFFFFF] text-sm font-medium no-underline py-1 hover:text-[#D32F2F] transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/items" className="text-[#FFFFFF] text-sm font-medium no-underline py-1 hover:text-[#D32F2F] transition-colors" onClick={() => setMenuOpen(false)}>Items</Link>
          <Link to="/posts" className="text-[#FFFFFF] text-sm font-medium no-underline py-1 hover:text-[#D32F2F] transition-colors" onClick={() => setMenuOpen(false)}>Posts</Link>
          <Link to="/cart" className="text-[#FFFFFF] text-sm font-medium no-underline py-1 hover:text-[#D32F2F] transition-colors" onClick={() => setMenuOpen(false)}>Cart</Link>
          <div className="flex gap-3 mt-2">
            <Link to="/login" className="text-[#FFFFFF] text-sm font-medium px-3 py-1.5 rounded-md hover:bg-[#D32F2F] transition-colors no-underline" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" className="bg-[#D32F2F] text-white text-sm font-medium px-3 py-1.5 rounded-md hover:bg-[#B71C1C] transition-colors no-underline" onClick={() => setMenuOpen(false)}>Register</Link>
          </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar