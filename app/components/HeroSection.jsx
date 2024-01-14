import React from 'react'
import Image from 'next/image';
import ButtonPrimary from './ButtonPrimary';
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">

        {/* First grid */}
        <div className="col-span-7 place-self-center">
          <h1 className='text-[--secondary] mb-4 text-4xl lg:text-6xl font-extrabold'>Olá, sou Iasmim</h1>
          <p className='text-[--light-text] text-lg lg:text-xl italic mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, autem quibusdam porro dicta repellendus neque qui suscipit officiis deleniti maiores minus enim velit dolor doloremque corrupti delectus expedita, quaerat iure!</p>

          <div className="">
          {/* Transforme o botão em um componente! E faça um commit descritivo! */}
            <button className='px-6 pv-3 rounded-full bg-[#5A190D] hover:bg-[#f7b538] hover:text-[#5A190D] font-bold'>Contrate-me</button>

            <button>Baixe meu currículo</button>
          </div>
         
        </div>
        {/* Second grid */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[--primary-opaque] lg:w-[300px] lg:h-[300px]  w-[250px] h-[250px] relative">
            <Image
              src={"/images/ias6.png"}
              alt='Iasmim hero'
              width={300}
              height={300}
              className='absolute tansform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            />

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;