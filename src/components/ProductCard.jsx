import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {

  const discount = Math.round(
    (
      (product.originalPrice -
        product.price) /
      product.originalPrice
    ) * 100
  )

  const handleWhatsApp = () => {

    const message =
`Hello Optiworld,

I am interested in:

${product.name}

Original Price: ₹${product.originalPrice}

Offer Price: ₹${product.price}

Please provide more details.`

    window.open(
      `https://wa.me/919477110367?text=${encodeURIComponent(message)}`
    )
  }

  return (

    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

      <div className="relative">

        <div className="bg-white p-4 flex items-center justify-center min-h-[280px]">

          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-w-full max-h-[260px] object-contain"
          />

        </div>

        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">

          {discount}% OFF

        </div>

      </div>

      <div className="p-5">

        <h3 className="text-lg font-bold text-gray-800">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center gap-3">

          <span className="line-through text-gray-400">
            ₹{product.originalPrice}
          </span>

          <span className="text-orange-700 text-xl font-bold">
            ₹{product.price}
          </span>

        </div>

        <div className="flex gap-2 mt-3">

          <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
            {product.gender}
          </span>

          <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
            {product.type}
          </span>

        </div>

        <div className="flex gap-3 mt-5">

          <Link
            to={`/product/${product.id}`}
            className="flex-1"
          >
            <button className="w-full bg-orange-700 text-white py-3 rounded-xl hover:bg-orange-800">
              View Details
            </button>
          </Link>

          <button
            onClick={handleWhatsApp}
            className="flex-1 bg-green-500 text-white py-3 rounded-xl hover:bg-green-600"
          >
            Enquire
          </button>

        </div>

      </div>

    </div>

  )
}

export default ProductCard