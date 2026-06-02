import { useEffect, useState } from "react"
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore"

import { Link } from "react-router-dom"
import { db } from "../firebase/firebase"

const ProductList = () => {

  const [products, setProducts] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    fetchProducts()

  }, [])

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

  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this product?"
        )

      if (!confirmDelete)
        return

      try {

        await deleteDoc(
          doc(
            db,
            "products",
            id
          )
        )

        setProducts(
          products.filter(
            (product) =>
              product.id !== id
          )
        )

        alert(
          "Product Deleted Successfully"
        )

      } catch (error) {

        console.log(error)

        alert(
          "Delete Failed"
        )

      }

    }

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

    <section className="min-h-screen bg-[#FAF7F2] p-10">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-5xl font-bold">
            Manage Products
          </h1>

          <Link
            to="/add-product"
            className="bg-orange-700 text-white px-6 py-3 rounded-xl"
          >
            Add Product
          </Link>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map(
            (product) => (

              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >

                <div className="h-72 bg-white flex items-center justify-center p-4">

                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />

                </div>

                <div className="p-6">

                  <h2 className="text-xl font-bold">
                    {product.name}
                  </h2>

                  <div className="mt-3 flex items-center gap-3">

                    <span className="line-through text-gray-400">
                      ₹{product.originalPrice}
                    </span>

                    <span className="text-orange-700 font-bold text-2xl">
                      ₹{product.price}
                    </span>

                  </div>

                  <div className="mt-4 flex items-center gap-3">

                    <p className="text-gray-500">
                      {product.type}
                    </p>

                    {product.featured ? (

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>

                    ) : (

                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        Normal
                      </span>

                    )}

                  </div>

                  <div className="flex gap-3 mt-6">

                    <Link
                      to={`/edit-product/${product.id}`}
                      className="flex-1"
                    >

                      <button
                        className="w-full bg-blue-500 text-white py-3 rounded-xl"
                      >
                        Edit
                      </button>

                    </Link>

                    <button
                      onClick={() =>
                        handleDelete(
                          product.id
                        )
                      }
                      className="flex-1 bg-red-500 text-white py-3 rounded-xl"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>

  )

}

export default ProductList