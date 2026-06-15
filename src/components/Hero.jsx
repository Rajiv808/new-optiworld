import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import {
  ShieldCheck,
  Glasses,
  Eye,
  Sun
} from "lucide-react"

// Import your landscape image from the src/assets directory
import heroImage from "../assets/2.jpeg"

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF7ED] via-white to-[#FFF7ED]">
      
      {/* Background Glow Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline */}
            <span className="inline-block bg-orange-100 text-[#C2410C] px-4 py-2 rounded-full text-sm font-black tracking-wider uppercase shadow-sm">
              Kolkata's Trusted Eyewear Store
            </span>

            {/* High-Fashion Animated Header Container */}
            <div className="mt-6 flex flex-col gap-1">
              
              {/* "Welcome To" Sub-phrase */}
              <span className="text-sm sm:text-base font-black uppercase tracking-[0.3em] text-gray-400 block">
                Welcome To
              </span>

              
              <motion.h1
                initial={{ opacity: 0.3, scale: 0.98 }}
                animate={{ 
                  opacity: [0.4, 1, 0.4], 
                  scale: [0.99, 1.01, 0.99],
                  textShadow: [
                    "0 0 0px rgba(194,65,12,0)",
                    "0 0 20px rgba(194,65,12,0.25)",
                    "0 0 0px rgba(194,65,12,0)"
                  ]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4, 
                  ease: "easeInOut" 
                }}
                className="text-5xl sm:text-6xl md:text-7xl xl:text-6xl font-black tracking-tighter text-gray-900 leading-none select-none"
              >
                <span className="text-[#C2410C]">New</span> RBDEV_RAJIV
              </motion.h1>

              {/* Core Subtitle */}
              <h2 className="text-3xl sm:text-3xl lg:text-3xl font-black text-gray-800 tracking-tight mt-4 leading-tight">
                Premium Eyewear For{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-x-0 bottom-1.5 h-3 bg-orange-100 -z-10 transform scale-x-105" />
                  <span className="text-[#C2410C]">Every Vision</span>
                </span>
              </h2>
            </div>

            <p className="mt-8 text-gray-600 text-base md:text-lg leading-8 max-w-xl font-medium">
              Discover stylish spectacles, luxury sunglasses, and professional
              eye testing services designed to enhance your vision and confidence.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={() => navigate("/shop")}
                className="bg-[#C2410C] hover:bg-[#9A3412] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-orange-700/20 hover:shadow-orange-700/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Collection
              </button>

              <button
                onClick={() => navigate("/eye-test")}
                className="border-2 border-[#C2410C] text-[#C2410C] px-8 py-4 rounded-2xl font-bold hover:bg-orange-50/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Eye Test
              </button>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-4 mt-12 text-sm text-gray-700 font-semibold border-t border-gray-100 pt-8">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={20} className="text-[#C2410C]" />
                Premium Quality
              </div>
              <div className="flex items-center gap-2.5">
                <Eye size={20} className="text-[#C2410C]" />
                Eye Testing
              </div>
              <div className="flex items-center gap-2.5">
                <Glasses size={20} className="text-[#C2410C]" />
                Stylish Frames
              </div>
              <div className="flex items-center gap-2.5">
                <Sun size={20} className="text-[#C2410C]" />
                Sunglasses
              </div>
            </div>
          </motion.div>

          {/* Right Visual Side (Widescreen No-Crop Edition) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center mt-10 lg:mt-0 w-full"
          >
            {/* Orange Glow behind the image frame */}
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-orange-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

            {/* Main Image Container adjusted for Landscape */}
            <div className="relative z-10 group w-full max-w-xl">
              <div
                className="
                  w-full
                  aspect-[16/9]
                  rounded-[24px] sm:rounded-[32px] md:rounded-[40px]
                  overflow-hidden
                  border-[4px] md:border-[8px]
                  border-white
                  shadow-[0_25px_80px_rgba(0,0,0,0.15)]
                  bg-white/50
                "
              >
                <img
                  src={heroImage}
                  alt="Premium Eyewear Banner"
                  className="w-full h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Customers Floating Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
                className="
                  absolute
                  -top-6
                  -left-4
                  md:-left-8
                  bg-white/95
                  backdrop-blur-sm
                  px-4 md:px-5
                  py-2.5 md:py-4
                  rounded-2xl
                  shadow-xl
                  border border-orange-50
                "
              >
                <h3 className="text-xl md:text-3xl font-black text-[#C2410C]">
                  5000+
                </h3>
                <p className="text-[10px] md:text-sm text-gray-500 font-semibold uppercase tracking-wider">
                  Happy Customers
                </p>
              </motion.div>

              {/* Experience Floating Card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
                className="
                  absolute
                  -bottom-6
                  -right-4
                  md:-right-8
                  bg-white/95
                  backdrop-blur-sm
                  px-4 md:px-5
                  py-2.5 md:py-4
                  rounded-2xl
                  shadow-xl
                  border border-orange-50
                "
              >
                <h3 className="text-xl md:text-3xl font-black text-[#C2410C]">
                  20+
                </h3>
                <p className="text-[10px] md:text-sm text-gray-500 font-semibold uppercase tracking-wider">
                  Years Experience
                </p>
              </motion.div>

              {/* Premium Badge */}
              <div
                className="
                  absolute
                  top-1/2
                  -translate-y-1/2
                  -right-2
                  md:-right-6
                  bg-[#C2410C]
                  text-white
                  px-3 md:px-5
                  py-2 md:py-3
                  rounded-xl md:rounded-2xl
                  shadow-xl
                  shadow-orange-700/30
                  font-black
                  text-[10px] md:text-xs
                  uppercase
                  tracking-wider
                  text-center
                  leading-tight
                "
              >
                Premium
                <br />
                Eyewear
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero