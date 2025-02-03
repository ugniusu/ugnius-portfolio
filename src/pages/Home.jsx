import UgniusCV from "/cv/Ugnius-CV.pdf";
import Navigation from "../components/Navigation";
import SocialLinks from "../components/SocialLinks";
import TypingAnimation from "../components/TypingAnimation";
import ParticlesComponent from "../components/ParticlesComponent";

const Home = () => {
  const rotatingText = ["A Developer.", "Ugnius Uscilas."];

  return (
    <main className="relative flex h-screen bg-accent-900 text-accent-100 bg-img">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <ParticlesComponent id="particles" />

      <Navigation />

      <section className="relative z-20 flex flex-col items-center justify-center py-64 w-1/2 h-1/2 mx-auto rounded-lg mt-24">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-wider my-20 font-montserrat">
          <span className="text-primary-500">&lt; </span>
          Ugnius
          <span className="text-primary-500"> /&gt;</span>
        </h1>

        <p className="text-lg md:text-3xl sm:text-2xl mb-8 opacity-20">
          Hello & Nice to meet you
        </p>

        <div className="flex flex-col items-center">
          <p className="text-xl sm:text-2xl md:text-4xl xl:text-6xl">
            I am <TypingAnimation texts={rotatingText} period={2000} />
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-center items-center">
          <SocialLinks />
          <a
            href={UgniusCV}
            download="Ugnius-Uscilas.pdf"
            className="text-sm md:text-2xl mt-8 border-2 rounded-3xl py-1 px-4"
          >
            Download CV
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
