import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import {
  ShieldCheck,
  Glasses,
  Eye,
  Sun
} from "lucide-react"

const Hero = () => {

  const navigate = useNavigate()

  return (

    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF7ED] via-white to-[#FFF7ED]">

      {/* Background Glow */}

      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="
              inline-block
              bg-orange-100
              text-[#C2410C]
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            ">
              KOLKATA'S TRUSTED EYEWEAR STORE
            </span>

            <h1 className="
              mt-6
              text-4xl
              sm:text-5xl
              lg:text-7xl
              font-black
              text-gray-900
              leading-tight
            ">

              Premium Eyewear

              <br />

              <span className="text-[#C2410C]">

                For Every Vision

              </span>

            </h1>

            <p className="
              mt-8
              text-gray-600
              text-base
              md:text-lg
              leading-8
              max-w-xl
            ">

              Discover stylish spectacles,
              luxury sunglasses and professional
              eye testing services designed to
              enhance your vision and confidence.

            </p>

            {/* Buttons */}

            <div className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-10
            ">

              <button
                onClick={() =>
                  navigate("/shop")
                }
                className="
                  bg-[#C2410C]
                  hover:bg-[#9A3412]
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  shadow-xl
                  transition-all
                  duration-300
                "
              >
                Explore Collection
              </button>

              <button
                onClick={() =>
                  navigate("/eye-test")
                }
                className="
                  border-2
                  border-[#C2410C]
                  text-[#C2410C]
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:bg-orange-50
                  transition-all
                  duration-300
                "
              >
                Book Eye Test
              </button>

            </div>

            {/* Trust Points */}

            <div className="
              grid
              grid-cols-2
              gap-4
              mt-10
              text-sm
              text-gray-700
            ">

              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={18}
                  className="text-[#C2410C]"
                />
                Premium Quality
              </div>

              <div className="flex items-center gap-2">
                <Eye
                  size={18}
                  className="text-[#C2410C]"
                />
                Eye Testing
              </div>

              <div className="flex items-center gap-2">
                <Glasses
                  size={18}
                  className="text-[#C2410C]"
                />
                Stylish Frames
              </div>

              <div className="flex items-center gap-2">
                <Sun
                  size={18}
                  className="text-[#C2410C]"
                />
                Sunglasses
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 1
            }}
            className="
              relative
              flex
              items-center
              justify-center
            "
          >

            {/* Top Card */}

            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 3
              }}
              className="
                absolute
                top-0
                left-0
                bg-white
                rounded-3xl
                p-6
                shadow-2xl
                z-10
              "
            >

              <h3 className="
                text-3xl
                font-bold
                text-[#C2410C]
              ">
                5000+
              </h3>

              <p className="text-gray-500">
                Happy Customers
              </p>

            </motion.div>

            {/* Main Premium Card */}

            <div className="
              w-full
              max-w-md
              bg-white/80
              backdrop-blur-xl
              rounded-[40px]
              shadow-2xl
              border
              border-orange-100
              p-10
            ">

              <div className="
                flex
                justify-center
                mb-8
              ">

                <div className="
                  w-32
                  h-32
                  rounded-full
                  bg-orange-100
                  flex
                  items-center
                  justify-center
                ">

                  <Glasses
                    size={70}
                    className="
                      text-[#C2410C]
                    "
                  />

                </div>

              </div>

              <h3 className="
                text-3xl
                font-bold
                text-center
                text-gray-900
              ">
                ⁿᵉʷ Optiworld
              </h3>

              <p className="
                text-center
                text-gray-500
                mt-3
              ">
                Premium Spectacles,
                Sunglasses & Eye Care
              </p>

            </div>

            {/* Bottom Card */}

            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 3
              }}
              className="
                absolute
                bottom-0
                right-0
                bg-white
                rounded-3xl
                p-6
                shadow-2xl
              "
            >

              <h3 className="
                text-3xl
                font-bold
                text-[#C2410C]
              ">
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