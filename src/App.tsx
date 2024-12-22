import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavbarNext";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Book from "./pages/Book";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-repair" element={<Book />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
