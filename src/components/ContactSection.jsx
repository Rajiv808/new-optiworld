import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-[#FAF7F2] to-white overflow-hidden"
    >

      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center">

          <p className="text-orange-600 font-semibold tracking-widest uppercase">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Visit Optiworld Today
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Premium eyewear, professional eye testing and expert vision care services.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16 items-start">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-[35px] p-8 shadow-xl"
          >

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-4">

                <div className="bg-orange-100 p-4 rounded-2xl">
                  <Phone className="text-orange-700" />
                </div>

                <div>
                  <h4 className="font-bold">
                    Phone Number
                  </h4>

                  <p className="text-gray-600">
                    +91 9477110367
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="bg-orange-100 p-4 rounded-2xl">
                  <Mail className="text-orange-700" />
                </div>

                <div>
                  <h4 className="font-bold">
                    Email Address
                  </h4>

                  <p className="text-gray-600">
                    info@optiworld.com
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="bg-orange-100 p-4 rounded-2xl">
                  <Clock className="text-orange-700" />
                </div>

                <div>
                  <h4 className="font-bold">
                    Opening Hours
                  </h4>

                  <p className="text-gray-600">
                    Monday - Saturday
                  </p>

                  <p className="text-gray-600">
                    10:00 AM - 9:00 PM
                  </p>
                </div>

              </div>

            </div>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="tel:+919477110367"
                className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-xl transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919477110367"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition"
              >
                WhatsApp
              </a>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Map */}

            <div className="bg-white rounded-[35px] shadow-xl overflow-hidden h-[350px]">

              <iframe
                title="Optiworld Location"
                src="https://www.google.com/maps?q=84/A,Santoshpur,Avenue,Aurobindo,Block,Santoshpur,Kolkata,West+Bengal+700075&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>

            </div>

            {/* Address Below Map */}

            <div className="bg-white rounded-[35px] shadow-xl p-6 mt-6">

              <div className="flex items-start gap-4">

                <div className="bg-orange-100 p-4 rounded-2xl">

                  <MapPin className="text-orange-700" />

                </div>

                <div>

                  <h4 className="text-xl font-bold mb-2">
                    Store Address
                  </h4>

                  <p className="text-gray-600 leading-7">

                    84/A, Santoshpur Avenue,
                    <br />
                    Aurobindo Block,
                    <br />
                    Santoshpur,
                    <br />
                    Kolkata,
                    <br />
                    West Bengal - 700075

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default ContactSection