import { Route, Routes } from "react-router-dom";
import Root from "./Components/Layout/Root";
import useScrollToTop from "./hooks/useScrollToTop";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./Components/ErrorBoundary.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const Error404 = lazy(() => import("./pages/Error404.jsx"));

export default function App() {
  useScrollToTop();
  return (
    <HelmetProvider>
      <Routes>
        <Route
          element={
            <Suspense fallback={null}>
              <Root />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}
