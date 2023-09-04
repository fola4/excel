import React from "react";
import { craig, video } from "../assets/images";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <header id="main-page" className="px-0">
        {/* hero content */}
        <div className="grid h-full">
          <div className="flex flex-col gap-y-8 self-center">
            <h1 className="text-center text-4xl font-bold tracking-widest text-white sm:text-5xl md:text-8xl lg:text-9xl">
              Being good at Badminton{" "}
              <span className="whitespace-nowrap">is everything.</span>
            </h1>

            <div className="flex items-center gap-x-2 self-center text-white md:text-2xl lg:gap-x-5 lg:text-3xl">
              <div>Study</div>
              <div className="dot-block"></div>
              <div>Practice</div>
              <div className="dot-block"></div>
              <div>Play</div>
              <div className="dot-block"></div>
              <div>Win</div>
            </div>

            <button className="self-center justify-self-end rounded-[6rem] border border-white px-4 py-3 font-bold text-white transition hover:border-transparent hover:bg-black lg:px-8 lg:py-4 lg:text-3xl">
              <Link to="/membership" className="btn1">
                Join Us Now
              </Link>
            </button>
          </div>
        </div>
      </header>

      {/* <!-- section 2 --> */}
      <section className="grid auto-rows-auto grid-cols-1 grid-rows-[400px_1fr] gap-y-8 bg-black px-8 py-12 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-8 lg:py-28 xl:grid-cols-[45%_1fr_45%]">
        <div className="flex flex-col space-y-8 text-[#818181] xl:space-y-12 xl:self-center">
          <h1 className="text-center font-medium tracking-widest lg:text-left lg:text-xl">
            LEADING #1 BADMINTON CENTRE
          </h1>

          <hr />

          <p className="text-center font-light lg:text-left lg:text-xl">
            We are a mixed bunch of friendly, social badminton fans based in the
            borough of Barnet, North London. Everyone is welcome to our club
            regardless of age, gender, capacity or abilities.
          </p>

          <Link to="/membership" className="self-center lg:self-start">
            <button className="rounded-[40px] border border-white px-8 py-1 capitalize text-white hover:bg-white hover:text-black">
              get in touch
            </button>
          </Link>
        </div>

        <div className="max-width grid grid-cols-2 grid-rows-2 gap-12 text-white xl:col-start-3">
          <div className="flex flex-col gap-y-8">
            <span className="h-full text-8xl lg:text-7xl xl:text-9xl">5+</span>
            <p id="sub-text">Professional Trainers</p>
          </div>
          <div className="flex flex-col gap-y-8">
            <span className="h-full text-8xl lg:text-7xl xl:text-9xl">10</span>
            <p id="sub-text">Professional Trainers</p>
          </div>
          <div className="flex flex-col gap-y-8">
            <span className="h-full text-8xl lg:text-7xl xl:text-9xl">
              10K+
            </span>
            <p id="sub-text">Professional Trainers</p>
          </div>
          <div className="flex flex-col gap-y-8">
            <span className="h-full text-8xl lg:text-7xl xl:text-9xl">
              13k+
            </span>
            <p id="sub-text">Professional Trainers</p>
          </div>
        </div>
      </section>

      {/* <!-- section 3 --> */}
      <section className="flex flex-col lg:flex-row">
        <div className="grid min-h-full place-items-center md:ml-8">
          <div className="my-2 flex flex-col gap-y-8 text-center lg:text-left">
            <span className="font-thin tracking-widest md:text-3xl">
              OUR STORY
            </span>

            <h2 className="font-bold lg:text-3xl lg:tracking-widest">
              Founded by diverse badminton fans in Barnet, London, We welcome
              all abilities, providing coaching and family sessions.
            </h2>

            <a href="./about us">
              <button className="rounded-3xl border border-black px-5 py-2 text-2xl text-black transition hover:bg-black  hover:text-white">
                About Us
              </button>
            </a>
          </div>
        </div>

        <div>
          <video
            src={video}
            autoPlay={true}
            muted={true}
            loop={true}
            className="hidden lg:block"
          />
        </div>
      </section>

      {/* <!-- section 4 --> */}
      <section className="bg-black px-20 py-10">
        <div className="flex flex-col items-center py-20 text-white md:flex-row md:justify-between">
          <span className="whitespace-nowrap text-4xl font-extralight tracking-widest">
            OUR TEAM
          </span>
          <p className="whitespace-nowrap md:text-2xl lg:text-4xl">
            Grow your skill with our team
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={craig} alt="" className="imges" />
            <p className="image-text">Anderson Mike</p>
          </div>
          <div>
            <img src={craig} alt="" className="imges" />
            <p className="image-text">Anderson Mike</p>
          </div>
          <div>
            <img src={craig} alt="" className="imges" />
            <p className="image-text">Anderson Mike</p>
          </div>
          <div>
            <img src={craig} alt="" className="imges" />
            <p className="image-text">Anderson Mike</p>
          </div>
        </div>
      </section>

      {/* <!-- section 5 --> */}
      <article className="relative px-4 py-16">
        <i className="fa-solid fa-quote-left absolute left-0 top-0 text-[10rem] text-black opacity-20 md:text-[10rem] lg:text-[15rem]" />
        <i className="fa-solid fa-quote-right absolute bottom-0 right-0 text-[10rem] text-black opacity-20 md:text-[10rem] lg:text-[15rem]"></i>

        <h3 className="text-center text-5xl font-light leading-[1.1] md:text-6xl lg:px-6 lg:text-8xl lg:leading-[1.35]">
          "When you play badminton, play with{" "}
          <span className="text-red-500">passion</span>, play with{" "}
          <span className="text-red-500">heart</span>, and leave{" "}
          <span className="text-red-500">everything</span> on the court."
        </h3>

        <hr className="my-8 border-black" />

        <p className="italic lg:pt-8 lg:text-2xl">- Gail Emms</p>
      </article>
    </div>
  );
}

export default MainPage;
