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

      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-3xl font-bold">
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

  return (

    <section className="min-h-screen bg-[#FAF7F2] pt-32 pb-20">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-white rounded-3xl p-8 shadow">

            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-[500px] object-contain"
            />

          </div>

          <div>

            <h1 className="text-5xl font-bold">
              {product.name}
            </h1>

            <div className="mt-5 flex gap-4 items-center">

              <span className="line-through text-gray-400 text-xl">
                ₹{product.originalPrice}
              </span>

              <span className="text-orange-700 text-4xl font-bold">
                ₹{product.price}
              </span>

            </div>

            <div className="flex gap-3 mt-5">

              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
                {product.gender}
              </span>

              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                {product.type}
              </span>

            </div>

            <p className="mt-8 text-gray-600 leading-8">
              {product.description}
            </p>

            <button
              onClick={() =>
                window.open(
                  `https://wa.me/919477110367?text=${encodeURIComponent(
                    `Hello Optiworld, I am interested in ${product.name}`
                  )}`
                )
              }
              className="mt-8 bg-green-500 text-white px-8 py-4 rounded-xl"
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