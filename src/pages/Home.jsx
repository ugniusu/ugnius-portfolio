import laptop from "../images/uS7Xm-removebg-previewda.png";
import Navigation from "../components/Navigation";
import bg from "../images/bg.png";

const Home = () => {
  return (
    <main
      className="flex h-screen bg-accent-900 text-accent-100 bg-custom-svg"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover", // Ensures the background covers the entire container
        backgroundPosition: "center", // Centers the background
        backgroundRepeat: "no-repeat", // Prevents tiling
      }}
    >
      <aside className="z-10">
        <Navigation />
      </aside>

      <section className="flex flex-col items-center justify-center py-64 w-1/2 h-1/2 mx-auto rounded-lg mt-24 bg-accent-850 border border-accent-700 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider my-20">
          <span className="text-primary-500">&lt;</span>
          Ugnius
          <span className="text-primary-500"> /&gt;</span>
        </h1>

        <p className="text-sm md:text-xl mb-8 opacity-20">
          Personal portfolio for Software Developer
        </p>

        <div className="gap-1 grid grid-cols-2 lg:flex lg:gap-3">
          <span className="bg-primary-700 bg-opacity-50 text-primary-200 px-3 py-1 text-xs rounded-md">
            #portfolio
          </span>
          <span className="bg-primary-700 bg-opacity-50 text-primary-200 px-3 py-1 text-xs rounded-md">
            #developer
          </span>
          <span className="bg-primary-700 bg-opacity-50 text-primary-200 px-3 py-1 text-xs rounded-md">
            #software engineer
          </span>
          <span className="bg-primary-700 bg-opacity-50 text-primary-200 px-3 py-1 text-xs rounded-md">
            #React
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
    </main>
  );
};

export default Home;
