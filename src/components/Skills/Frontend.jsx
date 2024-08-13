import React from 'react'
import { SiCss3, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

export const Frontend = () => {
  return (
    <div className='bg-white border-2 border-solid border-[rgba(0,_0,_0,_0.2)]
    py-8 px-8 md:px-16 rounded-[20px] transition duration-[200ms] ease-[ease]
    hover:bg-slate-50 hover:shadow-lg hover:border-[rgba(0,_0,_0,_0.4)] hover:scale-105'>
      <h3 className='text-[22px] font-semibold text-center mb-6'>Frontend Development</h3>

      <div className='flex justify-center sm:gap-x-16
      gap-x-10'>
        <div className='grid items-start gap-y-6'>     

          <div className='flex gap-x-2'>
            <i className='bx bxs-badge-check text-[16px] text-blue-700'></i>

            <div>
              <h3 className='sm:text-[18px] leading-[18px] font-semibold
              text-[16px]'>CSS</h3>
              <span className='text-[14px] sm:text-[16px]'>Intermediate</span>
            </div>

            <SiCss3 className='hidden sm:block ml-3' size="2em" color="#1572B6" />
          </div>

          <div className='flex gap-x-2'>
            <i className='bx bxs-badge-check text-[16px] text-blue-700'></i>

            <div>
              <h3 className='sm:text-[18px] leading-[18px] font-semibold
              text-[16px]'>JavaScript</h3>
              <span className='text-[14px] sm:text-[16px]'>Intermediate</span>
            </div>

            <SiJavascript className='hidden sm:block ml-3' size="2em" color="#F7DF1E" />
          </div>

          <div className='flex gap-x-2'>
            <i className='bx bxs-badge-check text-[16px] text-blue-700'></i>

            <div>
              <h3 className='sm:text-[18px] leading-[18px] font-semibold
              text-[16px]'>Tailwind</h3>
              <span className='text-[14px] sm:text-[16px]'>Advanced</span>
            </div>

            <SiTailwindcss className='hidden sm:block ml-auto' size="2em" color="#38B2AC" />
          </div>

        </div>

        <div className='grid items-start gap-y-6'>  

          <div className='flex gap-x-2'>
            <i className='bx bxs-badge-check text-[16px] text-blue-700'></i>

            <div>
              <h3 className='sm:text-[18px] leading-[18px] font-semibold
              text-[16px]'>React</h3>
              <span className='text-[14px] sm:text-[16px]'>Advanced</span>
            </div>

            <SiReact className='hidden sm:block ml-auto' size="2em" color="#61DAFB" />
          </div>

          <div className='flex gap-x-2'>
            <i className='bx bxs-badge-check text-[16px] text-blue-700'></i>

            <div>
              <h3 className='sm:text-[18px] leading-[18px] font-semibold
              text-[16px]'>TypeScript</h3>
              <span className='text-[14px] sm:text-[16px]'>Intermediate</span>
            </div>

            <SiTypescript className='hidden sm:block ml-3' size="2em" color="#3178C6" />
          </div>

          <div className='flex gap-x-2'>
            <i className='bx bxs-badge-check text-[16px] text-blue-700'></i>

            <div>
              <h3 className='sm:text-[18px] leading-[18px] font-semibold
              text-[16px]'>Next.js</h3>
              <span className='text-[14px] sm:text-[16px]'>Intermediate</span>
            </div>

            <SiNextdotjs className='hidden sm:block ml-3' size="2em" color="#000000" />
          </div>
        </div>
      </div>
    </div>
  )
}
