import { motion } from "framer-motion"
import {
  Glasses,
  ShieldCheck,
  Eye,
 Award,
} from "lucide-react"

const features = [
  {
    icon: <Glasses size={45} />,
    title: "Premium Frames",
    description:
      "Explore a curated collection of stylish spectacles and sunglasses from trusted brands."
  },
  {
    icon: <Eye size={45} />,
    title: "Advanced Eye Testing",
    description:
      "Accurate computerized eye examinations with professional consultation."
  },
  {
    icon: <ShieldCheck size={45} />,
    title: "Trusted Service",
    description:
      "Quality products, expert guidance and customer-first service."
  },
  {
    icon: <Award size={45} />,
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
      className="relative py-32 bg-gradient-to-b from-white to-[#FAF7F2] overflow-hidden"
    >

      {/* Background Blur Effects */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-orange-600 font-semibold tracking-widest uppercase">
            Why Choose Optiworld
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Complete Vision Care
          </h2>

          <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Experience premium eyewear, advanced eye testing,
            expert consultation and exceptional customer service
            all under one roof.
          </p>

        </motion.div>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 text-center shadow-lg"
            >

              <h3 className="text-4xl font-bold text-orange-700">
                {item.number}
              </h3>

              <p className="text-gray-500 mt-3">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="w-20 h-20 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-700">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mt-8">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
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
          className="mt-24 bg-orange-700 rounded-[40px] p-12 text-center text-white"
        >

          <h3 className="text-4xl font-bold">
            Your Vision Deserves The Best Care
          </h3>

          <p className="mt-4 text-orange-100 max-w-2xl mx-auto">
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