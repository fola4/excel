import React from "react";
import Footer from "../components/Footer";

function Team() {
  return (
  <div>
    <header id="team" className="relative">
      <div className="absolute top-0 left-0 h-full w-full opacity-75 bg-black"></div>
      <nav className="relative z-30">
        <span><a href="./index.html">Badminton Excel</a></span>

        <div className="nav-link">
          <a href="./index.html" className="nav-link-title">Home</a>
          <a href="./team.html" className="nav-link-title">Our team</a>
          <a href="./membership.html" className="nav-link-title">Membership</a>
          <a href="./about.html" className="nav-link-title">About Us</a>
        </div>
      </nav>
      
      {/* <!-- content --> */}
      <div className="w-full absolute grid top-0 left-0 z-20 h-full place-items-center">
        <h1 className="text-white text-[200px] ">Our Team</h1>
      </div>

    </header>

    {/* <!-- This is the prototype of what you said, so we can go from here --> */}
    <section className="grid grid-cols-3 grid-rows-2 gap-12 mt-12 px-12 my-5">

      <div className="relative">
        <p className="absolute text-white bottom-5 left-5 text-2xl ">Craig McKay</p>
        <img src="./src/assets/images/craig-mckay-jmURdhtm7Ng-unsplash.jpg" alt="team-member" />
      </div>
      
      <div className="relative">
        <p className="absolute text-white bottom-5 left-5 text-2xl ">Craig McKay</p>
        <img src="./src/assets/images/craig-mckay-jmURdhtm7Ng-unsplash.jpg" alt="team-member" />
      </div>
      
      <div className="relative">
        <p className="absolute text-white bottom-5 left-5 text-2xl ">Craig McKay</p>
        <img src="./src/assets/images/craig-mckay-jmURdhtm7Ng-unsplash.jpg" alt="team-member" />
      </div>
      
      <div className="relative">
        <p className="absolute text-white bottom-5 left-5 text-2xl ">Craig McKay</p>
        <img src="./src/assets/images/craig-mckay-jmURdhtm7Ng-unsplash.jpg" alt="team-member" />
      </div>
      
      <div className="relative">
        <p className="absolute text-white bottom-5 left-5 text-2xl ">Craig McKay</p>
        <img src="./src/assets/images/craig-mckay-jmURdhtm7Ng-unsplash.jpg" alt="team-member" />
      </div>
      
      <div className="relative">
        <p className="absolute text-white bottom-5 left-5 text-2xl ">Craig McKay</p>
        <img src="./src/assets/images/craig-mckay-jmURdhtm7Ng-unsplash.jpg" alt="team-member" />
      </div>


    </section>

    
    {/* <!-- footer --> */}
      <Footer />
    
  </div>
  );
}

export default Team;