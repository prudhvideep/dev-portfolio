import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ToolBar = () => {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState("About");

  useEffect(() => {
    return () => {
      navigate("/");
      setSelectedStatus("About");
    };
  }, []);

  const handleClick = (status) => {
    setSelectedStatus(status);
    if (status === "About") {
      navigate("/");
    } else {
      navigate(`/${status}`);
    }
  };

  return (
    <div className="mt-8 ml-auto mr-auto w-9/10 md:w-9/10 max-w-3xl transition-all ease-in-out duration-200">
      <div className="flex flex-row space-x-6 justify-between md:justify-start font-sans text-sm text-slate-500">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 0.95 }}
          className={`p-1 px-2 rounded-md ${
            selectedStatus === "About"
              ? "bg-black text-white"
              : "hover:bg-gray-200 hover:text-slate-600"
          }`}
          onClick={() => handleClick("About")}
        >
          About
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 0.95 }}
          className={`p-1 px-2 rounded-md ${
            selectedStatus === "Blogs"
              ? "bg-black text-white"
              : "hover:bg-gray-200 hover:text-slate-600"
          }`}
          onClick={() => handleClick("Blogs")}
        >
          Blogs
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 0.95 }}
          className={`p-1 px-2 rounded-md ${
            selectedStatus === "TechStack"
              ? "bg-black text-white"
              : "hover:bg-gray-200 hover:text-slate-600"
          }`}
          onClick={() => handleClick("TechStack")}
        >
          TechStack
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 0.95 }}
          className={`p-1 px-2 rounded-md ${
            selectedStatus === "Contact"
              ? "bg-black text-white"
              : "hover:bg-gray-200 hover:text-slate-600"
          }`}
          onClick={() => handleClick("Contact")}
        >
          Contact
        </motion.button>
      </div>
    </div>
  );
};

export default ToolBar;
