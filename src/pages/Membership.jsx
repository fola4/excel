import React from "react";

function Membership() {
  return (
    <div>
      <header id="membership">
        <div className=" absolute left-0 top-0 h-full w-full bg-black opacity-75"></div>

        {/* <!-- content --> */}
        <div className="relative z-20 grid grid-cols-1 gap-x-5 px-8 pb-3 lg:grid-cols-2">
          <div className="order-2 flex flex-col self-center text-center text-white md:block lg:text-left">
            <h2 id="getInTouch" className="mb-0 pt-2 text-7xl">
              Get In Touch
            </h2>
            <p className="border-b border-gray-400 py-8 text-2xl font-thin">
              Ready to experience the excitement of badminton?<br></br>Let us
              help you become even greater at what you do . Get in touch now and
              unleash your potential on the court!
            </p>

            <div className="mt-3 grid grid-cols-1 gap-y-8 md:grid-cols-2">
              <div className="text-md self-center md:self-start">
                <p className="flex justify-center">
                  Our club nights are: <br /> Tuesday 8:40pm - 10:00pm <br />
                  (Rocket) feathers
                </p>
                <p className="flex justify-center">
                  Thursday 6:40pm - 08:40pm <br />
                  (Ace) feathers
                </p>
                <p className="flex justify-center">
                  Sunday 3pm - 4:30pm <br />
                  (Family one) plastics/feathers
                </p>
              </div>
              <div className="flex flex-col gap-y-5 self-center text-xl">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Barnet, North London"
                  target="_blank"
                >
                  <i
                    className="fa-sharp fa-solid fa-location-dot mr-2"
                    style={{ color: "#818181" }}
                  ></i>
                  Barnet, North London
                </a>
                <p>
                  <i
                    className="fa-sharp fa-solid fa-phone-volume mr-2"
                    style={{ color: "#818181" }}
                  ></i>
                  <a href="tel:+2347069637865">+2347069637865</a>
                </p>
                <p>
                  <i
                    className="fa-sharp fa-solid fa-envelope mr-2"
                    style={{ color: "#818181" }}
                  ></i>
                  information@office.com
                </p>
              </div>
            </div>
          </div>

          <form className="order-1 rounded-xl bg-[hsla(0,0%,99%,.1)] px-8 pb-10 pt-5 lg:order-3">
            <p className="my-10 text-center text-5xl font-medium text-[hsla(0,0%,95%)]">
              Join Our Team
            </p>
            <div className="grid grid-cols-1 grid-rows-4 gap-x-8 gap-y-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-gray-400 bg-transparent py-3 text-xl font-extralight text-gray-200 outline-none placeholder:text-white"
              />
              <input
                type="text"
                placeholder="Surname"
                className="border-b border-gray-400 bg-transparent py-3 text-xl font-extralight text-gray-200 outline-none placeholder:text-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-400 bg-transparent py-3 text-xl font-extralight text-gray-200 outline-none placeholder:text-white"
              />
              <input
                type="search"
                placeholder="Phone"
                className="border-b border-gray-400 bg-transparent py-3 text-xl font-extralight text-gray-200 outline-none placeholder:text-white"
              />

              <textarea
                name="text"
                id="text"
                rows="5"
                className="resize-none border-b border-gray-400 bg-transparent py-3 text-xl font-extralight text-gray-200 outline-none placeholder:text-white md:col-span-2 md:row-span-2"
                placeholder="Your text"
              ></textarea>
            </div>
            /{" "}
            <input
              type="submit"
              className="mt-8 w-full cursor-pointer rounded-full border border-transparent bg-black py-3 text-center text-2xl font-normal text-[hsl(0,0%,95%)] transition hover:bg-white hover:text-[#000]"
            />
          </form>
        </div>
      </header>
    </div>
  );
}

export default Membership;
