import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ToolBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedStatus, setSelectedStatus] = useState("");
  const [displayToolbar, setDisplayToolbar] = useState<boolean>(true);

  useEffect(() => {
    const pathname = location.pathname.split("/")[1] || "About";
    setSelectedStatus(pathname);

    const pathArr = location.pathname.split("/");
    
    if(pathArr[1] === "Blog" && pathArr.length > 2){
      setDisplayToolbar(false)
    }else{
      setDisplayToolbar(true)
    }
  }, [location]);

  const handleClick = (status : string) => {
    setSelectedStatus(status);
    if (status === "About") {
      navigate("/");
    } else {
      navigate(`/${status}`);
    }
  };

  return (
    <div className={`${displayToolbar ? "block" : "hidden"} mt-8 ml-auto mr-auto w-9/10 md:w-9/10 max-w-3xl transition-all ease-in-out duration-200 overflow-x-auto`}>
      <div className="flex  gap-4 justify-start font-sans text-sm text-slate-500">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          dragElastic
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
            selectedStatus === "Projects"
              ? "bg-black text-white"
              : "hover:bg-gray-200 hover:text-slate-600"
          }`}
          onClick={() => handleClick("Projects")}
        >
          Projects
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 0.95 }}
          className={`p-1 px-2 rounded-md ${
            selectedStatus === "Blog"
              ? "bg-black text-white"
              : "hover:bg-gray-200 hover:text-slate-600"
          }`}
          onClick={() => handleClick("Blog")}
        >
          Blog
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 0.95 }}
          className={`p-1 px-2 rounded-md ${
            selectedStatus === "Resume"
              ? "bg-black text-white"
              : "hover:bg-gray-200 hover:text-slate-600"
          }`}
          onClick={() => handleClick("Resume")}
        >
          Resume
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
