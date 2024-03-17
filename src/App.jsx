import "./App.css";
import MainNavbar from "./Components/Navbar/MainNavbar";
import Hero from "./Components/HeroSection/Hero";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Properties from "./Pages/Properties";
import PropertyDetails from "./Pages/PropertyDetails";
import ContactUs from "./Pages/ContactUs";
import FeaturedSection from "./Components/FeaturedSection/FeaturedSection";

function App() {
  return (
    <>
      <MainNavbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/PropertyDetails" element={<PropertyDetails />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <FeaturedSection />
    </>
  );
}

export default App;
