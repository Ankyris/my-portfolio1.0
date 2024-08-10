import React from 'react'
import aboutImg from '../../assets/about.png'
import { Info } from './Info'

export default function About() {
  return (
    <section className='overflow-x-hidden container px-4' id='about'>
        
        <h2 className='text-center text-[36px] text-gray-800' data-aos="fade-down" data-aos-duration="1300" data-aos-delay="200">About Me</h2>
        <span className='block text-center text-[16px] mb-14 font-medium' data-aos="fade-down" data-aos-duration="1000">My Introduction</span>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center gap-x-16 max-w-[968px] mx-auto'>
          <img src={aboutImg} alt='about image' className='w-[350px] h-[350px] object-cover rounded-3xl justify-self-center border-solid border-blue-700' 
          data-aos="fade-right" data-aos-duration="1200"/>

          <div className='flex flex-col items-center lg:block' data-aos="fade-left" data-aos-duration="1200">
            <Info />

            <p className='text-center lg:text-start py-0 px-4 lg:pl-0 lg:pr-[3.5rem] transition duration-[3000ms] ease-in mb-11 md:line-clamp-3 hover:line-clamp-none '>
              Hi, I am Aung Khant Kyaw, a 22-year-old software engineering student from Myanmar, 
              who is currently pursuing my Pearson Level 5 Higher Diploma in Computer Science at Lithan EduClassS University.
            </p>

            {/* <a download="" href="/Project.pdf" className='inline-flex items-center justify-center gap-3 px-8
             py-5 rounded-xl text-white bg-gray-800
             hover:shadow-2xl hover:shadow-gray-800/50'>
              Download CV
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                  fill="#fff"
                ></path>
                <path
                  d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                  fill="#fff"
                ></path>
                <path
                  d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                  fill="#fff"
                ></path>
                <path
                  d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                  fill="#fff"
                ></path>
              </svg>
            </a> */}

            <div className='group w-[197px]'>
              <a download="" href="/AungKhantKyaw-Resume.pdf" className='inline-flex items-center justify-center gap-3 px-8
              py-5 rounded-xl text-white bg-gray-800 
              shadow-[2px_2px_8px_rgba(0,0,0,0.2)]'>
                Download CV
                <svg
                  class="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                    fill="#fff"
                  ></path>
                </svg>
              </a>
              <p className='bg-gray-600 block h-[40px] w-[180px] mt-[-50px] mr-0 mb-0 ml-[10px]
              text-center text-[#eee] absolute z-[-1] 
              transition-[margin] duration-[500ms] [transition-timing-function:cubic-bezier(0.6,-0.28,0.74,0.05)]
              shadow-[2px_2px_8px_rgba(0,0,0,0.2)] rounded-[13px]
              group-hover:mt-[-95px] group-hover:mr-0 
              group-hover:mb-0 group-hover:ml-[10px]
              text-[14px] leading-[35px] group-hover:leading-[35px]'>
                Filename: AungCV.pdf
              </p>
              <p className='bg-gray-600 block h-[40px] w-[180px] mt-[-50px] mr-0 mb-0 ml-[10px]
              text-center text-[#eee] absolute z-[-1] 
              transition-[margin] duration-[500ms] [transition-timing-function:cubic-bezier(0.6,-0.28,0.74,0.05)]
              shadow-[2px_2px_8px_rgba(0,0,0,0.2)] rounded-[13px]
              group-hover:mt-[-10px] group-hover:mr-0 
              group-hover:mb-0 group-hover:ml-[10px]
              text-[14px] leading-[45px]'>
                Size: 127 KB
              </p>
            </div>   

          </div>
        </div>
    </section>
  )
}
