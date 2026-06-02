import { motion } from "framer-motion"
import { Star } from "lucide-react"

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
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-orange-600 font-semibold">
            CUSTOMER REVIEWS
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#FAF7F2] rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex gap-1 text-orange-500">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>

              <p className="mt-6 text-gray-600 leading-7">
                "{review.review}"
              </p>

              <h3 className="font-bold text-xl mt-6">
                {review.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials