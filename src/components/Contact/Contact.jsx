import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const darkToast = () =>
    toast("received your email !", {
        icon: "📩",
        style: {
            borderRadius: "12px",
            background: "#1F2937",
            color: "#fff",
        },
        position: "bottom-right",
        duration: 6000,
    });

const Contact = () => {

    const form = useRef();
    const mouseclick = useRef(new Audio());

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs
        .sendForm('service_t5a7wvn', 'template_8wua6wa', form.current, {
            publicKey: '8IZ7iJqWOBKGOoPvM',
        })
        e.target.reset();
        darkToast();
    };

    const handleMouseDown = () => {
        mouseclick.current.play();
    };

    useEffect(() => {    
        mouseclick.current.src = "https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav";
    
    }, [])


  return (
    <section className='pt-8 sm:pt-2 overflow-x-hidden' id='contact'>
        
        <h2 className='text-center text-[36px] text-gray-800 '>Get in touch</h2>
        <span className='block text-center text-[16px] mb-1 font-medium'>Contact Me</span>

        <div className='contact__container container px-6 sm:px-[60px] grid
        grid-cols-1 gap-y-12 md:grid-cols-[repeat(2,_max-content)] justify-center gap-x-4 md:gap-x-12 lg:gap-x-24 pb-12'>
            <div className='contact__content' data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                <h3 className='contact__title
                text-center text-[16px] font-medium mb-6'>Talk to me</h3>

                <div className='contact__info grid gap-y-3 grid-cols-1 sm:grid-cols-[300px] justify-center'>
                    <div className='contact__card
                    bg-white border border-solid border-[rgba(0,_0,_0,_0.3)] p-4 rounded-xl text-center'>
                        <i className='bx bx-mail-send contact__card-icon
                        text-[32px] text-amber-600 mb-1'></i>
                        
                        <h3 className='contact__card-title text-[14px] font-medium'>Email</h3>
                        <span className='contact__card-data text-[14px] block mb-3'>aungkk1505@gmail.com</span>
                        
                        <a href='mailto:aungkk1505@gmail.com' className='contact__button
                        text-gray-500 inline-flex items-center justify-center gap-x-1
                        group'>
                            Email me
                            <i className='bx bx-right-arrow-alt contact__button-icon
                            text-[16px] transition duration-300
                            group-hover:translate-x-[0.25rem]'></i>
                        </a>
                    </div>

                    <div className='contact__card 
                    bg-white border border-solid border-[rgba(0,_0,_0,_0.3)] p-4 rounded-xl text-center'>
                        <i className='bx bxs-phone-call contact__card-icon
                        text-[32px] text-[#51C332] mb-1'></i>
                        
                        <h3 className='contact__card-title text-[14px] font-medium'>Phone Number</h3>
                        <span className='contact__card-data text-[14px] block mb-3'>+959 443 977 755</span>
                        
                        <a href='tel:+959443977755' className='contact__button text-gray-500 inline-flex items-center justify-center gap-x-1
                        group'>
                            Call me
                            <i className='bx bx-right-arrow-alt contact__button-icon
                            text-[16px] transition duration-300
                            group-hover:translate-x-[0.25rem]'></i>
                        </a>
                    </div>

                    <div className='contact__card 
                    bg-white border border-solid border-[rgba(0,_0,_0,_0.3)] p-4 rounded-xl text-center'>
                        <i className='bx bxl-messenger contact__card-icon
                        text-[32px] text-[#006AFF]'></i>
                        
                        <h3 className='contact__card-title
                        text-[14px] font-medium'>Messenger</h3>
                        <span className='contact__card-data text-[14px] block mb-3'>Aung Khant Kyaw</span>
                        
                        <a href='https://m.me/aungkhantkyaw1505' target='_blank' className='contact__button
                        text-gray-500 inline-flex items-center justify-center gap-x-1
                        group'>
                            Message me
                            <i className='bx bx-right-arrow-alt contact__button-icon
                            text-[16px] transition duration-300
                            group-hover:translate-x-[0.25rem]'></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className='contact__content' data-aos="fade-left" data-aos-duration="1200" data-aos-delay="100">
                <h3 className='contact__title
                text-center text-[16px] font-medium mb-6'>Write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className='contact__form w-full sm:w-[360px] mx-auto'>
                    <div className='contact__form-div relative mb-8 h-[64px]'>
                        <label className='contact__from-tag
                        absolute top-[-0.75rem] left-5 text-[13px] p-1
                        bg-white z-10'>Name</label>
                        <input required type='text' name='name' placeholder='Insert your name' 
                        className='contact__form-input absolute top-0 left-0 w-full h-full
                        border-2 border-solid border-[rgba(0,_0,_0,_0.3)] bg-none text-black
                        outline-none rounded-xl p-6 z-[1]' autoComplete='off'/>
                    </div>

                    <div className='contact__form-div relative mb-8 h-[64px]'>
                        <label className='contact__from-tag
                        absolute top-[-0.75rem] left-5 text-[13px] p-1
                        bg-white z-10'>Mail</label>
                        <input required type='email' name='email' placeholder='Insert your email' 
                        className='contact__form-input absolute top-0 left-0 w-full h-full
                        border-2 border-solid border-[rgba(0,_0,_0,_0.3)] bg-none text-black
                        outline-none rounded-xl p-6 z-[1]' />
                    </div>

                    <div className='contact__form-div relative mb-8 h-[10rem]'>
                        <label className='contact__from-tag
                        absolute top-[-0.75rem] left-5 text-[13px] p-1
                        bg-white z-10'>Project</label>
                        <textarea name='project' cols='30' rows='10' className='contact__from-input absolute top-0 left-0 w-full h-full
                        border-2 border-solid border-[rgba(0,_0,_0,_0.3)] bg-none text-black
                        outline-none rounded-xl p-6 z-[1] resize-none' placeholder='Write your project'></textarea>
                    </div>

                    <button onMouseDown={handleMouseDown} className='bg-gray-800 text-white py-5 px-8 rounded-2xl font-medium
                    inline-flex items-center relative transition-all duration-[0.35s]
                    before:w-full before:h-4 before:absolute before:left-0 before:bottom-[-1.35rem] 
                    before:bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.35)_0%,_rgba(0,0,0,0)_80%)]
                    before:opacity-0 before:transition-all before:duration-[650ms] before:content-[""]
                    hover:before:opacity-100 hover:translate-y-[-0.25rem] '>
                        Send Message
                        <svg
                            className="button__icon ml-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                fill="#fff"
                            ></path>
                            <path
                                d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                fill="#fff"
                            ></path>
                        </svg>
                    </button>

                    {/* <button type='submit' className="button" ref={buttonRef}>
                        <svg className="btn-layer">
                            <path ref={pathRef} d="M136,77.5c0,0-11.7,0-12,0c-90,0-94.2,0-94.2,0s-10.8,0-25.1,0c-0.2,0-0.8,0-0.8,0c-2.2,0-4-1.8-4-4v-47  c0-2.2,1.8-4,4-4c0,0,0.6,0,0.9,0c39.1,0,61.1,0,61.1,0s3,0,69.1,0c0.2,0,0.9,0,0.9,0c2.2,0,4,1.8,4,4v47  C140,75.7,138.2,77.5,136,77.5z"/>
                        </svg>
                        <svg className="plane">
                            <use xlinkHref="#plane" />
                        </svg>
                        <ul>
                            <li>Send</li>
                            <li>Sent</li>
                        </ul>
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 100" id="btn-layer" preserveAspectRatio="none">
                            <path d="M133,77.5H7c-3.9,0-7-3.1-7-7v-41c0-3.9,3.1-7,7-7h126c3.9,0,7,3.1,7,7v41C140,74.4,136.9,77.5,133,77.5z" />
                        </symbol>
                        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 26" id="plane" preserveAspectRatio="none">
                            <path d="M5.25,15.24,18.42,3.88,7.82,17l0,4.28a.77.77,0,0,0,1.36.49l3-3.68,5.65,2.25a.76.76,0,0,0,1-.58L22,.89A.77.77,0,0,0,20.85.1L.38,11.88a.76.76,0,0,0,.09,1.36Z" />
                        </symbol>
                    </svg> */}

                </form>
            </div>
        </div>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
    </section>
  )
}

export default Contact