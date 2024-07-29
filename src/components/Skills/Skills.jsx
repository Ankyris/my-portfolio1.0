import React from 'react'
import {Frontend} from './Frontend'
import {Backend} from './Backend'

export default function Skills () {
  return (
    <section className='container mx-atuo overflow-y-hidden' id='skills'>
        <h2 className='text-center text-[36px] text-gray-800' data-aos="fade-down" data-aos-duration="1300" data-aos-delay="200">Skills</h2>
        <span className='block text-center text-[16px] mb-14 font-medium' data-aos="fade-down" data-aos-duration="1000">My technical level</span>

        <div className='grid lg:grid-cols-[repeat(2,_450px)] lg:gap-x-9 xl:grid-cols-[repeat(2,_500px)] xl:gap-x-12
        grid-cols-[max-content] gap-y-12 p-6 pt-0 justify-center'>
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}
