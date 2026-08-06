import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase"

import { Swiper, SwiperSlide } from "swiper/react"
// 1. Added Navigation to the modules import
import { Autoplay, Navigation } from "swiper/modules"

import "swiper/css"
// 2. Imported the required styles for the arrows
import "swiper/css/navigation"

const FeaturedProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"))
        const data = querySnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter(product => product.featured === true)

        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
  }, [])

  const handleWhatsApp = (product) => {
    const message = `Hello opticals,

I am interested in:

${product.name}

Price: ₹${product.price}

Please provide more details.`

    window.open(
      `https://wa.me/917003163588?text=${encodeURIComponent(message)}`,
      `_blank`
    )
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      {/* Increased side padding here so arrows have breathing room on smaller screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#C2410C] font-semibold tracking-[3px] uppercase text-sm">
            Featured Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-3">
            Best Selling Eyewear
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our handpicked premium spectacles and sunglasses.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]} // 3. Registered the Navigation module
          navigation={true}                // 4. Enabled standard arrows
          loop={true}
          speed={2500}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-[28px] overflow-hidden border border-orange-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                
                {/* Image */}
                <div className="h-72 bg-gradient-to-b from-[#FFF7ED] to-white flex items-center justify-center p-6">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-[#C2410C] font-black text-2xl mt-3">
                    ₹{product.price}
                  </p>

                  <div className="flex gap-2 mt-3 flex-wrap">
                    {product.gender && (
                      <span className="bg-orange-100 text-[#C2410C] px-3 py-1 rounded-full text-xs font-medium">
                        {product.gender}
                      </span>
                    )}

                    {product.type && (
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {product.type}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => window.location.href = `/product/${product.id}`}
                      className="flex-1 bg-[#C2410C] hover:bg-[#9A3412] text-white py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      View
                    </button>

                    <button
                      onClick={() => handleWhatsApp(product)}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      Enquire
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default FeaturedProducts