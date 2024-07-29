import React, { useEffect, useState } from 'react'
import data from '../../assets/data/portfolioData'
import Modal from './Modal';

const Projects = () => {

  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems(prev => prev + 3);
  }

  const showModalHandler = id => {
    setShowModal(true);
    setActiveID(id);
  }

  useEffect(() => {

    if(selectTab === 'all') {
      setPortfolios(data);
    }

    if(selectTab === 'web-design') {
      const filteredData = data.filter(item => item.category === 'Web Design');
      setPortfolios(filteredData);
    }

    if(selectTab === 'web-app') {
      const filteredData = data.filter(item => item.category === 'Web App');
      setPortfolios(filteredData);
    }
  }, [selectTab])

  return (
    <div id='projects'>
        <div className='max-w-[1170px] px-6 lg:px-[60px] m-auto'>
          <div className='flex items-center justify-between flex-wrap '>
            <div className='mb-7 sm:mb-0 mt-2'>
              <h3 className='text-gray-800 text-[32px] font-semibold'>
                My recent projects
              </h3>
            </div>

            <div className='flex gap-3 mt-2'>
              <button className = {selectTab === 'all' ? `text-white border border-solid
              border-black py-2 px-4 rounded-[8px] bg-[#193256] transition-all duration-[300ms]` : 
              `text-gray-800 border border-solid
              border-black py-2 px-4 rounded-[8px] transition-all duration-[300ms]`}
              // className='text-gray-800 border border-solid
              // border-black py-2 px-4 rounded-[8px]'
              onClick={() => setSelectTab('all')}>
                All
              </button>

              <button className = {selectTab === 'web-design' ? `text-white border border-solid
              border-black py-2 px-4 rounded-[8px] bg-[#193256] transition-all duration-[300ms]` : 
              `text-gray-800 border border-solid
              border-black py-2 px-4 rounded-[8px] transition-all duration-[300ms]`}
              onClick={() => setSelectTab('web-design')}>
                Web Design
              </button>
              
              <button className = {selectTab === 'web-app' ? `text-white border border-solid
              border-black py-2 px-4 rounded-[8px] bg-[#193256] transition-all duration-[300ms]` : 
              `text-gray-800 border border-solid
              border-black py-2 px-4 rounded-[8px] transition-all duration-[300ms]`}
              onClick={() => setSelectTab('web-app')}>
                Web App
              </button>
            </div>
          </div>

          <div className='flex items-center gap-y-4 gap-3 xl:gap-4 flex-wrap mt-5'>
            {portfolios?.slice(0, nextItems).map((portfolio, index) => (
              <div className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%]
              relative z-[1]' key={index}
              data-aos="fade-zoom-in" data-aos-delay="50" data-aos-duration="1200">
                <figure>
                  <img className='rounded-[8px]' src={portfolio.imgUrl} alt={portfolio.title} />
                </figure>
                
                <div className='w-full h-full bg-[#8873ef] bg-opacity-40 
                absolute top-0 left-0 z-[5] hidden group-hover:block '>
                  <div className='w-full h-full flex items-center justify-center'>
                    <button className='click-btn btn-style1'
                    // className='text-white bg-[#081e21] hover:bg-[#193256]
                    // py-2 px-4 rounded-[8px] font-medium ease-in duration-200'
                    onClick={() => showModalHandler(portfolio.id)}>See Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-center'>
            {nextItems < portfolios.length && data.length > 6 && (
              <button 
              className='click-btn btn-style3 font-semibold'
              // className='text-white bg-[#081e21] hover:bg-[#193256]
              // py-2 px-4 rounded-[8px] font-medium ease-in duration-200'
              onClick={loadMoreHandler}>
                Load More
              </button>
            )}          
          </div>
        </div>

        {showModal && <Modal setShowModal={setShowModal} activeID={activeID} /> }
    </div>
  )
}

export default Projects