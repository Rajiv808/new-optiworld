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
    // CHANGED: Replaced fragment (<>) with a protective div wrapper to clamp the slider 
    <div className="w-full max-w-full overflow-x-hidden min-h-screen flex flex-col relative">
      
      <Navbar />

      {/* Main content sections wrapper */}
      <main className="w-full max-w-full overflow-x-hidden flex-grow">
        <Hero />

        <WhyChooseUs />

        <Categories />

        {/* CRITICAL FIX: Slipping a strict overflow-hidden container around the product slider.
          This ensures that even if the internal slide track is 3000px wide, 
          the phone browser chops it off visually at the edge of the screen!
        */}
        <div className="w-full max-w-full overflow-x-hidden">
          <FeaturedProducts />
        </div>

        <EyeTesting />

        <Testimonials />

        <Stats />

        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default Home