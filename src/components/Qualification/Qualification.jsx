import React, { useState } from 'react'

const Qualification = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section id='qualification' className='overflow-x-hidden pt-6'>
        <h2 className='text-center text-[36px] text-gray-800' data-aos="fade-right" data-aos-duration="1300" data-aos-delay="200">Qualification</h2>
        <span className='block text-center text-[16px] mb-12 font-medium' data-aos="fade-left" data-aos-duration="1000">My personal journey</span>

        <div className='max-w-[768px] mx-auto'>
          <div className='flex justify-center mb-8'>
            <div className={toggleState === 1 ? `text-[20px] font-bold
            my-0 mx-4 cursor-pointer text-amber-700 transition duration-[400ms] ease-in
            inline-flex items-center`
            : `text-[20px] font-medium text-gray-500
            my-0 mx-4 cursor-pointer transition duration-[400ms] ease-in
            inline-flex items-center`}
            onClick={() => toggleTab(1)} >
              <i className="uil uil-graduation-cap
              text-[28px] mr-1"></i>
              Education
            </div>

            <div className={toggleState === 2 ? `text-[20px] font-bold
            my-0 mx-4 cursor-pointer text-violet-800 transition duration-[400ms] ease-in
            inline-flex items-center`
            : `text-[20px] font-medium text-gray-500
            my-0 mx-4 cursor-pointer transition duration-[400ms] ease-in
            inline-flex items-center`}
            onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt
               text-[28px] mr-1"></i>
              Experience
            </div>
          </div>

          <div className='qualification__sections grid grid-cols-[initial] md:grid-cols-[0.5fr] justify-center'>
            <div className={toggleState === 1 ? 'block' : 'hidden'}>
              <div className='qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-2 sm:gap-x-6 mb-2 sm:mb-0'>

                <div data-aos="fade-right" data-aos-duration="1200">
                  <h3 className='text-[16px] text-gray-800 font-semibold'>Self-learning</h3>
                  <span className='inline-block text-[14px] mb-4'>Online Courses</span>
                  <div className='text-[14px]'>
                    <i className="uil uil-calendar-alt mr-2"></i>
                    2021 - 2022
                  </div>
                </div>

                <div>
                  <span className='qualification__rounder
                  inline-block w-[13px] h-[13px] bg-gray-500 rounded-[50%]'></span>
                  <span className='qualification__line
                  block w-[1px] h-full bg-gray-500 translate-x-[6px] -translate-y-[7px]'></span>
                </div>
              </div>

              <div className='qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-2 sm:gap-x-6 mb-2 sm:mb-0'>
                <div></div>

                <div>
                  <span className='qualification__rounder
                  inline-block w-[13px] h-[13px] bg-gray-500 rounded-[50%]'></span>
                  <span className='qualification__line
                  block w-[1px] h-full bg-gray-500 translate-x-[6px] -translate-y-[7px]'></span>
                </div>

                <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1300">
                  <h3 className='text-gray-800 text-[16px] font-semibold'>Level 3 Foundation</h3>
                  <span className='inline-block text-[14px] mb-4'>Lithan - EduClassS</span>
                  <div className='text-[14px]'>
                    <i className='uil uil-calendar-alt mr-2'></i>
                    2022 - 2023
                  </div>
                </div>

              </div>

              <div className='qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-2 sm:gap-x-6 mb-2 sm:mb-0'>
                <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1400">
                  <h3 className='text-gray-800 text-[16px] font-semibold'>Level 4 HND</h3>
                  <span className='inline-block text-[14px] mb-4'>Lithan - EduClassS</span>
                  <div className='text-[14px]'>
                    <i className='uil uil-calendar-alt mr-2'></i>
                    2023 - 2024
                  </div>
                </div>

                <div>
                  <span className='qualification__rounder
                  inline-block w-[13px] h-[13px] bg-gray-500 rounded-[50%]'></span>
                  <span className='qualification__line
                  block w-[1px] h-full bg-gray-500 translate-x-[6px] -translate-y-[7px]'></span>
                </div>
              </div>

              <div className='qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-2 sm:gap-x-6'>
                <div></div>

                <div>
                  <span className='qualification__rounder
                  inline-block w-[13px] h-[13px] bg-gray-500 rounded-[50%]'></span>
                  <span className='qualification__line
                  block w-[1px] h-full bg-gray-500 translate-x-[6px] -translate-y-[7px]'></span>
                </div>

                <div data-aos="fade-left" data-aos-delay="150" data-aos-duration="1500">
                  <h3 className='text-gray-800 text-[16px] font-semibold'>Level 5 HND</h3>
                  <span className='inline-block text-[14px] mb-4'>Lithan - EduClassS</span>
                  <div className='text-[14px]'>
                    <i className='uil uil-calendar-alt mr-2'></i>
                    2023 - Present
                  </div>
                </div>

              </div>
            </div>

            <div className={toggleState === 2 ? 'block' : 'hidden'}>

              <div className='qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-2 sm:gap-x-6 mb-2 sm:mb-0'>

                <div>
                  <h3 className='text-gray-800 text-[16px] font-semibold'>Front-End Developer</h3>
                  <span className='inline-block text-[14px] mb-4'>Self-Employed</span>
                  <div className='text-[14px]'>
                    <i className='uil uil-calendar-alt mr-2'></i>
                    2023 - Present
                  </div>
                </div>

                <div>
                  <span className='qualification__rounder
                  inline-block w-[13px] h-[13px] bg-gray-500 rounded-[50%]'></span>
                  <span className='qualification__line
                  block w-[1px] h-full bg-gray-500 translate-x-[6px] -translate-y-[7px]'></span>
                </div>
              </div>

              <div className='qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-2 sm:gap-x-6 mb-3 sm:mb-0'>
                <div></div>

                <div>
                  <span className='qualification__rounder
                  inline-block w-[13px] h-[13px] bg-gray-500 rounded-[50%]'></span>
                  <span className='qualification__line
                  block w-[1px] h-full bg-gray-500 translate-x-[6px] -translate-y-[7px]'></span>
                </div>

                <div>
                  <h3 className='text-gray-800 text-[16px] font-semibold'>Back-End Developer</h3>
                  <span className='inline-block text-[14px] mb-4'>Self-Employed</span>
                  <div className='text-[14px]'>
                    <i className='uil uil-calendar-alt mr-2'></i>
                    2023 - Present
                  </div>
                </div>

              </div>

              <div className='qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-2 sm:gap-x-6'>
                
                <div>
                  <h3 className='text-gray-800 text-[16px] font-semibold'>Full Stack Developer</h3>
                  <span className='inline-block text-[14px] mb-4'>Self-Employed</span>
                  <div className='text-[14px]'>
                    <i className='uil uil-calendar-alt mr-2'></i>
                    2023 - Present
                  </div>
                </div>

                <div>
                  <span className='qualification__rounder
                  inline-block w-[13px] h-[13px] bg-gray-500 rounded-[50%]'></span>
                  <span className='qualification__line
                  block w-[1px] h-full bg-gray-500 translate-x-[6px] -translate-y-[7px]'></span>
                </div>
              </div>

            </div>
          </div>
        </div>
    </section>
  )
}

export default Qualification