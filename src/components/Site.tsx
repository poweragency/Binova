import Navbar from "./Navbar";
import Hero from "./sections/Hero";
import Collections from "./sections/Collections";
import Heritage from "./sections/Heritage";
import Showroom from "./sections/Showroom";
import Footer from "./Footer";

export default function Site() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collections />
      <Heritage />
      <Showroom />
      <Footer />
    </>
  );
}
