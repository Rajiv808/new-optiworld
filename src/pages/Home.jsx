import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import FeaturedProducts from "../components/FeaturedProducts"
import Categories from "../components/Categories"
import EyeTesting from "../components/EyeTesting"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

const Home = () => {

  return (

    <>

      <Navbar />

      <Hero />

      {/* Featured Products Immediately After Hero */}

      <FeaturedProducts />

      <Categories />

      <EyeTesting />

      <WhyChooseUs />

      <Testimonials />

      <ContactSection />

      <Footer />

    </>

  )

}

export default Home