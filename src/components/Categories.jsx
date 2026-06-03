import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

import {
  User,
  UserRound,
  Users,
  Glasses,
  Sun,
} from "lucide-react"

const Categories = () => {

  const navigate = useNavigate()

  const categories = [
    {
      title: "Men",
      route: "/shop?gender=Men",
      icon: <User size={28} />
    },
    {
      title: "Women",
      route: "/shop?gender=Women",
      icon: <UserRound size={28} />
    },
    {
      title: "Unisex",
      route: "/shop?gender=Unisex",
      icon: <Users size={28} />
    },
    {
      title: "Spectacles",
      route: "/shop?type=Spectacles",
      icon: <Glasses size={28} />
    },
    {
      title: "Sunglasses",
      route: "/shop?type=Sunglasses",
      icon: <Sun size={28} />
    },
  ]

  return (

    <section className="pt-6 pb-14 md:pb-20 bg-[#FFF7ED]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-[#C2410C] font-semibold tracking-[3px] uppercase text-sm">

            Categories

          </p>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-3">

            Shop By Category

          </h2>

          <p className="text-gray-600 mt-3 text-base md:text-lg">

            Explore our premium eyewear collections

          </p>

        </div>

        {/* Categories Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-8">

          {categories.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: index * 0.08
              }}
              viewport={{
                once: true
              }}
              whileHover={{
                y: -6,
                scale: 1.03
              }}
              whileTap={{
                scale: 0.98
              }}
              onClick={() =>
                navigate(item.route)
              }
              className="
                bg-white
                rounded-3xl
                p-5
                cursor-pointer
                border
                border-orange-100
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                text-center
              "
            >

              <div
                className="
                  w-14
                  h-14
                  mx-auto
                  rounded-2xl
                  bg-gradient-to-br
                  from-orange-100
                  to-orange-200
                  flex
                  items-center
                  justify-center
                  text-[#C2410C]
                "
              >

                {item.icon}

              </div>

              <h3
                className="
                  mt-4
                  text-sm
                  md:text-base
                  font-bold
                  text-gray-900
                "
              >

                {item.title}

              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}

export default Categories