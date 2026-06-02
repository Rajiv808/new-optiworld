import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import EyeTest from "./pages/EyeTest"

import AdminLogin from "./pages/AdminLogin"
import Dashboard from "./pages/Dashboard"

import AddProduct from "./admin/AddProduct"
import ProductList from "./admin/ProductList"
import EditProduct from "./admin/EditProduct"

import ProtectedRoute from "./components/ProtectedRoute"
import whatsapp from "./components/whatsapp"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Routes */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/shop"
          element={<Shop />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/eye-test"
          element={<EyeTest />}
        />

        {/* Admin Routes */}

        <Route
          path="/admin"
          element={<AdminLogin />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-product"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-product/:id"
          element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          }
        />

      </Routes>

      <whatsapp />

    </BrowserRouter>
  )
}

export default App