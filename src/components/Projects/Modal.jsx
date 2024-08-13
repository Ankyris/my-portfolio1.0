import React from 'react'
import portfolios from '../../assets/data/portfolioData';
import './modal.css';

const Modal = ({ activeID, setShowModal }) => {

    const portfolio = portfolios.find(p => p.id === activeID);

    return (
        <div className='w-full h-full fixed top-0 left-0 z-[9999]
        bg-[#081e21] bg-opacity-40'>
            <div className='w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-[1002]
            bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5 
            max-h-[99%] overflow-y-auto'>
                <div>
                    <figure>
                        <img className='rounded-[8px]' src={portfolio.imgUrl} alt={portfolio.title} />
                    </figure>
                </div>

                <div>
                    <h2 className='text-2xl text-gray-800 font-bold my-5'>
                        {portfolio.title}
                    </h2>

                    <p className='text-[15px] leading-7 text-[#193256]'>
                        {portfolio.description}
                    </p>

                    <div className='mt-5 flex items-center gap-3 flex-wrap'>
                        <h4 className='text-gray-800 text-[18px] font-bold'>
                            Technologies
                        </h4>

                        {portfolio.technologies.map((item, index) => (
                            <span key={index}
                            className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0'>
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className='flex items-center'>
                        <a href={portfolio.siteUrl} target='_blank'>
                            <button className='click-btn btn-style2'>
                                Live Site
                            </button>
                        </a>

                        <a href={portfolio.githbUrl} target='_blank'>
                            <button className='click-btn btn-style22'>
                                GitHub Link
                            </button>
                        </a>
                    </div>

                    {/* <a href={portfolio.siteUrl} target='_blank'>
                        <button className='click-btn btn-style2'
                        // className='bg-[#8873ef] text-white py-2 px-4 mt-5
                        // rounded-[8px] font-medium hover:bg-[#081e21] ease-in duration-300'
                        >
                            Live Site
                        </button>
                    </a> */}
                </div>

                <button className='w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem]
                right-[1.7rem] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer'
                onClick={() => setShowModal(false)}>
                    <i className="uil uil-times"></i>
                </button>
            </div>
        </div>
    )
}

export default Modal