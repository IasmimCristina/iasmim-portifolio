import React from 'react'

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">

        {/* First grid */}
        <div className="col-span-7 place-self-center">
          <h1 className='text-[--secondary] mb-4 text-4xl lg:text-6xl font-extrabold'>Olá, sou Iasmim</h1>
          <p className='text-[--light-text] text-lg lg:text-xl italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, autem quibusdam porro dicta repellendus neque qui suscipit officiis deleniti maiores minus enim velit dolor doloremque corrupti delectus expedita, quaerat iure!</p>
        </div>
        {/* Second grid */}
        <div className="col-span-5">

        </div>
      </div>
    </section>
  )
}

export default HeroSection;