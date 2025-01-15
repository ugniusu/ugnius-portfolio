import { useState } from "react";
import picture from "../images/me.png";
import robotPicture from "../images/robot.png";
import stulpai from "../images/stulpai.png";
import Navigation from "../components/Navigation";

const About = () => {
  const [active, setActive] = useState("aboutMe");

  function handleTabClick(tab) {
    setActive(tab);
  }

  return (
    <section className="flex flex-row h-screen bg-accent-900">
      <aside className="w-1/5 md:w-auto">
        <Navigation />
      </aside>

      <section className="flex flex-col justify-center items-center relative w-2/3 md:w-[75%] h-full mx-auto p-4 md:p-6 lg:p-8">
        <h1 className="text-primary-500 text-xl md:text-2xl font-medium text-center py-2 md:py-4">
          About Me
        </h1>

        <div className="bg-accent-850 flex flex-col justify-center items-center relative w-full max-w-[95%] lg:max-w-[80%] h-auto m-4 md:m-6 p-4 md:p-6 border border-primary-500 rounded-xl">
          <img
            src={picture}
            alt="Me in dark background"
            className="w-24 md:w-36 lg:w-48 h-24 md:h-36 lg:h-48 rounded-full object-cover mb-4 md:mb-6"
          />

          <div className="absolute right-[-37px] md:right-[-56px] lg:right-[-77px] top-0">
            <img
              src={robotPicture}
              alt="Robot"
              className="w-[120px] md:w-[180px] lg:w-[250px]"
            />
            <p className="absolute right-10 md:right-20 lg:right-28 top-28 md:top-40 lg:top-48 text-white bg-transparent border-2 border-primary-500 rounded-lg px-2 md:px-3 py-1 md:py-2 backdrop-blur-sm text-xs md:text-sm lg:text-base">
              That&apos;s true
            </p>
          </div>

          <h3 className="text-white text-lg md:text-xl font-medium">
            Hi, I am
          </h3>
          <h1 className="text-primary-500 text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 lg:mb-8">
            Ugnius Uscilas
          </h1>

          <div className="flex gap-2 md:gap-4 lg:gap-6">
            <button
              className={`px-3 md:px-4 lg:px-6 py-1 md:py-2 font-semibold text-xs lg:text-md 2xl:text-lg rounded-md border border-primary-500 text-accent-50 bg-accent-850 hover:bg-blue-400 hover:text-accent-50 transition-all ${
                active === "aboutMe" ? "bg-primary-500 text-accent-50" : ""
              }`}
              onClick={() => handleTabClick("aboutMe")}
            >
              About me
            </button>
            <button
              className={`px-3 md:px-4 lg:px-6 py-1 md:py-2 font-semibold text-xs lg:text-md 2xl:text-lg rounded-md border border-primary-500 text-accent-50 bg-accent-850 hover:bg-primary-500 hover:text-accent-50 transition-all ${
                active === "personalBio" ? "bg-primary-500 text-accent-50" : ""
              }`}
              onClick={() => handleTabClick("personalBio")}
            >
              Personal Bio
            </button>
          </div>

          <div className="flex flex-col justify-center items-center mt-4 md:mt-6 w-[95%] md:w-[85%] lg:w-[70%] border border-primary-500 rounded-lg shadow-lg px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 min-h-[8rem] md:min-h-[10rem] lg:min-h-[12rem]">
            {active === "aboutMe" && (
              <p className="text-accent-50 text-center text-xs md:text-sm 2xl:text-lg">
                Aspiring{" "}
                <span className="text-primary-500 font-medium">
                  &lt;front-end developer /&gt;
                </span>{" "}
                with a background from KITM studies and 1 year of self-taught
                experience in web development. My goal is to contribute to the
                timely and efficient completion of projects through strong
                written and verbal communication skills. I specialize in
                technologies like React and Next.js.
              </p>
            )}

            {active === "personalBio" && (
              <p className="text-accent-50 text-center text-xs md:text-sm 2xl:text-lg">
                I am 26 years old, enthusiastic, self-motivated, reliable,
                responsible, hard-working, and happy person from Jonava. Almost
                my whole life I have been improving communication skills and
                team-based tasks. Served in the military and was Squad leader
                for 8 years and now I decided to focus all my energy and passion
                to web development, so I&apos;m very willing to learn and
                develop new skills.
              </p>
            )}
          </div>

          <img
            src={stulpai}
            alt="Gediminaiciu stulpai"
            className="hidden md:block md:w-12 lg:w-24 2xl:w-32 absolute left-2 bottom-0"
          />
        </div>
      </section>
    </section>
  );
};

export default About;
