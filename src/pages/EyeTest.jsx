import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const EyeTest = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await addDoc(collection(db, "appointments"), {
        ...formData,
        createdAt: new Date(),
      });

      const whatsappMessage = `New Eye Test Booking\n\nName: ${formData.name}\n\nPhone: ${formData.phone}\n\nDate: ${formData.date}\n\nTime: ${formData.time}`;

      const whatsappUrl = `https://wa.me/919477110367?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      window.open(whatsappUrl, "_blank");

      alert("Appointment Booked Successfully");

      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "",
      });
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FAF7F2] p-6">
      <div className="bg-white p-10 rounded-3xl shadow w-full max-w-xl">
        <h1 className="text-4xl font-bold mb-3">Book Eye Test</h1>

        <p className="text-gray-500 mb-8">
          Schedule your professional eye examination.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          {/* Phone Number Input */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          {/* Date Input with Dynamic Placeholder Fix */}
          <input
            type={formData.date ? "date" : "text"}
            name="date"
            placeholder="Select Appointment Date"
            value={formData.date}
            onChange={handleChange}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!formData.date) {
                e.target.type = "text";
              }
            }}
            className="w-full border p-4 rounded-xl text-gray-700 placeholder-gray-400"
            required
          />

          {/* Time Slot Selector */}
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl bg-white text-gray-700"
            required
          >
            <option value="">Select Time Slot</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="12:30 PM">12:30 PM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="01:30 PM">01:30 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="02:30 PM">02:30 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="03:30 PM">03:30 PM</option>
            <option value="04:00 PM">04:00 PM</option>
            <option value="04:30 PM">04:30 PM</option>
            <option value="05:00 PM">05:00 PM</option>
            <option value="05:30 PM">05:30 PM</option>
            <option value="06:00 PM">06:00 PM</option>
            <option value="06:30 PM">06:30 PM</option>
            <option value="07:00 PM">07:00 PM</option>
            <option value="07:30 PM">07:30 PM</option>
            <option value="08:00 PM">08:00 PM</option>
            <option value="08:30 PM">08:30 PM</option>
            <option value="09:00 PM">09:00 PM</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-700 text-white py-4 rounded-xl hover:bg-orange-800 transition disabled:bg-orange-400"
          >
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EyeTest;