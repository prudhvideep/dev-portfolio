import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Blogs from "../pages/Blogs";
import LearnDistSys from "../pages/posts/LearnDistSys";

const BlogRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.1 }}
            >
              <Blogs />
            </motion.div>
          }
        />
        <Route
          path="LearnDistSys"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.1 }}
            >
              <LearnDistSys />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default BlogRoutes;
