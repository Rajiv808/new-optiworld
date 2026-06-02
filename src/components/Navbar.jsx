import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {

  const [menuOpen, setMenuOpen] =
    useState(false)

  const navLink =
    "text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium"

  return (

    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
    >

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl md:text-3xl font-black text-orange-700"
        >
          ⁿᵉʷ Optiworld
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className={navLink}
          >
            Home
          </Link>

          <Link
            to="/shop"
            className={navLink}
          >
            Shop
          </Link>

          <Link
            to="/eye-test"
            className={navLink}
          >
            Eye Test
          </Link>

          <a
            href="#about"
            className={navLink}
          >
            About
          </a>

          <a
            href="#contact"
            className={navLink}
          >
            Contact
          </a>

          <a
            href="https://wa.me/919477110367"
            target="_blank"
            rel="noreferrer"
            className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-xl transition duration-300 font-semibold"
          >
            WhatsApp
          </a>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="md:hidden"
        >

          {
            menuOpen
              ? <X size={30} />
              : <Menu size={30} />
          }

        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-white border-t shadow-lg">

          <div className="flex flex-col p-6 gap-5">

            <Link
              to="/"
              onClick={() =>
                setMenuOpen(false)
              }
              className={navLink}
            >
              Home
            </Link>

            <Link
              to="/shop"
              onClick={() =>
                setMenuOpen(false)
              }
              className={navLink}
            >
              Shop
            </Link>

            <Link
              to="/eye-test"
              onClick={() =>
                setMenuOpen(false)
              }
              className={navLink}
            >
              Eye Test
            </Link>

            <a
              href="#about"
              onClick={() =>
                setMenuOpen(false)
              }
              className={navLink}
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() =>
                setMenuOpen(false)
              }
              className={navLink}
            >
              Contact
            </a>

            <a
              href="https://wa.me/919477110367"
              target="_blank"
              rel="noreferrer"
              className="bg-orange-700 hover:bg-orange-800 text-white text-center py-3 rounded-xl transition duration-300"
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