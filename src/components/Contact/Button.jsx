// import React, { useEffect, useRef } from 'react';
// import { gsap } from "gsap";
// import './button.css';

// // import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
// // gsap.registerPlugin(MorphSVGPlugin);

// const Button = () => {

//     const buttonRef = useRef(null);
//     const pathRef = useRef(null);
//     const planeRef = useRef(null);

//     useEffect(() => {
//         const button = buttonRef.current;
//         const path = pathRef.current;

//         const handleClick = e => {
//             e.preventDefault();
//             if(button.classList.contains('active')) {
//                 return;
//             }

//             button.classList.add('active');

//             const tl = gsap.timeline({
//                 onComplete: () => button.classList.remove('active'),      
//             })

//             // tl.to(path, {
//             //     // Using basic transformations instead of morphSVG
//             //     scaleX: 1.1,
//             //     scaleY: 1.1,
//             //     duration: 0.3,
//             //     delay: 0.3,
//             // }).to(path, {
//             //     scaleX: 1,
//             //     scaleY: 1,
//             //     duration: 1.7,
//             //     ease: "elastic.out(1, .15)",
//             // });

//             tl.to(plane, {
//                 rotation: 360,
//                 x: 100,
//                 y: -100,
//                 duration: 1.5,
//                 ease: "power1.inOut",
//             });
//         };

//         button.addEventListener('click', handleClick);

//         return () => {
//             button.removeEventListener('click', handleClick);
//         };
//     }, []);

//   return (
//     <button className="button" ref={buttonRef}>
//       <svg className="btn-layer">
//         <path ref={pathRef} d="M136,77.5c0,0-11.7,0-12,0c-90,0-94.2,0-94.2,0s-10.8,0-25.1,0c-0.2,0-0.8,0-0.8,0c-2.2,0-4-1.8-4-4v-47  c0-2.2,1.8-4,4-4c0,0,0.6,0,0.9,0c39.1,0,61.1,0,61.1,0s3,0,69.1,0c0.2,0,0.9,0,0.9,0c2.2,0,4,1.8,4,4v47  C140,75.7,138.2,77.5,136,77.5z"/>
//       </svg>
//       <svg className="plane">
//         <use xlinkHref="#plane" />
//       </svg>
//       <ul>
//         <li>Send</li>
//         <li>Sent</li>
//       </ul>
//     </button>
//   )
// }

// export default Button