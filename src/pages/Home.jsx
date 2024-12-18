import laptop from "../images/uS7Xm-removebg-previewda.png";
import Nav from "../components/Nav";
import Animation from "../components/Animation";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0, y: -50, transition: { duration: 1 } },
};

const Home = () => {
  return (
    <motion.main
      className="flex h-screen bg-accent-900 text-accent-100"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <aside className="z-10">
        <Nav />
      </aside>

      <Animation />

      <section className="flex flex-col items-center justify-center py-64 w-1/2 h-1/2 mx-auto rounded-lg mt-24 bg-accent-800 border border-accent-700 z-10">
        <h1 className="text-4xl md:text-7xl font-bold tracking-wider my-20">
          <span className="text-primary-500">&lt;/</span>
          Ugnius
          <span className="text-primary-500"> &gt;</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 opacity-20">
          Personal portfolio for Software Developer
        </p>

        <div className="flex justify-center gap-3">
          <span className="bg-primary-700 bg-opacity-50 text-primary-200 px-3 py-1 text-sm rounded-md">
            #portfolio
          </span>
          <span className="bg-primary-700 bg-opacity-50 text-primary-200 px-3 py-1 text-sm rounded-md">
            #developer
          </span>
          <span className="bg-primary-700 bg-opacity-50 text-primary-200 px-3 py-1 text-sm rounded-md">
            #software engineer
          </span>
        </div>

        <div className="relative w-full max-w-md md:max-w-lg">
          <img
            className="relative w-full h-auto"
            src={laptop}
            alt="Laptop illustration"
          />
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
