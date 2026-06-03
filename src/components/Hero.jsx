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

              {/* Massive "New Optiworld" text with Come-and-Go + Pulse Glow Motion */}
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
                <span className="text-[#C2410C]">New</span> Optiworld
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

          {/* Right Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center min-h-[450px]"
          >
            {/* Top Floating Badge Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -top-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-orange-50 z-10"
            >
              <h3 className="text-2xl sm:text-3xl font-black text-[#C2410C]">5000+</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-0.5">
                Happy Customers
              </p>
            </motion.div>

            {/* Main Premium Card Component */}
            <div className="w-full max-w-md bg-white/70 backdrop-blur-2xl rounded-[40px] shadow-[0_32px_64px_-16px_rgba(194,65,12,0.12)] border border-white/60 p-10 flex flex-col items-center justify-center relative group overflow-hidden">
              
              {/* Subtle Radial Gradient behind central glass piece */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-100/50 rounded-full blur-xl -z-10 pointer-events-none" />

              {/* Central Iconic Frame */}
              <div className="mb-8">
                <div className="w-28 h-28 rounded-3xl bg-[#C2410C] flex items-center justify-center shadow-lg shadow-orange-700/30 transform group-hover:rotate-3 transition-transform duration-500">
                  <Glasses size={56} className="text-white" />
                </div>
              </div>

              {/* Matching Brand Logo Layout: Glass Lens + Left Suffix Design */}
              <div className="flex items-center gap-3 select-none mt-2">
                {/* Micro Glass Lens Loop Graphic */}
                <div className="w-9 h-9 rounded-xl bg-[#C2410C]/10 border border-[#C2410C]/20 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full border-2 border-[#C2410C] relative">
                    <span className="absolute inset-0 rounded-full bg-[#C2410C]/30 animate-ping" />
                  </div>
                </div>

                {/* Left Badge Alignment */}
                <div className="flex items-baseline gap-2">
                  <span className="text-[10px] font-black text-white bg-[#C2410C] px-1.5 py-0.5 rounded-md tracking-wider uppercase shadow-sm shrink-0 self-center">
                    New
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                    Optiworld
                  </span>
                </div>
              </div>

              <p className="text-center font-medium text-gray-500 mt-4 max-w-xs text-sm leading-relaxed">
                Premium Spectacles, Luxury Sunglasses & Advanced Clinic Care
              </p>
            </div>

            {/* Bottom Floating Badge Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-orange-50"
            >
              <h3 className="text-2xl sm:text-3xl font-black text-[#C2410C]">20+</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-0.5">
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