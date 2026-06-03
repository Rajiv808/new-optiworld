import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    review:
      "Excellent service and premium quality frames. Highly recommended.",
  },
  {
    id: 2,
    name: "Priya Das",
    review:
      "Professional eye testing and friendly staff. Amazing experience.",
  },
  {
    id: 3,
    name: "Amit Roy",
    review:
      "Huge collection of spectacles and sunglasses at reasonable prices.",
  },
]

const Testimonials = () => {

  return (

    <section className="py-16 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-[#C2410C] font-semibold tracking-[3px] uppercase text-sm">

            Customer Reviews

          </p>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4">

            What Our Customers Say

          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">

            Trusted by thousands of customers for premium eyewear,
            professional eye testing and exceptional service.

          </p>

        </div>

        {/* Review Cards */}

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">

          {reviews.map((review) => (

            <motion.div
              key={review.id}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5
              }}
              viewport={{
                once: true
              }}
              whileHover={{
                y: -8
              }}
              className="
                bg-white
                border
                border-orange-100
                rounded-[30px]
                p-6 md:p-8
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                relative
              "
            >

              {/* Quote Icon */}

              <div
                className="
                  absolute
                  top-6
                  right-6
                  bg-orange-100
                  p-2
                  rounded-xl
                "
              >

                <Quote
                  size={20}
                  className="text-[#C2410C]"
                />

              </div>

              {/* Stars */}

              <div className="flex gap-1 text-[#C2410C]">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    fill="currentColor"
                    size={18}
                  />

                ))}

              </div>

              {/* Review */}

              <p
                className="
                  mt-6
                  text-gray-600
                  leading-8
                  italic
                "
              >
                "{review.review}"
              </p>

              {/* Customer */}

              <div className="mt-6 flex items-center gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-gradient-to-br
                    from-orange-100
                    to-orange-200
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-[#C2410C]
                  "
                >

                  {review.name.charAt(0)}

                </div>

                <div>

                  <h3 className="font-bold text-gray-900">
                    {review.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Verified Customer
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Trust Banner */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}
          viewport={{
            once: true
          }}
          className="
            mt-14
            md:mt-20
            bg-gradient-to-r
            from-[#C2410C]
            to-[#9A3412]
            rounded-[35px]
            p-8
            md:p-12
            text-center
            text-white
            shadow-2xl
          "
        >

          <h3 className="text-2xl md:text-4xl font-black">

            Trusted By Thousands

          </h3>

          <p className="mt-4 text-orange-100 max-w-2xl mx-auto">

            Premium eyewear, professional eye care and
            customer satisfaction remain at the heart of everything we do.

          </p>

        </motion.div>

      </div>

    </section>

  )

}

export default Testimonials