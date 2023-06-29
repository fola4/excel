import React from 'react';

function AboutSection({id, image, description}) {
  return (
    <section className='grid grid-cols-[40%_1fr_40%] grid-rows-1'>
      <p className={`${!(id % 2 === 0) ? 'col-start-1' : 'col-start-3'} text-2xl font-light self-center`}>{description}</p>

      <div className={`${id % 2 === 0 ? 'col-start-1' : 'col-start-3'} row-start-1`}>
        <img src={image} className=''/>
      </div>
    </section>
  );
}

export default AboutSection;