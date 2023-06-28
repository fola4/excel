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
      <footer>
      <div className="footer-wrapper">
        <div id="white">
          <span>MEMBERSHIP</span>
          <p className="black-text">Select the best plan</p>
        </div> 
        <div className="card-footer">
          <div className="card-plan">
            <div className="top-block-card">
              <div className="normal-text">Standard</div>
              <div className="price-card">
                <div className="price-text">£4/£8</div>
                <div className="white-text">Month</div>
              </div>
            </div>
            <div className="bottom-block-card">
              <div className="white-text">Standard fees: Students £4, Adults £8. Enroll now to unlock your potential with us.</div>
              <p className="button">
              <a href="#" className="btn3">Join</a>
              </p>
            </div>
          </div>
          <div className="card-plan">
            <div className="top-block-card">
              <div className="normal-text">Family Session</div>
              <div className="price-card">
                <div className="price-text">£8</div>
                <div className="white-text">Month</div>
              </div>
            </div>
            <div className="bottom-block-card">
              <div className="white-text">Unforgettable family sessions: Kids £8, Adults £8. Join us for quality bonding time and lasting memories..</div>
              <p className="button">
              <a href="#" className="btn3">Join</a>
              </p>
            </div>
          </div>
          <div className="card-plan">
            <div className="top-block-card">
              <div className="normal-text">Coached Session</div>
              <div className="price-card">
                <div className="price-text">£8/£15</div>
                <div className="white-text">Month</div>
              </div>
            </div>
            <div className="bottom-block-card">
              <div className="white-text">Level up your game with expert-led coached sessions. Kids: £8, Adults: £15. Join us and reach new heights in badminton</div>
              <p className="button">
              <a href="#" className="btn3">Join</a>
              </p>
            </div>
          </div>
            </div>
      </div>


      {/* <!-- badminton --> */}
      <div className="contact">
        <div>
          <span><a href="#" id="logo">Badminton Excel</a></span>
        <p className="card-text">Embrace Diversity, Elevate Skills,<br /> Achieve Fitness!</p>
        </div>
          
        <div>
          <h4 className="text-[80px] mb-2 font-semibold">Let's play</h4>
          <div className="button">
            <a href="#" className="btn3">Register with us!</a>
          </div>
        </div>
      </div>
      <div className="social">
      <ul>
        <li><a href="#" className="social-icon">
          <i className="fa-brands fa-instagram fa-beat mr-1" style={{color: '#818181'}}></i>
          Instagram</a></li>
        <li><a href="#" className="social-icon">
          <i className="fa-brands fa-facebook fa-shake mr-1" style={{color: '#818181'}}></i>
          Facebook</a></li>
        <li><a href="#" className="social-icon">
          <i className="fa-brands fa-twitter fa-bounce mr-1" style={{color: '#818181'}}></i>
          Twitter</a></li>
      </ul>
      <p className="copyright">&copy;Badminton Excel. All Rights Reserved 2023. </p>
      </div>
    </footer>
    
  </div>
  );
}

export default Team;