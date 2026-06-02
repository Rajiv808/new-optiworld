import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import {
  collection,
  getDocs,
} from "firebase/firestore"

import { db } from "../firebase/firebase"
import ProductCard from "../components/ProductCard"

const Shop = () => {

  const [searchParams] =
    useSearchParams()

  const [products, setProducts] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [gender, setGender] =
    useState(
      searchParams.get("gender") ||
      "All"
    )

  const [type, setType] =
    useState(
      searchParams.get("type") ||
      "All"
    )

  useEffect(() => {

    const genderParam =
      searchParams.get("gender")

    const typeParam =
      searchParams.get("type")

    setGender(
      genderParam || "All"
    )

    setType(
      typeParam || "All"
    )

  }, [searchParams])

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

          const productList =
            querySnapshot.docs.map(
              (doc) => ({
                id: doc.id,
                ...doc.data(),
              })
            )

          setProducts(
            productList
          )

        } catch (error) {

          console.log(error)

        } finally {

          setLoading(false)

        }

      }

    fetchProducts()

  }, [])

  const filteredProducts =
    products.filter(
      (product) => {

        const genderMatch =
          gender === "All" ||
          product.gender ===
            gender

        const typeMatch =
          type === "All" ||
          product.type ===
            type

        return (
          genderMatch &&
          typeMatch
        )

      }
    )

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-3xl font-bold">
          Loading Products...
        </h1>

      </div>

    )

  }

  return (

    <section className="min-h-screen pt-32 pb-20 bg-[#FAF7F2]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h1 className="text-5xl font-bold">
            Our Collection
          </h1>

          <p className="text-gray-500 mt-4">
            Premium Spectacles &
            Sunglasses
          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {[
            "All",
            "Men",
            "Women",
            "Unisex",
          ].map((item) => (

            <button
              key={item}
              onClick={() =>
                setGender(item)
              }
              className={`px-6 py-3 rounded-xl transition ${
                gender === item
                  ? "bg-orange-700 text-white"
                  : "bg-white"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-5">

          {[
            "All",
            "Spectacles",
            "Sunglasses",
          ].map((item) => (

            <button
              key={item}
              onClick={() =>
                setType(item)
              }
              className={`px-6 py-3 rounded-xl transition ${
                type === item
                  ? "bg-orange-700 text-white"
                  : "bg-white"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        <div className="mt-8 text-center text-gray-500">

          Showing
          {" "}
          <span className="font-bold text-orange-700">
            {filteredProducts.length}
          </span>
          {" "}
          Products

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {filteredProducts.map(
            (product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            )
          )}

        </div>

      </div>

    </section>

  )

}

export default Shop