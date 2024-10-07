import { Route, Routes } from "react-router-dom";
import Root from "./Components/Layout/Root";
import useScrollToTop from "./hooks/useScrollToTop";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));

export default function App() {
  useScrollToTop();
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={null}>
            <Root />
          </Suspense>
        }
      >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}
