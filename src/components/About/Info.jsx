import React from 'react'

export const Info = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-[repeat(3,_140px)] gap-2 mb-8'>
      <div className='bg-white border border-solid border-[rgba(0,_0,_0,_0.1)]
      rounded-xl py-4 px-5 text-center transition duration-[300ms] ease-[ease] cursor-pointer
      hover:bg-amber-100 hover:shadow-lg'>
        <i className='bx bxs-award text-[24px] text-amber-500 mb-2'></i>
        <h3 className='text-[14px] font-bold'>Experience</h3>
        <span className='text-[13px]'>2+ Years</span>
      </div>

      <div className='bg-white border border-solid border-[rgba(0,_0,_0,_0.1)]
      rounded-xl py-4 px-5 text-center transition duration-[300ms] ease-[ease] cursor-pointer
      hover:bg-rose-100 hover:shadow-lg '>
        <i className='bx bxs-briefcase-alt text-[24px] text-rose-800 mb-2'></i>
        <h3 className='text-[14px] font-bold'>Completed</h3>
        <span className='text-[13px]' >10+ Projects</span>
      </div>

      <div className='bg-white border border-solid border-[rgba(0,_0,_0,_0.1)]
      rounded-xl py-4 px-5 text-center transition duration-[300ms] ease-[ease] cursor-pointer
      hover:bg-teal-100 hover:shadow-lg'>
        <i className='bx bx-desktop text-[24px] text-teal-800 mb-2'></i>

        <h3 className='text-[14px] font-bold'>Available</h3>
        <span className='text-[13px]' >Online 24/7</span>
      </div>
    </div>
  )
}
