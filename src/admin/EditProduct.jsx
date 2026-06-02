import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"

const EditProduct = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const [loading, setLoading] =
    useState(true)

  const [formData, setFormData] =
    useState({
      name: "",
      originalPrice: "",
      price: "",
      gender: "",
      type: "",
      description: "",
      imageUrl: "",
    })

  useEffect(() => {

    const fetchProduct =
      async () => {

        try {

          const productRef =
            doc(
              db,
              "products",
              id
            )

          const productSnap =
            await getDoc(
              productRef
            )

          if (
            productSnap.exists()
          ) {

            setFormData(
              productSnap.data()
            )

          }

        } catch (error) {

          console.log(error)

        } finally {

          setLoading(false)

        }

      }

    fetchProduct()

  }, [id])

  const handleChange =
    (e) => {

      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      })

    }

  const handleSubmit =
    async (e) => {

      e.preventDefault()

      try {

        await updateDoc(
          doc(
            db,
            "products",
            id
          ),
          formData
        )

        alert(
          "Product Updated Successfully"
        )

        navigate(
          "/products"
        )

      } catch (error) {

        console.log(error)

        alert(
          "Failed To Update Product"
        )

      }

    }

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-3xl font-bold">
          Loading...
        </h1>

      </div>

    )

  }

  return (

    <section className="min-h-screen bg-[#FAF7F2] p-10">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow">

        <h1 className="text-4xl font-bold mb-8">
          Edit Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="number"
            name="originalPrice"
            placeholder="Original Price"
            value={formData.originalPrice}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="number"
            name="price"
            placeholder="Offer Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          >
            <option value="">
              Select Gender
            </option>

            <option value="Men">
              Men
            </option>

            <option value="Women">
              Women
            </option>

            <option value="Unisex">
              Unisex
            </option>
          </select>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          >
            <option value="">
              Select Category
            </option>

            <option value="Spectacles">
              Spectacles
            </option>

            <option value="Sunglasses">
              Sunglasses
            </option>
          </select>

          <textarea
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-orange-700 text-white py-4 rounded-xl"
          >
            Update Product
          </button>

        </form>

      </div>

    </section>

  )

}

export default EditProduct