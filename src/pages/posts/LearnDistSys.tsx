import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LearnDistSys = () => {
  const navigate = useNavigate();

  return (
    <div
      className="mt-10 ml-auto mr-auto w-9/10 md:w-9/10 max-w-3xl"
      style={{ opacity: 1, transform: "none" }}
    >
      <div>
        <div>
          <div className="flex flex-col gap-3 w-full">
            <div className="mb-4 group">
              <motion.a
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/Blog")}
                className="text-xs flex items-center hover:cursor-pointer"
              >
                <FaChevronLeft />
                BACK
              </motion.a>
            </div>
            <h1 className="title font-medium text-2xl md:text-4xl tracking-tighter font-heading">
              My approach to re-learning distributed systems.
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Oct 10, 2024
            </p>
            <p className="mt-2 font-sans">
              My approach to learning things in computer science involves
              building short feedback loops. For example, my process for
              learning File IO in Go would include coming up with a use case
              that requires the use of file operations, such as finding the word
              count of a file. Then, I would review the documentation and write
              code to realize this use case. The purpose would drive my
              learning, and the feedback from executing the code would reinforce
              my understanding. Say I mastered file operations. Is this the end?
              No. Next, I would widen the problem scope to encompass more
              concepts and keep the feedback loop going.
            </p>
            <p className="mt-2 font-sans">
              This process is not different from how we learn a new piece of
              information: forming analogies to link the latest information to
              an existing familiar one. The only novelty it induces in the
              general learning framework is a short result-driven feedback loop
              to keep the learning focused. This approach works well with
              centralized systems, where we often try to solve similar problems
              in different contexts. However, I’m unsuccessful in developing a
              generic thinking model that can help me understand distributed
              systems using the above approach. Instead of trying to relate
              distributed constructs to centralized constructs, I firmly believe
              I should start treating distributed systems as a{" "}
              <span>
                <a
                  href="https://www.cs.utexas.edu/~EWD/transcriptions/EWD10xx/EWD1036.html"
                  target="_blank"
                  className="underline hover:text-gray-800 hover:cursor-pointer"
                >
                  radical novelty.
                </a>
              </span>
            </p>
            <p className="mt-2 font-sans italic">
              Coping with radical novelty requires an orthogonal method. One
              must consider one's own past, the experiences collected, and the
              habits formed in it as an unfortunate accident of history, and one
              has to approach the radical novelty with a blank mind, consciously
              refusing to try to link it with what is already familiar, because
              the familiar is hopelessly inadequate. On the cruelty of really
              teaching computing science
            </p>
            <p className="italic">
              {" "}
              - On the cruelty of really teaching computing science
            </p>

            <p className="mt-2 font-sans">
              Here is a principled way in which i’m planning to re-learn
              distributed systems.
            </p>

            <div className="mt-8">
              <h2 className="text-gray-800 text-xl font-medium">
                Predicate logic, reasoning about safety and progress
              </h2>
              <p className="mt-2">
                <span>
                  <span className="text-gray-600">Resource : </span>{" "}
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    className="underline"
                    href="https://cse.buffalo.edu/~demirbas/CSE586/book.pdf"
                  >
                    Introduction to Distributed Systems
                  </motion.a>
                </span>
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-gray-800 text-xl font-medium">TLA+</h2>
              <p className="mt-2">
                <span>
                  TLA+ is a “formal specification language”, a means of
                  designing systems that lets you directly test those designs.
                  <br />
                  <br />
                  <span className="text-gray-600">Resource : </span>{" "}
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    className="underline"
                    href="https://learntla.com/"
                  >
                    Learn TLA
                  </motion.a>
                </span>
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-gray-800 text-xl font-medium">
                Impossibility results
              </h2>
              <br />
              <span className="text-gray-600">Resource : </span>
              <ol className="list-decimal">
                <li>
                  <a
                    href="http://muratbuffalo.blogspot.com"
                    className="underline"
                    target="_blank"
                  >
                    http://muratbuffalo.blogspot.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.the-paper-trail.org/post/2014-08-09-distributed-systems-theory-for-the-distributed-systems-engineer/"
                    className="underline"
                    target="_blank"
                  >
                    Paper trail
                  </a>
                </li>
                <li>
                  <a
                    href="https://hackingdistributed.com/tag/nosql/"
                    className="underline"
                    target="_blank"
                  >
                    Hacking Distributed #NoSQL tag
                  </a>
                </li>
                <li>
                  <a
                    href="https://decentralizedthoughts.github.io/videos/"
                    className="underline"
                    target="_blank"
                  >
                    Consensus and Byzantine faults
                  </a>
                </li>
                <li>
                  <a
                    href="https://brooker.co.za/blog/"
                    className="underline"
                    target="_blank"
                  >
                    Marc Brooker's blog{" "}
                  </a>
                </li>
              </ol>
            </div>
            <div className="mt-8">
              <h2 className="text-gray-800 text-xl font-medium">
                Consensus and fault-tolerance
              </h2>
              <br />
            </div>
            <div className="mt-8">
              <h2 className="text-gray-800 text-xl font-medium">
                Managing time and state in distributed systems
              </h2>
              <p className="mt-2">
                <span>
                  <span className="text-gray-600">Resource : </span>{" "}
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    className="underline"
                    href="https://cse.buffalo.edu/~demirbas/CSE586/book.pdf"
                  >
                    Introduction to Distributed Systems
                  </motion.a>
                </span>
              </p>
            </div>

            <p className="mt-2 font-sans">
              I’ll keep updating this post with more resources and interesting
              surmises as i delve deeper into these topics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnDistSys;
