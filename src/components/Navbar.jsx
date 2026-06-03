import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLink =
    "text-white hover:text-orange-200 transition-all duration-300 font-medium whitespace-nowrap"

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      // CHANGED: Changed w-full to w-screen and added max-w-full to clamp it to the visual screen space
      className="fixed top-0 left-0 w-screen max-w-full z-50 bg-[#C2410C]/95 backdrop-blur-xl shadow-xl overflow-x-hidden"
    >
      {/* Main Container */}
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Premium Brand Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0 select-none group min-w-0"
        >
          {/* Glassmorphism Abstract Optical Lens Icon */}
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/25 backdrop-blur-md flex items-center justify-center shadow-inner group-hover:bg-white/20 transition-all duration-300 shrink-0">
            <div className="w-4 h-4 rounded-full border-2 border-orange-200 group-hover:scale-110 transition-transform duration-300 relative">
              <span className="absolute inset-0 rounded-full bg-orange-200/30 animate-ping" />
            </div>
          </div>
          
          {/* Brand Text Wrapper */}
          <div className="flex items-baseline gap-1.5 min-w-0">
            <span className="text-[10px] font-black text-[#C2410C] bg-orange-100 px-1.5 py-0.5 rounded-md tracking-wider uppercase shadow-sm group-hover:bg-white transition-colors duration-300 shrink-0 self-center">
              New
            </span>
            {/* CHANGED: Swapped text size to dynamically adapt on extra small screens so it never overflows */}
            <span className="text-lg xs:text-xl sm:text-2xl font-black text-white tracking-wide drop-shadow-sm truncate">
              Optiworld
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 shrink-0">
          <Link to="/" className={navLink}>Home</Link>
          <Link to="/shop" className={navLink}>Shop</Link>
          <Link to="/eye-test" className={navLink}>Eye Test</Link>
          <a href="#about" className={navLink}>About</a>
          <a href="#contact" className={navLink}>Contact</a>
          <a
            href="https://wa.me/919477110367"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-[#C2410C] px-6 py-3 rounded-xl font-semibold hover:bg-orange-100 transition-all duration-300 shadow-lg"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          // CHANGED: Added explicit block display and strict right spacing
          className="md:hidden block text-white p-2 hover:bg-white/10 rounded-xl transition-colors focus:outline-none shrink-0"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#C2410C] border-t border-orange-500/40 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col p-6 gap-5">
            <Link to="/" onClick={() => setMenuOpen(false)} className={navLink}>Home</Link>
            <Link to="/shop" onClick={() => setMenuOpen(false)} className={navLink}>Shop</Link>
            <Link to="/eye-test" onClick={() => setMenuOpen(false)} className={navLink}>Eye Test</Link>
            <a href="#about" onClick={() => setMenuOpen(false)} className={navLink}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className={navLink}>Contact</a>
            <a
              href="https://wa.me/919477110367"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#C2410C] text-center py-3 rounded-xl font-semibold hover:bg-orange-100 transition-all duration-300 shadow-md"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar