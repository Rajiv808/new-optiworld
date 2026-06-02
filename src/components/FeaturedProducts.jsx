import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

const FeaturedProducts = () => {

  const [products, setProducts] =
    useState([])

  useEffect(() => {

    const fetchProducts =
      async () => {

        try {

          const querySnapshot =
            await getDocs(
              collection(
                db,
                "products"
              )
            )

          const data =
            querySnapshot.docs
              .map(doc => ({
                id: doc.id,
                ...doc.data(),
              }))
              .filter(
                product =>
                  product.featured === true
              )

          setProducts(data)

        } catch (error) {

          console.log(error)

        }

      }

    fetchProducts()

  }, [])

  const handleWhatsApp =
    (product) => {

      const message =
`Hello Optiworld,

I am interested in:

${product.name}

Price: ₹${product.price}

Please provide more details.`

      window.open(
        `https://wa.me/917003163588?text=${encodeURIComponent(message)}`,
        "_blank"
      )

    }

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          loop={true}
          speed={2500}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {products.map(
            (product) => (

              <SwiperSlide
                key={product.id}
              >

                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">

                  <div className="h-72 bg-white flex items-center justify-center p-4">

                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />

                  </div>

                  <div className="p-5">

                    <h3 className="font-bold text-lg text-gray-800">
                      {product.name}
                    </h3>

                    <p className="text-orange-700 font-bold text-2xl mt-2">
                      ₹{product.price}
                    </p>

                    <div className="flex gap-3 mt-5">

                      <button
                        onClick={() =>
                          window.location.href =
                            `/product/${product.id}`
                        }
                        className="flex-1 bg-orange-700 text-white py-3 rounded-xl hover:bg-orange-800 transition"
                      >
                        View
                      </button>

                      <button
                        onClick={() =>
                          handleWhatsApp(
                            product
                          )
                        }
                        className="flex-1 bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition"
                      >
                        Enquire
                      </button>

                    </div>

                  </div>

                </div>

              </SwiperSlide>

            )
          )}

        </Swiper>

      </div>

    </section>

  )

}

export default FeaturedProducts