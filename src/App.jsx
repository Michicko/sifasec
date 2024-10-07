import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./Components/Layout/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import useScrollToTop from "./hooks/useScrollToTop";

export default function App() {
  useScrollToTop()
  return (
    <Routes>
    <Route element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
    </Route>
  </Routes>
  );
}
