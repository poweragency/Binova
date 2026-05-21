import Navbar from "./Navbar";
import Hero from "./sections/Hero";
import Collections from "./sections/Collections";
import Contacts from "./sections/Contacts";
import Footer from "./Footer";

export default function Site() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collections />
      <Contacts />
      <Footer />
    </>
  );
}
