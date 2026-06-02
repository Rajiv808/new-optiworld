import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { uploadImage } from "../services/UploadService"

const AddProduct = () => {
  const [loading, setLoading] = useState(false)

  const [imageFile, setImageFile] = useState(null)

  const [formData, setFormData] = useState({
    name: "",
    originalPrice: "",
    price: "",
    gender: "",
    type: "",
    description: "",
    featured: false,
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (!imageFile) {
        alert("Please select an image")
        return
      }

      setLoading(true)

      const imageUrl = await uploadImage(imageFile)

      await addDoc(collection(db, "products"), {
        ...formData,
        imageUrl,
        createdAt: new Date(),
      })

      alert("Product Added Successfully")

      setFormData({
        name: "",
        originalPrice: "",
        price: "",
        gender: "",
        type: "",
        description: "",
        featured: false,
      })

      setImageFile(null)

      setLoading(false)
    } catch (error) {
      console.error(error)

      alert(
        error.message || "Something went wrong"
      )

      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-[#FAF7F2] p-10">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow">

        <h1 className="text-4xl font-bold mb-8">
          Add Product
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
            required
          />

          <input
            type="number"
            name="originalPrice"
            placeholder="Original Price"
            value={formData.originalPrice}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Offer Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
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
            required
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
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImageFile(e.target.files[0])
            }
            className="w-full border p-4 rounded-xl"
            required
          />

          <div className="flex items-center gap-3">

            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  featured: e.target.checked,
                })
              }
              className="w-5 h-5"
            />

            <label
              htmlFor="featured"
              className="font-medium"
            >
              Show in Featured Products Section
            </label>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-700 text-white py-4 rounded-xl"
          >
            {loading
              ? "Uploading..."
              : "Save Product"}
          </button>

        </form>

      </div>

    </section>
  )
}

export default AddProduct