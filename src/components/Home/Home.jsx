import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import profileImg from '../../assets/home.jpg'
import './home.css';

export default function Home() {

  const animatedText = useRef(null);

  useEffect(() => {
    const typed = new Typed(animatedText.current, {
      strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
      typeSpeed: 80,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };

  }, []);

  function openLink() {
    window.open('https://youtu.be/Wj0Muk3AHHU', '_blank');
  }

  return (
    <section id='home' className='flex flex-col lg:flex-row justify-around items-center container xl:pt-8 px-6 md:px-12 lg:px-[80px]'>
        <div className='text-center lg:text-left'>
            <h3 className='flex items-center justify-center lg:justify-start gap-1 text-2xl lg:text-[32px] font-[700] mb-2'
            data-aos="fade-right" data-aos-duration="1500">
              Hey There! <span className='wave'>👋</span>
            </h3>
            <h1 className='text-4xl lg:text-[56px] font-[700] leading-tight lg:leading-[60px]'
            data-aos="fade-up" data-aos-duration="1500">
              Aung Khant Kyaw
            </h1>
            <h3 className='text-xl sm:text-2xl lg:text-[32px] font-[700] mb-5 mt-3 lg:mb-[20px]'
            data-aos="fade-up" data-aos-duration="1500">
              And, I am a <span className='text-sky-600' ref={animatedText}>Fullstack Developer</span>
            </h3>
            <p className='text-base lg:text-[20px] leading-8' data-aos="fade-up" data-aos-duration="1800" data-aos-delay="200">
              With a passion for creating user-friendly and dynamic web applications, 
              <br className='hidden lg:block'/>I specialize in both <span className='font-bold '>front-end</span> and <span className='font-bold '>back-end</span> development.
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quo neque esse consectetur itaque facilis vel est harum obcaecati. */}
            </p>
            <div className='flex justify-center lg:justify-start gap-5 mt-6 mb-8 text-xl lg:text-[26px]' data-aos="fade-left" data-aos-duration="1500">
              <ul className="wrapper">
                <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <span><a href='https://www.facebook.com/aungkhantkyaw1505?mibextid=ZbWKwL' target='_blank'><i className="uil uil-facebook-f"></i></a></span>
                </li>
                <li className="icon linkedin">
                  <span className="tooltip">Linkedin</span>
                  <span><a href='https://www.linkedin.com/in/aung-khant-kyaw1505' target='_blank'><i className="uil uil-linkedin"></i></a></span>
                </li>
                {/* <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <span><i className="uil uil-instagram"></i></span>
                </li> */}
                <li className="icon github">
                  <span className="tooltip">Github</span>
                  <span><a href='https://github.com/Ankyris' target='_blank'><i className="uil uil-github"></i></a></span>
                </li>
                {/* <li className="icon youtube">
                  <span className="tooltip">Youtube</span>
                  <span><i className="uil uil-youtube"></i></span>
                </li> */}
              </ul>
            </div>
            {/* <div className='flex gap-5 mt-6 mb-8 text-[26px]'>
                <a className='w-10 h-10 flex items-center justify-center rounded-lg 
                bg-white shadow-md shadow-gray-200 group transition-all duration-300 border-2' href='#'>
                  <svg class="transition-all duration-300 group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                    <path d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z" fill="#337FFF"/>
                  </svg>
                </a>
                <a className='w-10 h-10 flex items-center justify-center rounded-lg 
                bg-white shadow-md shadow-gray-200 group transition-all duration-300 border-2' href='#'>
                  <svg class="transition-all duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.88401 18.6533C5.58404 18.4526 5.32587 18.1975 5.0239 17.8369C4.91473 17.7065 4.47283 17.1524 4.55811 17.2583C4.09533 16.6833 3.80296 16.417 3.50156 16.3089C2.9817 16.1225 2.7114 15.5499 2.89784 15.0301C3.08428 14.5102 3.65685 14.2399 4.17672 14.4263C4.92936 14.6963 5.43847 15.1611 6.12425 16.0143C6.03025 15.8974 6.46364 16.441 6.55731 16.5529C6.74784 16.7804 6.88732 16.9182 6.99629 16.9911C7.20118 17.1283 7.58451 17.1874 8.14709 17.1311C8.17065 16.7489 8.24136 16.3783 8.34919 16.0358C5.38097 15.3104 3.70116 13.3952 3.70116 9.63971C3.70116 8.40085 4.0704 7.28393 4.75917 6.3478C4.5415 5.45392 4.57433 4.37284 5.06092 3.15636C5.1725 2.87739 5.40361 2.66338 5.69031 2.57352C5.77242 2.54973 5.81791 2.53915 5.89878 2.52673C6.70167 2.40343 7.83573 2.69705 9.31449 3.62336C10.181 3.41879 11.0885 3.315
                   12.0012 3.315C12.9129 3.315 13.8196 3.4186 14.6854 3.62277C16.1619 2.69 17.2986 2.39649 18.1072 2.52651C18.1919 2.54013 18.2645 2.55783 18.3249 2.57766C18.6059 2.66991 18.8316 2.88179 18.9414 3.15636C19.4279 4.37256 19.4608 5.45344 19.2433 6.3472C19.9342 7.28337 20.3012 8.39208 20.3012 9.63971C20.3012 13.3968 18.627 15.3048 15.6588 16.032C15.7837 16.447 15.8496 16.9105 15.8496 17.4121C15.8496 18.0765 15.8471 18.711 15.8424 19.4225C15.8412 19.6127 15.8397 19.8159 15.8375 20.1281C16.2129 20.2109 16.5229 20.5077 16.6031 20.9089C16.7114 21.4504 16.3602 21.9773 15.8186 22.0856C14.6794 22.3134 13.8353 21.5538 13.8353 20.5611C13.8353 20.4708 13.836 20.3417 13.8375 20.1145C13.8398 19.8015 13.8412 19.599 13.8425 19.4094C13.8471 18.7019 13.8496 18.0716 13.8496 17.4121C13.8496 16.7148 13.6664 16.2602 13.4237 16.051C12.7627 15.4812 13.0977 14.3973 13.965 14.2999C16.9314 13.9666 18.3012 12.8177 
                   18.3012 9.63971C18.3012 8.68508 17.9893 7.89571 17.3881 7.23559C17.1301 6.95233 17.0567 6.54659 17.199 6.19087C17.3647 5.77663 17.4354 5.23384 17.2941 4.57702L17.2847 4.57968C16.7928 4.71886 16.1744 5.0198 15.4261 5.5285C15.182 5.69438 14.8772 5.74401 14.5932 5.66413C13.7729 5.43343 12.8913 5.315 12.0012 5.315C11.111 5.315 10.2294 5.43343 9.40916 5.66413C9.12662 5.74359 8.82344 5.69492 8.57997 5.53101C7.8274 5.02439 7.2056 4.72379 6.71079 4.58376C6.56735 5.23696 6.63814 5.77782 6.80336 6.19087C6.94565 6.54659 6.87219 6.95233 6.61423 7.23559C6.01715 7.8912 5.70116 8.69376 5.70116 9.63971C5.70116 12.8116 7.07225 13.9683 10.023 14.2999C10.8883 14.3971 11.2246 15.4769 10.5675 16.0482C10.3751 16.2156 10.1384 16.7802 10.1384 17.4121V20.5611C10.1384 21.5474 9.30356 22.2869 8.17878 22.09C7.63476 21.9948 7.27093 21.4766 7.36613 20.9326C7.43827 20.5204 7.75331 20.2116 8.13841 20.1276V19.1381C7.22829 19.1994 6.47656 19.0498 5.88401 18.6533Z">
                    </path>
                  </svg>
                </a>

                <a className='w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md
                shadow-gray-200 group transition-all duration-300' href='#'>
                  <svg class="rounded-md transition-all duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6975 11C12.6561 11 11 12.6057 11 14.5838V57.4474C11 59.4257 12.6563 61.03 14.6975 61.03H57.3325C59.3747 61.03 61.03 59.4255 61.03 57.4468V14.5838C61.03 12.6057 59.3747 11 57.3325 11H14.6975ZM26.2032 30.345V52.8686H18.7167V30.345H26.2032ZM26.6967 23.3793C26.6967 25.5407 25.0717 27.2703 22.4615 27.2703L22.4609 27.2701H22.4124C19.8998 27.2701 18.2754 25.5405 18.2754 23.3791C18.2754 21.1686 19.9489 19.4873 22.5111 19.4873C25.0717 19.4873 26.6478 21.1686 26.6967 23.3793ZM37.833 52.8686H30.3471L30.3469 52.8694C30.3469 52.8694 30.4452 32.4588 30.3475 30.3458H37.8336V33.5339C38.8288 31.9995 40.6098 29.8169 44.5808 29.8169C49.5062 29.8169 53.1991 33.0363 53.1991 39.9543V52.8686H45.7133V40.8204C45.7133 37.7922 44.6293 35.7269 41.921 35.7269C39.8524 35.7269 38.6206 37.1198 38.0796 38.4653C37.8819 38.9455 37.833 39.6195 37.833 40.2918V52.8686Z" fill="#006699"/>
                  </svg>
                </a>
            </div> */}
            {/* <a href='#' className='py-[10px] px-[28px] bg-sky-400
            rounded-full shadow-xl text-[18px] text-white leading-[10px]
            font-[600] hover:shadow-none ease-in duration-300'>
              Download CV <i className="ri-file-text-line ml-1"></i>
            </a> */}

            {/* <button className='flex items-center gap-2 font-[600] border
             border-solid border-black bg-black text-white py-2 px-4 rounded-[8px] max-h-[40px]
             hover:bg-white hover:text-black hover:font-[500] ease-in duration-300'>
              <i className="ri-send-plane-fill"></i> Let's Talk
            </button> */}

            <button className='main-button learn-more' onClick={openLink}>
              <span className='circle'>
                <span className=''><i className="uil uil-youtube icon arrow"></i></span>
              </span>
              <span className='button-text'>
                <a target='_blank' href='https://youtu.be/Wj0Muk3AHHU'>Intro Video</a>
              </span>
            </button>
        </div>

        <div className='mt-8 lg:mt-0'>
            <img className='w-[80vw] md:w-[60vw] lg:w-[30vw] mx-auto lg:mx-0 rounded-lg' src={profileImg} alt='profile image'/>
        </div>
    </section>
  )
}
