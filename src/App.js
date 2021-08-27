import Attributes from "./components/Attritubes";
import Blog from "./components/Blog";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Team from "./components/Team";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Partners />
      <Attributes />
      <Features />
      <Team />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
