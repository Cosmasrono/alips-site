import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Stats        from "./components/Stats";
import Products     from "./components/Products";
import About        from "./components/About";
import Gallery      from "./components/Gallery";
import Services     from "./components/Services";
import Testimonials from "./components/Testimonials";
import CTABanner    from "./components/CTABanner";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <About />
      <Gallery />
      <Services />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
