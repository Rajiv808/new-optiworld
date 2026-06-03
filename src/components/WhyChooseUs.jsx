import { motion } from "framer-motion"
import {
  Glasses,
  ShieldCheck,
  Eye,
  Award,
} from "lucide-react"

const features = [
  {
    icon: <Glasses size={35} />,
    title: "Premium Frames",
    description:
      "Explore a curated collection of stylish spectacles and sunglasses from trusted brands."
  },
  {
    icon: <Eye size={35} />,
    title: "Advanced Eye Testing",
    description:
      "Accurate computerized eye examinations with professional consultation."
  },
  {
    icon: <ShieldCheck size={35} />,
    title: "Trusted Service",
    description:
      "Quality products, expert guidance and customer-first service."
  },
  {
    icon: <Award size={35} />,
    title: "Premium Experience",
    description:
      "Modern eyewear solutions with personalized recommendations."
  }
]

const stats = [
  {
    number: "5000+",
    title: "Happy Customers",
  },
  {
    number: "10+",
    title: "Years Experience",
  },
  {
    number: "1000+",
    title: "Premium Frames",
  },
  {
    number: "100%",
    title: "Customer Satisfaction",
  },
]

const WhyChooseUs = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-gradient-to-b from-white to-[#FFF7ED] overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-[#C2410C] font-semibold tracking-[3px] uppercase text-sm">
            Why Customers Trust Us
          </p>

          <h2 className="text-3xl md:text-5xl font-black mt-4 text-gray-900">
            Premium Eyewear & Eye Care
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-base md:text-lg leading-8">
            Experience premium eyewear, advanced eye testing,
            expert consultation and exceptional customer service
            all under one roof.
          </p>

        </motion.div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-14">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6
              }}
              className="
                bg-white/90
                backdrop-blur-xl
                rounded-3xl
                p-5 md:p-7
                text-center
                shadow-xl
                border
                border-orange-100
                transition-all
                duration-300
              "
            >

              <h3 className="text-2xl md:text-4xl font-black text-[#C2410C]">
                {item.number}
              </h3>

              <p className="text-gray-500 mt-2 text-sm md:text-base">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Features */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 mt-16">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                bg-white
                rounded-3xl
                p-6 md:p-8
                border
                border-orange-100
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >

              <div className="
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-br
                from-orange-100
                to-orange-200
                flex
                items-center
                justify-center
                text-[#C2410C]
              ">

                {item.icon}

              </div>

              <h3 className="text-xl md:text-2xl font-bold mt-6 text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7 text-sm md:text-base">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-16 md:mt-24
            bg-gradient-to-r
            from-[#C2410C]
            to-[#9A3412]
            rounded-[35px]
            p-8 md:p-12
            text-center
            text-white
            shadow-2xl
          "
        >

          <h3 className="text-2xl md:text-5xl font-black">
            Your Vision Deserves The Best Care
          </h3>

          <p className="mt-4 text-orange-100 max-w-2xl mx-auto text-sm md:text-lg leading-7">
            Discover premium eyewear collections and
            professional eye care services designed to
            improve your vision and style.
          </p>

        </motion.div>

      </div>

    </section>
  )
}

export default WhyChooseUs