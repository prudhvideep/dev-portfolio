import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import About from "./pages/About";
import Header from "./components/Header";
import ToolBar from "./components/ToolBar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import BlogRoutes from "./routes/BlogRoutes";
import Experience from "./pages/Experience";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.1 }}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/Projects"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.1 }}
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/Contact"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.1 }}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/Experience"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.1 }}
            >
              <Experience />
            </motion.div>
          }
        />
         <Route
          path="/Blog/*"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.1 }}
            >
              <BlogRoutes />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <ToolBar/>
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
