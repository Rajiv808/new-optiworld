import { motion } from "framer-motion"

const Stats = () => {
  return (
    <section className="py-10 bg-orange-700">

      <div className="max-w-5xl mx-auto px-6">

        <div className="grid grid-cols-3 gap-4">

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 rounded-xl p-4 text-center text-white"
          >
            <h2 className="text-2xl font-bold">
              5000+
            </h2>

            <p className="mt-1 text-sm">
              Customers
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 rounded-xl p-4 text-center text-white"
          >
            <h2 className="text-2xl font-bold">
              20+
            </h2>

            <p className="mt-1 text-sm">
              Experience
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 rounded-xl p-4 text-center text-white"
          >
            <h2 className="text-2xl font-bold">
              1000+
            </h2>

            <p className="mt-1 text-sm">
              Frames
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Stats