const Footer = () => {
  return (

    <footer className="bg-[#111827] text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col items-center">

          {/* Brand */}

          <h2 className="text-3xl font-black tracking-wide text-white">

            <span className="text-[#C2410C]">ⁿᵉʷ</span> Optiworld

          </h2>

          <p className="mt-3 text-gray-400 text-center max-w-lg">

            Premium Spectacles • Sunglasses • Eye Testing

          </p>

          {/* Navigation */}

          <div className="flex flex-wrap justify-center gap-8 mt-8">

            <a
              href="/"
              className="text-gray-300 hover:text-[#C2410C] transition"
            >
              Home
            </a>

            <a
              href="/shop"
              className="text-gray-300 hover:text-[#C2410C] transition"
            >
              Shop
            </a>

            <a
              href="/eye-test"
              className="text-gray-300 hover:text-[#C2410C] transition"
            >
              Eye Test
            </a>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-gray-800 mt-10 pt-6">

          <p className="text-center text-gray-500 text-sm">

            © 2026 ⁿᵉʷ Optiworld. All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>

  )
}

export default Footer