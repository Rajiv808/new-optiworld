import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

import {
  User,
  UserRound,
  Users,
  Glasses,
  Sun,
  Eye
} from "lucide-react"

const Categories = () => {

  const navigate = useNavigate()

  const categories = [
    {
      title: "Men",
      route: "/shop?gender=Men",
      icon: <User size={24} />
    },
    {
      title: "Women",
      route: "/shop?gender=Women",
      icon: <UserRound size={24} />
    },
    {
      title: "Unisex",
      route: "/shop?gender=Unisex",
      icon: <Users size={24} />
    },
    {
      title: "Spectacles",
      route: "/shop?type=Spectacles",
      icon: <Glasses size={24} />
    },
    {
      title: "Sunglasses",
      route: "/shop?type=Sunglasses",
      icon: <Sun size={24} />
    },
    
  ]

  return (
    <section className="py-16 bg-[#FAF7F2]">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <p className="text-orange-600 font-semibold tracking-wider">
            CATEGORIES
          </p>

          <h2 className="text-3xl font-bold mt-3">
            Shop By Category
          </h2>

          <p className="text-gray-500 mt-3">
            Explore our premium collections
          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12">

          {categories.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -5,
                scale: 1.03
              }}
              onClick={() =>
                navigate(item.route)
              }
              className="
                bg-white
                px-6
                py-4
                rounded-2xl
                shadow-sm
                hover:shadow-lg
                cursor-pointer
                flex
                items-center
                gap-3
                transition
              "
            >

              <div className="text-orange-700">
                {item.icon}
              </div>

              <span className="font-semibold">
                {item.title}
              </span>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Categories