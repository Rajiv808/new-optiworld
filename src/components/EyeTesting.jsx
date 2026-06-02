import { motion } from "framer-motion"
import {
  Eye,
  Stethoscope,
  ClipboardCheck,
  Calendar
} from "lucide-react"

import { Link } from "react-router-dom"

const EyeTesting = () => {
  return (
    <section className="py-32 bg-[#FAF7F2]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-orange-600 font-semibold">
              PROFESSIONAL EYE CARE
            </p>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              Advanced Eye Testing
              <br />
              With Experienced Doctors
            </h2>

            <p className="text-gray-600 mt-6 text-lg">
              Get accurate eye examinations,
              professional consultation and
              expert vision care services.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">
                <Eye className="text-orange-600" />
                <span>Computerized Eye Testing</span>
              </div>

              <div className="flex items-center gap-4">
                <Stethoscope className="text-orange-600" />
                <span>Experienced Eye Specialists</span>
              </div>

              <div className="flex items-center gap-4">
                <ClipboardCheck className="text-orange-600" />
                <span>Prescription Verification</span>
              </div>

              <div className="flex items-center gap-4">
                <Calendar className="text-orange-600" />
                <span>Easy Appointment Booking</span>
              </div>

            </div>

            <Link to="/eye-test">

              <button className="mt-10 bg-orange-700 text-white px-8 py-4 rounded-2xl hover:bg-orange-800 transition">
                Book Eye Test
              </button>

            </Link>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="bg-white rounded-[40px] shadow-xl p-10">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-orange-50 rounded-3xl p-8">
                  <h3 className="font-bold text-xl">
                    Eye Examination
                  </h3>
                </div>

                <div className="bg-orange-50 rounded-3xl p-8">
                  <h3 className="font-bold text-xl">
                    Contact Lens
                  </h3>
                </div>

                <div className="bg-orange-50 rounded-3xl p-8">
                  <h3 className="font-bold text-xl">
                    Prescription Check
                  </h3>
                </div>

                <div className="bg-orange-50 rounded-3xl p-8">
                  <h3 className="font-bold text-xl">
                    Vision Consultation
                  </h3>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default EyeTesting