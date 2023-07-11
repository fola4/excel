import React from "react";
import { craig, video } from "../assets/images";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <header id="main-page">
        {/* hero content */}
        <div className="grid h-full">
          <div className="flex flex-col gap-y-8 self-center">
            <h1 className="text-center text-3xl font-bold tracking-widest text-white sm:text-5xl md:text-8xl lg:text-9xl">
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

            <button className="self-center justify-self-end rounded-md border border-white px-4 py-3 font-bold text-white transition hover:border-transparent hover:bg-black lg:px-8 lg:py-4 lg:text-3xl">
              <Link to="/membership" className="btn1">
                Join Us Now
              </Link>
            </button>
          </div>
        </div>
      </header>

      {/* <!-- section 2 --> */}
      <section id="black-background" className="border-2 border-green-600">
        <div className="texts">
          <h1 id="head">LEADING #1 BADMINTON CENTRE</h1>
          <hr />
          <p id="text-content">
            We are a mixed bunch of friendly, social badminton fans based in the
            borough of Barnet, North London. Everyone is welcome to our club
            regardless of age, gender, capacity or abilities.
          </p>
          <Link to="/membership">
            <button className="btn2">get in touch</button>
          </Link>
        </div>
        <div id="stats">
          <div data-aos="fade-left">
            <div>
              <span className="num">5+</span>
              <p id="sub-text">Professional Trainers</p>
            </div>
            <div>
              <span className="num">10K+</span>
              <p id="sub-text">Professional Trainers</p>
            </div>
          </div>
          <div>
            <div>
              <span className="num">10</span>
              <p id="sub-text">Professional Trainers</p>
            </div>
            <div>
              <span className="num">13k+</span>
              <p id="sub-text">Professional Trainers</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- section 3 --> */}
      <section id="white-background">
        <div>
          <span>OUR STORY</span>

          <h2 className="font-bold">
            Founded by diverse badminton fans in Barnet, London, We welcomes all
            abilities, providing coaching and family sessions.
          </h2>

          <Link to="/about us">
            <button className="btn3 border-black text-black hover:bg-black hover:text-white">
              About Us
            </button>
          </Link>
        </div>
        <div id="image">
          <video src={video} autoPlay muted loop className="video" />
        </div>
      </section>

      {/* <!-- section 4 --> */}
      <section className="black-background2 px-20 py-10">
        <div id="white" className="flex justify-between py-20">
          <span>OUR TEAM</span>
          <p className="white-texts">
            Grow your skill with
            <br />
            our team
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
      <article>
        <h3>
          "When you play badminton, play with passion, play with heart, and
          leave everything on the court."
        </h3>
        <hr />
        <p id="quotes">- Gail Emms</p>
      </article>
    </div>
  );
}

export default MainPage;
