import Navigation from "../components/Navigation";
import ParticlesComponent from "../components/particles";
// import laptop from "../images/uS7Xm-removebg-previewda.png";
import TypingAnimation from "../components/TypingAnimation";

const Home = () => {
  const rotatingText = ["A Developer.", "Ugnius Uscilas."];

  return (
    <main className="relative flex h-screen bg-accent-900 text-accent-100 bg-img">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <ParticlesComponent id="particles" />

      <aside className="z-20">
        <Navigation />
      </aside>

      <section className="relative z-20 flex flex-col items-center justify-center py-64 w-1/2 h-1/2 mx-auto rounded-lg mt-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider my-20">
          <span className="text-primary-500">&lt;</span>
          Ugnius
          <span className="text-primary-500"> /&gt;</span>
        </h1>

        <p className="text-2xl mb-8 opacity-20">Hello & Nice to meet you</p>

        <div className="flex flex-col items-center">
          <p className="text-6xl">
            I am <TypingAnimation texts={rotatingText} period={2000} />
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
