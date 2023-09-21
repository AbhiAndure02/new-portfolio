/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='text-white md:flex lg:flex sm:items-center'>
       <div className='md:grid md:grid-cols-2 gap-8 items-center rounded py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image className='rounded ml-10 mr-0 px-5 ' 
        src = "/images/about.jpeg" 
        height={2500}
        width={2500} />
        </div>
        <div>
            <h2 className='text-4xl font-bold mt-16 text-white mb-4'>About Me</h2>
            <p className='mr-3 font-semibold hover:text-white text-[#ADB7BE]'>
                I am full stack web developer with a passion for creating interactive and responsive 
                web application. I have experience working with <span className='text-[#ADB7BE] hover:text-blue-200'> javascript, React, Java , Html, css, Tailwind Css, NodeJs, Express, Mysql, Next js </span>
                I am always looking to expand my knowledge and skill set, 
            </p>
        </div>
    </section>
  )
}

export default AboutSection
