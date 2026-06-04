import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

import {
  User,
  UserRound,
  Users,
  Glasses,
  Sun,
  ArrowUpRight,
} from "lucide-react"

// 1. IMPORT YOUR LOCAL ASSETS HERE (Optional alternate method if direct strings don't resolve in your bundler)
// import model1 from "../assets/model-1.jpg"
// import model2 from "../assets/model-2.jpg"

const Categories = () => {
  const navigate = useNavigate()

  const categories = [
    {
      title: "Men",
      route: "/shop?gender=Men",
      icon: <User size={28} />
    },
    {
      title: "Women",
      route: "/shop?gender=Women",
      icon: <UserRound size={28} />
    },
    {
      title: "Unisex",
      route: "/shop?gender=Unisex",
      icon: <Users size={28} />
    },
    {
      title: "Spectacles",
      route: "/shop?type=Spectacles",
      icon: <Glasses size={28} />
    },
    {
      title: "Sunglasses",
      route: "/shop?type=Sunglasses",
      icon: <Sun size={28} />
    },
  ]

  // 2. CONFIGURING YOUR LOCAL ASSETS
  // Replace the filenames below with your exact image filenames inside your assets folder
  const lookbookImages = [
    {
      src: new URL("../assets/6.jpeg", import.meta.url).href, // Safe resolution for Vite / modern bundlers
      alt: "Classic Luxury Sunglasses Style",
      tag: "Summer Lookbook",
      size: "col-span-2 md:col-span-3 h-[300px] md:h-[450px]"
    },
    {
      src: new URL("../assets/2.jpeg", import.meta.url).href,
      alt: "Premium Optical Frames Style",
      tag: "Urban Editorial",
      size: "col-span-2 md:col-span-2 h-[300px] md:h-[450px]"
    },
    {
      src: new URL("../assets/4.jpeg", import.meta.url).href,
      alt: "Retro Eyewear Look",
      tag: "Vintage Trend",
      size: "col-span-2 md:col-span-2 h-[350px] md:h-[500px]"
    },
    {
      src: new URL("../assets/5.jpeg", import.meta.url).href,
      alt: "Minimalist Modern Spectacles Style",
      tag: "Signature Frames",
      size: "col-span-2 md:col-span-3 h-[350px] md:h-[500px]"
    }
  ]

  return (
    <section className="pt-6 pb-20 md:pb-28 bg-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-[#C2410C] font-semibold tracking-[3px] uppercase text-sm">
            Categories
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-3">
            Shop By Category
          </h2>
          <p className="text-gray-600 mt-3 text-base md:text-lg">
            Explore our premium eyewear collections
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-8">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(item.route)}
              className="bg-white rounded-3xl p-5 cursor-pointer border border-orange-100 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-[#C2410C]">
                {item.icon}
              </div>

              <h3 className="mt-4 text-sm md:text-base font-bold text-gray-900">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* --- FASHION MODEL SHOWCASE GALLERY --- */}
        <div className="mt-24">
          
          {/* Section Divider Subheader */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-[#C2410C] font-semibold tracking-[3px] uppercase text-sm">
                The Lookbook
              </p>
              <h3 className="text-2xl md:text-4xl font-black text-gray-900 mt-2">
                Style In Focus
              </h3>
            </div>
            <button 
              onClick={() => navigate('/shop')} 
              className="group flex items-center gap-2 text-[#C2410C] font-bold text-sm tracking-wide uppercase hover:text-[#9A3412] transition-colors self-start md:self-end"
            >
              View Full Collection 
              <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Asymmetric Editorial Lookbook Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {lookbookImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${img.size} relative rounded-[32px] overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500`}
                onClick={() => navigate('/shop')}
              >
                
                {/* Visual Overlays & Images */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Content Overlay details */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 z-20 flex flex-col items-start transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-white/90 backdrop-blur-xs text-gray-900 text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-3 shadow-xs">
                    {img.tag}
                  </span>
                  <h4 className="text-white font-bold text-lg md:text-xl leading-snug drop-shadow-md">
                    {img.alt}
                  </h4>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Categories