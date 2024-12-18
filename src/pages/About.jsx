import React, { useState } from "react";
import picture from "../../public/images/me.png";
import robotPicture from "../../public/images/robot.png";
import stulpai from "../../public/images/stulpai.png";
import Nav from "../components/Nav";
import Animation from "../components/Animation";

const About = () => {
  const [active, setActive] = useState("aboutMe");

  function handleTabClick(tab) {
    setActive(tab);
  }

  return (
    <section className="flex h-screen bg-accent-900">
      <aside>
        <Nav />
      </aside>

      <div className="flex flex-col justify-center items-center relative w-[75%] h-full mx-auto p-6">
        <Animation />

        <h1 className="text-primary-500 text-2xl font-medium text-center py-6">
          About
        </h1>
        <div className="bg-accent-850 flex flex-col justify-center items-center relative w-[1000px] h-[600px] m-6 p-6 border border-primary-500 rounded-xl">
          <img
            src={picture}
            alt="Me in dark background"
            className="w-48 h-48 rounded-full object-cover mb-6"
          />
          <div className="absolute right-[-78px] top-0">
            <img src={robotPicture} alt="Robot" className="w-[250px]" />
            <p className="absolute right-28 top-48 text-white bg-transparent border-2 border-primary-500 rounded-lg px-3 py-2 backdrop-blur-sm">
              That&apos;s true
            </p>
          </div>
          <h3 className="text-white text-xl font-medium">Hi, I am</h3>
          <h1 className="text-primary-500 text-3xl font-bold mb-8">
            Ugnius Uscilas
          </h1>

          <div className="flex gap-6">
            <button
              className={`px-6 py-2 font-semibold text-lg rounded-md border border-primary-500 text-accent-50 bg-accent-850 hover:bg-blue-400 hover:text-accent-50 transition-all ${
                active === "aboutMe" ? "bg-primary-500 text-accent-50" : ""
              }`}
              onClick={() => handleTabClick("aboutMe")}
            >
              About me
            </button>
            <button
              className={`px-6 py-2 font-semibold text-lg rounded-md border border-primary-500 text-accent-50 bg-accent-850 hover:bg-primary-500 hover:text-accent-50 transition-all ${
                active === "personalBio" ? "bg-primary-500 text-accent-50" : ""
              }`}
              onClick={() => handleTabClick("personalBio")}
            >
              Personal Bio
            </button>
          </div>

          {active === "aboutMe" && (
            <p className="px-6 py-4 text-accent-50 text-center border border-primary-500 rounded-lg shadow-lg w-[550px] h-48 mt-6 ">
              Aspiring{" "}
              <span className="text-primary-500 font-medium">
                &lt;/front-end developer&gt;
              </span>{" "}
              with a background from KITM studies and 1 year of self-taught
              experience in web development. My goal is to contribute to the
              timely and efficient completion of projects through strong written
              and verbal communication skills. I specialize in technologies like
              React and Next.js.
            </p>
          )}

          {active === "personalBio" && (
            <p className="px-6 py-4 text-accent-50 text-center border border-primary-500 rounded-lg shadow-lg w-[550px] h-48 mt-6">
              I am 26 years old, enthusiastic, self-motivated, reliable,
              responsible, hard-working, and happy person from Jonava. Almost my
              whole life I have been improving communication skills and
              team-based tasks. Served in military and was Squad leader for 8
              years and now I decided to focus all my energy and passion, so
              I&apos;m very willing to learn and develop new skills.
            </p>
          )}

          <img
            src={stulpai}
            alt="Gediminaiciu stulpai"
            className="w-32 absolute left-2 bottom-0"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
