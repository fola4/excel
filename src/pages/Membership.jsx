import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Membership() {
  return (
    <div>
      <header id="membership" className="relative">
        <div className="absolute top-0 left-0 h-full w-full opacity-75 bg-black"></div>
        <Navbar />
        
        {/* <!-- content --> */}
        <div className="grid grid-cols-2 gap-x-5 px-8 relative z-20">

          <div className="self-center">
            <h2 id="getInTouch" className="text-7xl pt-2 mb-0">Get In Touch</h2>
            <p className="text-2xl py-10 border-b border-gray-400 font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur similique nostrum corrupti officia aliquid excepturi assumenda dolorum tempore culpa? Quaerat dolor error harum enim libero adipisci mollitia, perferendis placeat.
            </p>

            <div className="flex flex-col text-2xl gap-y-5 mt-5">
              <a href="https://www.google.com/maps/search/?api=1&query=Barnet, North London" target="_blank"><i className="mr-2 fa-sharp fa-solid fa-location-dot" style={{"color": "#818181"}}></i>
                Barnet, North London</a>
              <p><i className="mr-2 fa-sharp fa-solid fa-phone-volume" style={{"color": "#818181"}}></i>
                +44 795 680 4395</p>
              <p><i className="mr-2 fa-sharp fa-solid fa-envelope" style={{"color": "#818181"}}></i>
                information@office.com</p>
            </div>
            
          </div>

          <form className="bg-[hsla(0,0%,99%,.1)] pt-5 px-8 pb-10 rounded-xl">
            <p className="text-center text-[hsla(0,0%,95%)] text-5xl font-medium my-10">Join Our Team</p>
            
            <div className="grid grid-cols-2 grid-rows-4 gap-x-8 gap-y-5">
              <input
                type="text" placeholder="Name"
                className="border-b border-gray-400 text-xl font-extralight bg-transparent outline-none py-3 text-gray-200 placeholder:text-white" />
              <input
                type="text" placeholder="Surname"
                className="border-b border-gray-400 text-xl font-extralight bg-transparent outline-none py-3 text-gray-200 placeholder:text-white" />
              <input
                type="email" placeholder="Email"
                className="border-b border-gray-400 text-xl font-extralight bg-transparent outline-none py-3 text-gray-200 placeholder:text-white" />
              <input
                type="search" placeholder="Phone"
                className="border-b border-gray-400 text-xl font-extralight bg-transparent outline-none py-3 text-gray-200 placeholder:text-white" />
              
              <textarea name="text" id="text" rows="5" className="row-span-2 col-span-2 resize-none border-b border-gray-400 text-xl font-extralight bg-transparent outline-none py-3 text-gray-200 placeholder:text-white" placeholder="Your text"></textarea>
            </div>

            <input type="submit" className="w-full border bg-black hover:bg-white rounded-full text-center text-[hsl(0,0%,95%)] hover:text-[#000] text-2xl py-3 mt-8 font-normal cursor-pointer transition border-transparent" />
          </form>

        </div>
        
        
      </header>
    </div>
  );
}

export default Membership;