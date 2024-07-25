import React, { useEffect, useRef, useState } from 'react';
import './header.css';
import glitchSound from '../../assets/glitch.wav';

export default function Header() {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const mouseclick = useRef(new Audio());
  const [activeNav, setActiveNav] = useState("#home");

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()
    mouseclick.current.src = glitchSound;

    return window.removeEventListener('scroll', stickyHeaderFunc)
  }, [])

  const handleClick = e => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    setActiveNav(targetAttr);

    window.scrollTo({
      top: location - 80,
      left: 0,
    })
  };

  const toogleMenu = () => menuRef.current.classList.toggle('show__menu');

  const handleMouseDown = () => {
    mouseclick.current.play();
  };

  return (
    <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center '>
      <div className='container px-6 sm:px-[60px]'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center gap-[10px]'>
            <a onClick={handleClick} href='#home' className='w-[35px] h-[35px] bg-amber-900 text-white text-[18px] font-[500] 
            rounded-full flex items-center justify-center'>
              A
            </a>

            <div className='leading-[20px]'>
              <h2 className='text-xl font-[700]'>Aung</h2>
              <p className='text-[18px] font-[500]'>protfolio</p>
            </div>
          </div>
          {/* Logo End */}

          {/* Menu Start */}
          <div className='menu' ref={menuRef} onClick={toogleMenu}>
            <ul className='flex items-center gap-10 text-lg font-[500]'>
              <li><a onClick={handleClick} href='#about' className= {activeNav === '#about' ? 'text-amber-800' : 'hover:text-amber-800'} >About</a></li>
              <li><a onClick={handleClick} href='#skills' className= {activeNav === '#skills' ? 'text-amber-800' : 'hover:text-amber-800'} >Skills</a></li>
              <li><a onClick={handleClick} href='#services' className= {activeNav === '#services' ? 'text-amber-800' : 'hover:text-amber-800'} >Services</a></li>
              <li><a onClick={handleClick} href='#qualification' className= {activeNav === '#qualification' ? 'text-amber-800' : 'hover:text-amber-800'}>Qualification</a></li>
              <li><a onClick={handleClick} href='#projects' className= {activeNav === '#projects' ? 'text-amber-800' : 'hover:text-amber-800'} >Projects</a></li>
            </ul>
          </div>
          {/* Menu End */}

          {/* Menu Right */}
          <div className='flex items-center gap-4'>
            <button onMouseDown={handleMouseDown} className="button-glitch hidden sm:block cursor-not-allowed">
              <a onClick={handleClick} href='#contact'>Contact Me</a>
              
              <i className="bx bxs-user ml-1"></i>
            </button>

            <a onClick={handleClick} href='#contact' className='sm:hidden flex items-center gap-2 font-[600] border
             border-solid border-black py-2 px-4 rounded-[8px] max-h-[40px]
             hover:bg-black hover:text-white hover:font-[500] ease-in duration-300'>
              <i className="ri-send-plane-fill"></i> Let's Talk
            </a>

            <span onClick={toogleMenu} className='text-2xl md:hidden cursor-pointer'>
              <i className="ri-menu-line"></i>
            </span>
          </div>

          {/* <div className='flex items-center gap-4'>
            <a href='#contact' className='flex items-center gap-2 font-[600] border
             border-solid border-black py-2 px-4 rounded-[8px] max-h-[40px]
             hover:bg-black hover:text-white hover:font-[500] ease-in duration-300'>
              <i className="ri-send-plane-fill"></i> Let's Talk
            </a>

            <span className='text-2xl md:hidden cursor-pointer'>
              <i className="ri-menu-line"></i>
            </span>
          </div> */}
          {/* Menu Right End */}
        </div>
      </div>
    </header>
  )
}
