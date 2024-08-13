import React from 'react'
import { FaJava, FaNode } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql, SiSpring } from 'react-icons/si'

export const Backend = () => {
  return (
    <div className='bg-white border-2 border-solid border-[rgba(0,_0,_0,_0.2)]
    py-8 px-8 md:px-16 rounded-[20px] transition duration-[200ms] ease-[ease]
    hover:bg-slate-50 hover:shadow-lg hover:border-[rgba(0,_0,_0,_0.4)] hover:scale-105'>
      <h3 className='text-[22px] font-semibold text-center mb-6'>Backend Development</h3>

      <div className='flex justify-center sm:gap-x-16
      gap-x-10'>
        <div className='grid items-start gap-y-6'>
          <div className='flex gap-x-2'>
            <i className='bx bxs-badge-check text-[16px] text-red-600'></i>

            <div>
              <h3 className='sm:text-[18px] leading-[18px] font-medium
              text-[16px]'>Java</h3>
              <span className='text-[14px] sm:text-[16px]'>Intermediate</span>
            </div>

            <FaJava className='hidden sm:block ml-3' size="2em" color="#007396" />
          </div>

          <div className='flex gap-x-2'>
            <i className='bx bxs-badge-check text-[16px] text-red-600'></i>

            <div>
              <h3 className='sm:text-[18px] leading-[18px] font-semibold
              text-[16px]'>Node.js</h3>
              <span className='text-[14px] sm:text-[16px]'>Intermediate</span>
            </div>

            <FaNode className='hidden sm:block ml-3' size="2em" color="#339933" />
          </div>

          <div className='flex gap-x-2'>
            <i className='bx bxs-badge-check text-[16px] text-red-600'></i>

            <div>
              <h3 className='sm:text-[18px] leading-[18px] font-semibold
              text-[16px]'>SpringBoot</h3>
              <span className='text-[14px] sm:text-[16px]'>Basic</span>
            </div>

            <SiSpring className='hidden sm:block ml-3' size="2em" color="#6DB33F" />
          </div>
        </div>

        <div className='grid items-start gap-y-6'>

          <div className='flex gap-x-2'>
            <i className='bx bxs-badge-check text-[16px] text-red-600'></i>

            <div>
              <h3 className='sm:text-[18px] leading-[18px] font-semibold
              text-[16px]'>Express.js</h3>
              <span className='text-[14px] sm:text-[16px]'>Intermediate</span>
            </div>

            <SiExpress className='hidden sm:block ml-3' size="2em" color="#000000" />
          </div>

          <div className='flex gap-x-2'>
            <i className='bx bxs-badge-check text-[16px] text-red-600'></i>

            <div>
              <h3 className='sm:text-[18px] leading-[18px] font-semibold
              text-[16px]'>MySQL</h3>
              <span className='text-[14px] sm:text-[16px]'>Intermediate</span>
            </div>

            <SiMysql className='hidden sm:block ml-3' size="2em" color="#00758F" />
          </div>

          <div className='flex gap-x-2'>
            <i className='bx bxs-badge-check text-[16px] text-red-600'></i>

            <div>
              <h3 className='sm:text-[18px] leading-[18px] font-semibold
              text-[16px]'>MongoDB</h3>
              <span className='text-[14px] sm:text-[16px]'>Intermediate</span>
            </div>

            <SiMongodb className='hidden sm:block ml-3' size="2em" color="#47A248" />
          </div>

        </div>
      </div>
    </div>
  )
}
