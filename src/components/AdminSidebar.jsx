import { Link, useNavigate } from "react-router-dom"

const AdminSidebar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem("user")

    navigate("/admin")

  }

  return (

    <div className="w-72 bg-gray-900 text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-10">
        opticals
      </h1>

      <div className="flex flex-col gap-4">

        <Link
          to="/dashboard"
          className="bg-gray-800 p-4 rounded-xl"
        >
          Dashboard
        </Link>

        <Link
          to="/add-product"
          className="bg-gray-800 p-4 rounded-xl"
        >
          Add Product
        </Link>

        <Link
          to="/products"
          className="bg-gray-800 p-4 rounded-xl"
        >
          Manage Products
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 p-4 rounded-xl mt-5"
        >
          Logout
        </button>

      </div>

    </div>

  )

}

export default AdminSidebar