import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Menu, X, Eye } from "lucide-react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLink =
    "text-white/95 hover:text-orange-100 transition-all duration-300 font-medium whitespace-nowrap"

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-screen max-w-full z-50 bg-[#C2410C]/95 backdrop-blur-xl shadow-xl overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between gap-4">

        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 select-none group"
        >
          {/* Optical Icon */}
          <div
            className="
              relative w-11 h-11
              rounded-2xl
              bg-white/10
              border border-white/25
              backdrop-blur-md
              flex items-center justify-center
              shadow-lg
              group-hover:bg-white/20
              group-hover:scale-105
              transition-all duration-300
            "
          >
            <Eye
              size={23}
              strokeWidth={1.8}
              className="text-orange-100 group-hover:scale-110 transition-transform duration-300"
            />

            {/* Small lens glow */}
            <span className="absolute w-1.5 h-1.5 rounded-full bg-orange-200 top-2 right-2 shadow-[0_0_8px_rgba(254,215,170,0.9)]" />
          </div>

          {/* Brand Name */}
          <div className="flex flex-col leading-none">
            <span
              className="
                text-xl sm:text-2xl
                font-black
                tracking-[0.08em]
                text-white
                drop-shadow-sm
                group-hover:text-orange-100
                transition-colors duration-300
              "
            >
              OPTICALS
            </span>

            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-orange-100/80 mt-1">
              See the Difference
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8 shrink-0">

          <Link to="/" className={navLink}>
            Home
          </Link>

          <Link to="/shop" className={navLink}>
            Shop
          </Link>

          <Link to="/eye-test" className={navLink}>
            Eye Test
          </Link>

          <a href="#about" className={navLink}>
            About
          </a>

          <a href="#contact" className={navLink}>
            Contact
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919477110367"
            target="_blank"
            rel="noreferrer"
            className="
              bg-white
              text-[#C2410C]
              px-6 py-3
              rounded-xl
              font-semibold
              hover:bg-orange-100
              hover:-translate-y-0.5
              transition-all duration-300
              shadow-lg
            "
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            block
            text-white
            p-2.5
            hover:bg-white/10
            rounded-xl
            transition-all
            focus:outline-none
            shrink-0
          "
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="
            md:hidden
            bg-[#C2410C]
            border-t border-orange-300/20
            shadow-xl
            max-h-[calc(100vh-5rem)]
            overflow-y-auto
          "
        >
          <div className="flex flex-col p-6 gap-5">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={navLink}
            >
              Home
            </Link>

            <Link
              to="/shop"
              onClick={() => setMenuOpen(false)}
              className={navLink}
            >
              Shop
            </Link>

            <Link
              to="/eye-test"
              onClick={() => setMenuOpen(false)}
              className={navLink}
            >
              Eye Test
            </Link>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className={navLink}
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={navLink}
            >
              Contact
            </a>

            <a
              href="https://wa.me/919477110367"
              target="_blank"
              rel="noreferrer"
              className="
                bg-white
                text-[#C2410C]
                text-center
                py-3
                rounded-xl
                font-semibold
                hover:bg-orange-100
                transition-all duration-300
                shadow-md
              "
            >
              WhatsApp
            </a>

          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar