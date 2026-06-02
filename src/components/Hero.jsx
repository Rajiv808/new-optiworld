import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import shopImage from "../assets/shop.jpeg"

const Hero = () => {

  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen bg-[#FAF7F2] overflow-hidden">

      {/* Background Blur */}

      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-orange-600 font-semibold tracking-wider">
              WELCOME TO
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mt-4 leading-tight">

              <span className="text-orange-700">
                ⁿᵉʷ
              </span>{" "}

              Optiworld

            </h1>

            <p className="text-gray-600 text-lg mt-8 leading-8 max-w-xl">
              Premium spectacles, stylish sunglasses,
              professional eye testing and expert vision care
              under one roof.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <button
                onClick={() => navigate("/shop")}
                className="bg-orange-700 text-white px-8 py-4 rounded-2xl hover:bg-orange-800 transition"
              >
                Explore Collection
              </button>

              <button
                onClick={() => navigate("/eye-test")}
                className="border-2 border-orange-700 text-orange-700 px-8 py-4 rounded-2xl hover:bg-orange-50 transition"
              >
                Book Eye Test
              </button>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            {/* Top Floating Card */}

            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 3
              }}
              className="absolute -top-6 -left-6 bg-white shadow-xl rounded-2xl px-6 py-4 z-10"
            >

              <h3 className="text-2xl font-bold text-orange-700">
                5000+
              </h3>

              <p className="text-gray-500">
                Happy Customers
              </p>

            </motion.div>

            {/* Shop Image */}

            <img
              src={shopImage}
              alt="Optiworld Shop"
              className="
                w-full
                h-[500px]
                object-cover
                rounded-[30px]
                shadow-2xl
              "
            />

            {/* Bottom Floating Card */}

            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 3
              }}
              className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl px-6 py-4"
            >

              <h3 className="text-2xl font-bold text-orange-700">
                20+
              </h3>

              <p className="text-gray-500">
                Years Experience
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Hero