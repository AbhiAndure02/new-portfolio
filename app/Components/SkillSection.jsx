import React from 'react'
import Image from 'next/image'

const SkillSection = () => {
  return (
    <section>
        <div className='items-center mt-10'>
            <h1 className='text-3xl text-center  text-white '>Skills</h1>
            </div>
        <div className='flex gap-24'>
        <div className='px-3 py-4 mt-16 ml-0'>
            <h3 className='text-2xl mr-9 px-13 text-white left-10 items-center font-bold'>   HTML</h3>
            <Image src="/images/html.png"
            className='mt-5'
            width={150}
            height={150}

            />
        </div>
        <div className='px-3 py-4 mt-16 ml-0'>
            <h3 className='text-2xl mr-9 text-white left-10 items-center font-bold'>Java Script</h3>
            <Image src="/images/JavaScript-logo.png"
            className='mt-5'
            width={200}
            height={200}

            />
        </div>
        </div>
      
    </section>
  )
}

export default SkillSection
