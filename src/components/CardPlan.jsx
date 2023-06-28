import React from 'react'

function CardPlan({name, price, description}) {
  return (
    <div className="max-w-xl flex flex-col gap-y-14 border border-black px-8 py-6 rounded-md bg-[hsl(0,0%,5%)] text-[hsl(0,0%,95%)]">
      {/* Card Top */}
      <div className="flex justify-between items-center">
        <div className="font-extralight text-3xl">{name}</div>

        <div className="flex flex-col items-center">
          <div className="text-4xl font-medium">{price}</div>
          <div className="uppercase text-[#818181] text-xs tracking-widest">per month</div>
        </div>
      </div>

      {/* Card Bottom */}
      <div className="flex flex-col justify-between h-full items-center gap-y-5">
        <p className="text-center">{description}</p>

        <div>
          <button className='btn3'>
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPlan;