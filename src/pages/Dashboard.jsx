import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { Link } from "react-router-dom"
import { db } from "../firebase/firebase"

const Dashboard = () => {

  const [totalProducts, setTotalProducts] =
    useState(0)

  useEffect(() => {

    const fetchData =
      async () => {

        const snapshot =
          await getDocs(
            collection(
              db,
              "products"
            )
          )

        setTotalProducts(
          snapshot.docs.length
        )

      }

    fetchData()

  }, [])

  return (

    <section className="min-h-screen bg-[#FAF7F2] p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow">

            <h2 className="text-lg text-gray-500">
              Total Products
            </h2>

            <h3 className="text-5xl font-bold mt-3">
              {totalProducts}
            </h3>

          </div>

          <Link
            to="/add-product"
            className="bg-white p-8 rounded-3xl shadow"
          >

            <h2 className="text-lg text-gray-500">
              Add Product
            </h2>

            <h3 className="text-3xl font-bold mt-3">
              +
            </h3>

          </Link>

          <Link
            to="/products"
            className="bg-white p-8 rounded-3xl shadow"
          >

            <h2 className="text-lg text-gray-500">
              Manage Products
            </h2>

            <h3 className="text-3xl font-bold mt-3">
              →
            </h3>

          </Link>

        </div>

      </div>

    </section>

  )

}

export default Dashboard