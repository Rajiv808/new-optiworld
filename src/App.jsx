import { BrowserRouter, Routes, Route } from "react-router-dom"

// Core Layout & UI Components
import Navbar from "./components/Navbar"
import Whatsapp from "./components/whatsapp" // Note: React components must start with a Capital letter

// Public Page Imports
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import EyeTest from "./pages/EyeTest"

// Admin & Route Management Imports
import AdminLogin from "./pages/AdminLogin"
import Dashboard from "./pages/Dashboard"
import AddProduct from "./admin/AddProduct"
import ProductList from "./admin/ProductList"
import EditProduct from "./admin/EditProduct"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>
      {/* GLOBAL LAYOUT WRAPPER:
        w-full max-w-full overflow-x-hidden locks the viewport boundary.
        This completely guarantees that wide sliders or content layouts cannot push your 
        mobile navbar button off-screen.
      */}
      <div className="w-full max-w-full overflow-x-hidden min-h-screen flex flex-col relative bg-white">
        
        {/* Rendered once globally so it stays locked uniform across every page view */}
        <Navbar />

        {/* MAIN CONTENT CONTAINER:
          pt-20 provides a safe buffer zone so the fixed floating navbar 
          doesn't physically overlap your headline text content.
        */}
        <main className="w-full max-w-full overflow-x-hidden flex-grow pt-20">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/eye-test" element={<EyeTest />} />

            {/* Admin Portal Routes */}
            <Route path="/admin" element={<AdminLogin />} />
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
        </main>

        {/* Global Floating Utilities */}
        <Whatsapp />
      </div>
    </BrowserRouter>
  )
}

export default App