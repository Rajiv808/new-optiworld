import { FaWhatsapp } from "react-icons/fa"

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/919477110367"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
    >
      <FaWhatsapp size={32} />
    </a>
  )
}

export default WhatsappButton