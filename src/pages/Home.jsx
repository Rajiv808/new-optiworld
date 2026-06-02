import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import WhyChooseUs from "../components/WhyChooseUs"
import Categories from "../components/Categories"
import FeaturedProducts from "../components/FeaturedProducts"
import EyeTesting from "../components/EyeTesting"
import Testimonials from "../components/Testimonials"
import ContactSection from "../components/ContactSection"
import Stats from "../components/Stats"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <WhyChooseUs />

      <Categories />

      {/* Auto Moving Featured Products Slider */}
      <FeaturedProducts />

      {/* Eye Test Booking CTA */}
      <EyeTesting />

      <Testimonials />

      <Stats />

      <ContactSection />

      <Footer />
    </>
  )
}

export default Home