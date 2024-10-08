import { Route, Routes } from "react-router-dom";
import Root from "./Components/Layout/Root";
import useScrollToTop from "./hooks/useScrollToTop";
import { lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./Components/ErrorBoundary.jsx";
import ModalProvider from "./providers/ModalProvider.jsx";
import FallbackProvider from "./providers/FallbackProvider.jsx";
import "nprogress/nprogress.css";

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
      <ModalProvider>
        <FallbackProvider>
          <Routes>
            <Route element={<Root />}>
              <Route
                index
                element={
                  <ErrorBoundary>
                    <Home />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/about"
                element={
                  <ErrorBoundary>
                    <About />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/contact"
                element={
                  <ErrorBoundary>
                    <Contact />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/services"
                element={
                  <ErrorBoundary>
                    <Services />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/blog"
                element={
                  <ErrorBoundary>
                    <Blog />
                  </ErrorBoundary>
                }
              />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </FallbackProvider>
      </ModalProvider>
    </HelmetProvider>
  );
}
