import { motion } from "framer-motion"
import {
  Eye,
  Stethoscope,
  ClipboardCheck,
  Calendar
} from "lucide-react"

import { Link } from "react-router-dom"

const EyeTesting = () => {

  const services = [
    "Eye Examination",
    "Contact Lens",
    "Prescription Check",
    "Vision Consultation"
  ]

  return (

    <section className="py-16 md:py-24 bg-[#FFF7ED]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-[#C2410C] font-semibold tracking-[3px] uppercase text-sm">

              Professional Eye Care

            </p>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">

              Advanced Eye Testing

              <br />

              With Experienced Doctors

            </h2>

            <p className="text-gray-600 mt-6 text-base md:text-lg leading-8">

              Get accurate eye examinations,
              professional consultation and
              expert vision care services using
              modern testing methods and
              personalized recommendations.

            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">

                <div className="bg-orange-100 p-3 rounded-xl">
                  <Eye
                    size={20}
                    className="text-[#C2410C]"
                  />
                </div>

                <span className="font-medium">
                  Computerized Eye Testing
                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="bg-orange-100 p-3 rounded-xl">
                  <Stethoscope
                    size={20}
                    className="text-[#C2410C]"
                  />
                </div>

                <span className="font-medium">
                  Experienced Eye Specialists
                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="bg-orange-100 p-3 rounded-xl">
                  <ClipboardCheck
                    size={20}
                    className="text-[#C2410C]"
                  />
                </div>

                <span className="font-medium">
                  Prescription Verification
                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="bg-orange-100 p-3 rounded-xl">
                  <Calendar
                    size={20}
                    className="text-[#C2410C]"
                  />
                </div>

                <span className="font-medium">
                  Easy Appointment Booking
                </span>

              </div>

            </div>

            <Link to="/eye-test">

              <button
                className="
                  mt-10
                  bg-[#C2410C]
                  hover:bg-[#9A3412]
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  shadow-lg
                  transition-all
                  duration-300
                "
              >
                Book Eye Test
              </button>

            </Link>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div
              className="
                bg-white
                rounded-[35px]
                shadow-2xl
                border
                border-orange-100
                p-6 md:p-8
              "
            >

              <div className="text-center mb-8">

                <h3 className="text-2xl md:text-3xl font-black text-gray-900">

                  Our Services

                </h3>

                <p className="text-gray-500 mt-2">

                  Professional vision care solutions

                </p>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {services.map((service, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5
                    }}
                    className="
                      bg-gradient-to-br
                      from-orange-50
                      to-orange-100
                      rounded-3xl
                      p-6
                      border
                      border-orange-200
                      transition-all
                      duration-300
                    "
                  >

                    <h3 className="font-bold text-gray-900 text-lg">

                      {service}

                    </h3>

                  </motion.div>

                ))}

              </div>

              <div
                className="
                  mt-6
                  bg-gradient-to-r
                  from-[#C2410C]
                  to-[#9A3412]
                  rounded-3xl
                  p-6
                  text-center
                  text-white
                "
              >

                <h4 className="text-2xl font-black">

                  Trusted Eye Care

                </h4>

                <p className="mt-2 text-orange-100">

                  Accurate Testing • Expert Advice • Premium Care

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  )

}

export default EyeTesting