import React from 'react'

function CardPlan({name, price, description}) {
  return (
    <div className="max-w-xl flex flex-col gap-y-14 border border-black px-8 py-6 rounded-md bg-[hsl(0,0%,5%)] text-[hsl(0,0%,95%)]">
      {/* Card Top */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="font-extralight text-3xl">{name}</div>

        <div className="flex flex-col items-center">
          <div className="text-4xl font-medium">{price}</div>
          <div className="uppercase text-red-600 text-xs tracking-widest">per session</div>
        </div>
      </div>

      {/* Card Bottom */}
      <div className="flex flex-col justify-between h-full items-center gap-y-5">
        <p className="text-center text-lg">{description}</p>

        <div>
          <a href="/membership#">
            <button className='btn3 bg-red-900 text-black border-transparent hover:border-red-600 hover:bg-transparent hover:text-white'>
              Join
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardPlan;