import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"

const ProductDetails = () => {

  const { id } = useParams()

  const [product, setProduct] =
    useState(null)

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    const fetchProduct =
      async () => {

        try {

          const docRef =
            doc(
              db,
              "products",
              id
            )

          const docSnap =
            await getDoc(
              docRef
            )

          if (
            docSnap.exists()
          ) {

            setProduct({
              id: docSnap.id,
              ...docSnap.data(),
            })

          }

        } catch (error) {

          console.log(error)

        } finally {

          setLoading(false)

        }

      }

    fetchProduct()

  }, [id])

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-[#FFF7ED]">

        <h1 className="text-3xl font-bold text-[#C2410C]">
          Loading...
        </h1>

      </div>

    )

  }

  if (!product) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>

      </div>

    )

  }

  const discount =
    product.originalPrice
      ? Math.round(
          (
            (product.originalPrice -
              product.price) /
            product.originalPrice
          ) * 100
        )
      : 0

  return (

    <section className="min-h-screen bg-gradient-to-b from-[#FFF7ED] to-white pt-28 pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Product Image */}

          <div
            className="
            bg-white
            rounded-[35px]
            p-6 md:p-10
            shadow-2xl
            border
            border-orange-100
            relative
            "
          >

            {discount > 0 && (

              <div
                className="
                absolute
                top-6
                right-6
                bg-red-500
                text-white
                px-4
                py-2
                rounded-full
                text-sm
                font-bold
                "
              >

                {discount}% OFF

              </div>

            )}

            <img
              src={product.imageUrl}
              alt={product.name}
              className="
              w-full
              h-[320px]
              md:h-[550px]
              object-contain
              hover:scale-105
              transition-all
              duration-500
              "
            />

          </div>

          {/* Product Details */}

          <div>

            <p className="text-[#C2410C] font-semibold tracking-wider uppercase">

              Premium Collection

            </p>

            <h1
              className="
              text-3xl
              md:text-5xl
              font-black
              text-gray-900
              mt-3
              "
            >

              {product.name}

            </h1>

            {/* Price */}

            <div className="mt-6 flex items-center gap-4 flex-wrap">

              {product.originalPrice && (

                <span
                  className="
                  line-through
                  text-gray-400
                  text-lg
                  md:text-2xl
                  "
                >

                  ₹{product.originalPrice}

                </span>

              )}

              <span
                className="
                text-[#C2410C]
                text-4xl
                md:text-5xl
                font-black
                "
              >

                ₹{product.price}

              </span>

            </div>

            {/* Tags */}

            <div className="flex flex-wrap gap-3 mt-6">

              <span
                className="
                bg-orange-100
                text-[#C2410C]
                px-4
                py-2
                rounded-full
                font-medium
                "
              >

                {product.gender}

              </span>

              <span
                className="
                bg-gray-100
                text-gray-700
                px-4
                py-2
                rounded-full
                font-medium
                "
              >

                {product.type}

              </span>

            </div>

            {/* Description */}

            <p
              className="
              mt-8
              text-gray-600
              leading-8
              text-lg
              "
            >

              {product.description ||
                "Premium eyewear designed for comfort, style and superior vision. Perfect for daily use with a modern and elegant look."}

            </p>

            {/* Features */}

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3">
                ✅ Premium Quality Frame
              </div>

              <div className="flex items-center gap-3">
                ✅ Stylish Modern Design
              </div>

              <div className="flex items-center gap-3">
                ✅ Comfortable Daily Wear
              </div>

              <div className="flex items-center gap-3">
                ✅ Professional Eye Care Support
              </div>

            </div>

            {/* WhatsApp Button */}

            <button
              onClick={() =>
                window.open(
                  `https://wa.me/919477110367?text=${encodeURIComponent(
`Hello NEW Optiworld,

I am interested in:

${product.name}

Price: ₹${product.price}

Please provide more details.`
                  )}`,
                  "_blank"
                )
              }
              className="
              mt-10
              w-full
              md:w-auto
              bg-green-500
              hover:bg-green-600
              text-white
              px-10
              py-4
              rounded-2xl
              font-semibold
              shadow-lg
              transition-all
              duration-300
              "
            >

              Enquire on WhatsApp

            </button>

          </div>

        </div>

      </div>

    </section>

  )

}

export default ProductDetails