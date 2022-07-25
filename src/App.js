import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Event } from "./components/pages/event/Event";
import { Footer } from "./components/pages/Footer";
import { Header } from "./components/pages/Header";
import { Home } from "./components/pages/home/Home";
import { Product } from "./components/pages/product/Product";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
