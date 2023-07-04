import React from 'react';
import { craig, video } from '../assets/images'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
        {/* <!-- content --> */}
      <header id='main-page'>
        <Navbar />
        
        <div className="content">
          <h1 className='text-[2em]'>
            Being good at Badminton <br /> is everything.
          </h1>

          <div className="hero1">
            <div>Study</div>
            <div className="dot-block"></div>
            <div>Practice</div>
            <div className="dot-block"></div>
            <div>Play</div>
            <div className="dot-block"></div>
            <div>Win</div>
          </div>

          <button className="button">
            <Link to="/membership" className="btn1">Join Us Now</Link>
          </button>
        </div>
      </header>

      {/* <!-- section 2 --> */}
      <section id="black-background" className='border-2 border-green-600'>
        <div className="texts">
          <h1 id="head">LEADING #1 BADMINTON CENTRE</h1>
          <hr />
          <p  id="text-content">
            We are a mixed bunch of friendly, social badminton fans based in the borough of Barnet, North London. Everyone is welcome to our club regardless of age, gender, capacity or abilities.
          </p>
          <Link to='/membership'>
            <button className='btn2'>get in touch</button>
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

          <h2 className='font-bold'>
            Founded by diverse badminton fans in Barnet, London, We welcomes all abilities, providing coaching and family sessions.
          </h2>
          
          <Link to="/about us">
            <button className="btn3 border-black text-black hover:bg-black hover:text-white">
              About Us
            </button>
          </Link>
        </div>
        <div id="image">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>

      </section>

      {/* <!-- section 4 --> */}
      <section className='black-background2 py-10 px-20'>
        <div id="white" className='flex justify-between py-20'>
          <span>OUR TEAM</span>
          <p className="white-texts">Grow your skill with<br />our team</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-12'>
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
          "When you play badminton, play with passion, play with heart, and leave everything on the court."
        </h3>
        <hr />
        <p id="quotes">- Gail Emms</p>
      </article>
            
    </div>
  );
}

export default MainPage;