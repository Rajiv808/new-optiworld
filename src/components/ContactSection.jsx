import {
  Phone,
  Mail,
  Clock,
  MapPin
} from "lucide-react"

import { motion } from "framer-motion"

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-gradient-to-b from-[#FFF7ED] to-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <div className="text-center">
          <p className="text-[#C2410C] font-semibold tracking-[3px] uppercase text-sm">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-5xl font-black mt-4 text-gray-900">
            Visit Opticals Today
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-base md:text-lg">
            Experience premium eyewear, advanced eye testing
            and expert vision care under one roof.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 mt-14 md:mt-16 items-start">

          {/* Left Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}
            viewport={{
              once: true
            }}
            className="
              bg-white
              rounded-[35px]
              p-6 md:p-8
              shadow-2xl
              border
              border-orange-100
            "
          >
            <h3 className="text-2xl md:text-3xl font-black mb-8 text-gray-900">
              Contact Information
            </h3>

            <div className="space-y-8">

              {/* Phone */}
              <div className="flex gap-4">
                <div className="
                  bg-gradient-to-br
                  from-orange-100
                  to-orange-200
                  p-4
                  rounded-2xl
                ">
                  <Phone className="text-[#C2410C]" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Phone Number
                  </h4>

                  <p className="text-gray-600">
                    +91 9477110367
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="
                  bg-gradient-to-br
                  from-orange-100
                  to-orange-200
                  p-4
                  rounded-2xl
                ">
                  <Mail className="text-[#C2410C]" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Email Address
                  </h4>

                  <p className="text-gray-600">
                    info@rbdev.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="
                  bg-gradient-to-br
                  from-orange-100
                  to-orange-200
                  p-4
                  rounded-2xl
                ">
                  <Clock className="text-[#C2410C]" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
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

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <a
                href="tel:+919477110367"
                className="
                  flex-1
                  text-center
                  bg-[#C2410C]
                  hover:bg-[#9A3412]
                  text-white
                  px-6
                  py-4
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919477110367"
                target="_blank"
                rel="noreferrer"
                className="
                  flex-1
                  text-center
                  bg-green-500
                  hover:bg-green-600
                  text-white
                  px-6
                  py-4
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                WhatsApp
              </a>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}
            viewport={{
              once: true
            }}
          >

            {/* Google Map */}
            <div className="
              bg-white
              rounded-[35px]
              shadow-2xl
              border
              border-orange-100
              overflow-hidden
            ">

              <div className="h-[350px] md:h-[450px]">
                <iframe
                  src="https://www.google.com/maps?q=Kolkata,West+Bengal,India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Kolkata"
                ></iframe>
              </div>

              {/* Address */}
              <div className="p-6 md:p-7">

                <div className="flex gap-4">

                  <div className="
                    bg-gradient-to-br
                    from-orange-100
                    to-orange-200
                    p-4
                    rounded-2xl
                    h-fit
                  ">
                    <MapPin className="text-[#C2410C]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Store Address
                    </h4>

                    <p className="text-gray-600 leading-7">
                      Kolkata
                      <br />
                      West Bengal, India
                    </p>
                  </div>

                </div>

                {/* Directions Button */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kolkata,West+Bengal,India"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    mt-5
                    bg-[#C2410C]
                    hover:bg-[#9A3412]
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    transition-all
                    duration-300
                  "
                >
                  Get Directions
                </a>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection
