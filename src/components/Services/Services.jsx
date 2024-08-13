import React, { useState } from 'react'

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className='overflow-x-hidden container px-4' id='services'>
        <h2 className='text-center text-[36px] text-gray-800' data-aos="fade-right" data-aos-duration="1200">Services</h2>
        <span className='block text-center text-[16px] mb-14 font-medium' data-aos="fade-left" data-aos-duration="1000">What I do</span>

        <div className='grid gap-8 grid-cols-[repeat(1,290px)] sm:grid-cols-2 lg:grid-cols-[repeat(3,270px)] justify-center gap-x-7
        max-w-[968px] mx-auto'>
          <div className='relative border border-solid border-[rgba(0,0,0,0.3)] transition duration-500 ease-[ease]
          bg-white px-8 pt-24 pb-10 rounded-lg hover:bg-blue-50 hover:border-[rgba(0,0,0,0.5)] hover:shadow-xl hover:shadow-blue-300'>
            <div>
              <i className="uil uil-arrow block text-[32px] text-blue-600 mb-4"></i>
              <h3 className='text-blue-600 font-semibold text-[20px] mb-4'>
                Front-End <br/> Development
              </h3>
            </div>

            <span className='text-blue-600 text-[15px]
            inline-flex items-center gap-x-1 cursor-pointer
            group'
            onClick={() => toggleTab(1)}>
              View More 
              <i className='uil uil-arrow-right text-[17px] 
              transition duration-300 group-hover:translate-x-[0.25rem]'></i>
            </span>

            <div className={toggleState === 1 ? `fixed top-0 left-0 right-0 bottom-0 
            bg-[rgba(0,0,0,0.5)] z-[1000] flex justify-center items-center py-0 px-4
            transition duration-300 opacity-100 visible` : 
            `fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-[1000]
            flex justify-center items-center py-0 px-4 opacity-0 invisible transition duration-300`} 
            >
              <div className='w-full max-w-[500px] relative bg-blue-800 text-white
              py-[30px] px-10 sm:pt-[30px] sm:pb-10 rounded-[24px]'>
                <i onClick={() => toggleTab(0)} className='uil uil-times
                absolute top-6 right-6 text-[24px] text-white cursor-pointer'></i>

                <h3 className='text-white font-semibold text-center
                text-[18px] sm:text-[20px] mb-4'>Front-End Development</h3>
                <p className='text-center text-[15px] sm:text-[16px] py-0 px-4 sm:px-14 mb-8'>
                  Involve creating the part of a web
                  application that users interact with directly.
                </p>

                <ul className='grid gap-6 gap-y-3'>
                  <li className='flex items-center gap-x-2'>
                    <i className='bx bxs-check-circle
                     text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I use HTML to structure the content on the web page.
                    </p>
                  </li>

                  <li className='flex items-center gap-x-2'>
                    <i className='bx bxs-check-circle
                    text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I style HTML elemnts to make pages visually appealing.
                    </p>
                  </li>

                  <li className='flex items-center gap-x-2'>
                    <i className='bx bxs-check-circle
                     text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I add interactivity to the page with JavaScript.
                    </p>
                  </li>

                  <li className='flex items-center gap-x-2'>
                    <i className='bx bxs-check-circle
                     text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I use Tailwind CSS framework for consistent design.
                    </p>
                  </li>

                  <li className='flex items-center gap-x-2'>
                    <i className='bx bxs-check-circle
                     text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I use React JS framework for building complex UIs.
                    </p>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div className='relative border border-solid border-[rgba(0,0,0,0.3)] transition duration-500 ease-[ease]
          bg-white pt-24 px-8 pb-10 rounded-lg hover:bg-emerald-50 hover:border-[rgba(0,0,0,0.5)] hover:shadow-xl hover:shadow-emerald-300'>
            <div>
              <i className="uil uil-database block text-[32px] text-emerald-600 mb-4"></i>
              <h3 className='text-emerald-600 font-semibold text-[20px] mb-4'>
                Back-End <br/> Development
              </h3>
            </div>

            <span className='text-emerald-600 text-[15px]
            inline-flex items-center gap-x-1 cursor-pointer
            group'
            onClick={() => toggleTab(2)}>
              View More 
              <i className='uil uil-arrow-right text-[17px] 
              transition duration-300 group-hover:translate-x-[0.25rem]'></i>
            </span>

            <div className={toggleState === 2 ? `fixed top-0 left-0 right-0 bottom-0 
            bg-[rgba(0,0,0,0.5)] z-[1000] flex justify-center items-center py-0 px-4
            transition duration-300 opacity-100 visible` : 
            `fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-[1000]
            flex justify-center items-center py-0 px-4 opacity-0 invisible transition duration-300`}>
              
              <div className='w-full max-w-[500px] relative bg-emerald-700 text-white
              py-[30px] px-10 sm:pt-[23px] sm:pb-[25px] rounded-[24px]'>
                <i onClick={() => toggleTab(0)} className='uil uil-times
                absolute top-5 right-6 text-[24px] text-white cursor-pointer'></i>

                <h3 className='text-white font-bold text-center
                text-[18px] sm:text-[20px] mb-4'>Back-End Development</h3>
                <p className='text-center text-[15px] sm:text-[16px] py-0 px-4 sm:px-14 mb-8'>
                  Involve building and maintaining
                  the server-side components of a web application.
                </p>

                <ul className='grid gap-6 gap-y-3'>
                  <li className='flex items-center gap-x-2'>
                    <i className='bx bxs-check-circle
                   text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I use server-side languages such as Java and Node.js.
                    </p>
                  </li>

                  <li className='flex items-center gap-x-2'>
                    <i className='bx bxs-check-circle
                    text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I use Next.js for server-side rendering in React.
                    </p>
                  </li>

                  <li className='flex gap-x-2'>
                    <i className='bx bxs-check-circle
                   text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I use MySQL for SQL Databases, and MongoDB for NoSQL Databases.
                    </p>
                  </li>

                  <li className='flex items-center gap-x-2'>
                    <i className='bx bxs-check-circle
                    text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I use RESTful standards for building APIs.
                    </p>
                  </li>

                  <li className='flex gap-x-2'>
                    <i className='bx bxs-check-circle
                     text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I implement secure authentication and autorization with OAuth, and JWT.
                    </p>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div className='relative border border-solid border-[rgba(0,0,0,0.3)] transition duration-500 ease-[ease]
          bg-white pt-24 px-8 pb-10 rounded-lg hover:bg-pink-100 hover:border-[rgba(0,0,0,0.5)] hover:shadow-xl hover:shadow-pink-400'>
            <div>
              <i className="uil uil-web-grid block text-[32px] text-pink-800 mb-4"></i>
              <h3 className='text-pink-800 font-semibold text-[20px] mb-4'>
                Full Stack <br/> Solutions
              </h3>
            </div>

            <span className='text-pink-800 text-[15px]
            inline-flex items-center gap-x-1 cursor-pointer
            group'
            onClick={() => toggleTab(3)}>
              View More 
              <i className='uil uil-arrow-right text-[17px] 
              transition duration-300 group-hover:translate-x-[0.25rem]'></i>
            </span>

            <div className={toggleState === 3 ? `fixed top-0 left-0 right-0 bottom-0 
            bg-[rgba(0,0,0,0.5)] z-[1000] flex justify-center items-center py-0 px-4
            transition duration-300 opacity-100 visible` : 
            `fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-[1000]
            flex justify-center items-center py-0 px-4 opacity-0 invisible transition duration-300`}>
              <div className='w-full max-w-[500px] relative bg-pink-800 text-white
              py-[30px] px-10 sm:pt-[30px] sm:pb-[30px] rounded-[24px]'>
                
                <i onClick={() => toggleTab(0)} className='uil uil-times 
                absolute top-6 right-6 text-[24px] text-white cursor-pointer'></i>

                <h3 className='text-white font-bold text-center
                text-[18px] sm:text-[20px] mb-4'>Full Stack Development</h3>
                <p className='text-center text-[15px] sm:text-[16px] py-0 px-4 sm:px-14 mb-8'>
                  Involve working on both the front-end and back-end of web applications.
                </p>

                <ul className='grid gap-6 gap-y-3'>
                  <li className='flex gap-x-2'>
                    <i className='bx bxs-check-circle
                   text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I Implement interactive features and handle user inputs using React framework.
                    </p>
                  </li>

                  <li className='flex gap-x-2'>
                    <i className='bx bxs-check-circle
                    text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I use tools like Prisma ORM for database management.
                    </p>
                  </li>

                  <li className='flex gap-x-2'>
                    <i className='bx bxs-check-circle
                   text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I create APIs to handle data exchange between the server and client.
                    </p>
                  </li>

                  <li className='flex gap-x-2'>
                    <i className='bx bxs-check-circle
                   text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I connect the front-end with back-end services through APIs.
                    </p>
                  </li>

                  {/* <li className='flex gap-x-2'>
                    <i className='bx bxs-check-circle
                   text-[1.1rem]'></i>
                    <p className='text-[14px] sm:text-[16px]'>
                      I use Git for source code management and collaboration.
                    </p>
                  </li> */}

                </ul>
              </div>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Services