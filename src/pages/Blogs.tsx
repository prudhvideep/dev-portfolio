import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div
      className="mt-10 ml-auto mr-auto w-8/10 md:w-9/10 max-w-3xl"
      style={{ opacity: 1, transform: "none" }}
    >
      <div>
        <div>
          <div className="flex flex-col gap-3 w-full">
            <motion.a
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/Blog/LearnDistSys")}
              target="_blank"
              className="hover:cursor-pointer"
            >
              <div
                className="flex flex-col space-y-1 rounded-lg bg-gray-100 hover:bg-white py-3 pl-3 border border-gray-200"
                tabIndex={0}
              >
                <div className="w-full flex flex-col">
                  <div className="flex items-center gap-2">
                    <p className="text-gray-900 text-lg font-heading tracking-tight">
                      My approach to re-learning distributed systems.
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm tracking-tight mt-1">
                    Principled way in which i’m planning to re-learn distributed
                    systems.
                  </p>
                </div>
              </div>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{ scale: 0.95 }}
              href="https://medium.com/p/e28f71a6b8ab"
              target="_blank"
            >
              <div
                className="flex flex-col space-y-1 rounded-lg bg-gray-100 hover:bg-white py-3 pl-3 border border-gray-200"
                tabIndex={0}
              >
                <div className="w-full flex flex-col">
                  <div className="flex items-center gap-2">
                    <p className="text-gray-900 text-lg font-heading tracking-tight">
                      Open Ai Api on AWS Lambda
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm tracking-tight mt-1">
                    Steps to deploy Open Ai api on lambda and format the output
                    using pydantic.
                  </p>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
