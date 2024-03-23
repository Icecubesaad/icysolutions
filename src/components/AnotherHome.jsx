import React, { useEffect, useState } from 'react'
import Header from './Header'
import { AvatarGroup, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from 'react-router-dom';
function AnotherHome() {
    const navigate = useNavigate()
    const [activeTestimonial, setactiveTestimonial] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [Fragment, setFragment] = useState("#home");

    const testimonials = [
        {
            name: "Ittefaq Electronics",
            description: "Provided excellent service and top-notch products. Highly recommend!",
            place: "Lahore, Pakistan",
            id: 412
        },
        {
            name: "Uplift",
            description: "Outstanding experience working with the team. They delivered beyond expectations!",
            place: "India",
            id: 4124
        },
        {
            name: "Talha",
            description: "Amazing service! Helped us achieve our goals effectively. Will definitely work with them again.",
            place: "Los Angeles",
            id: 421
        },
        {
            name: "Talha",
            description: "Came back for another project, and once again, they exceeded our expectations. Highly recommended!",
            place: "Los Angeles",
            id: 425
        }
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            // Increment activeTestimonial after every 5 seconds
            setOpacity(0);
            setTimeout(() => {
                setactiveTestimonial((prevActive) => (prevActive + 1) % testimonials.length);
                setOpacity(1);
            }, 1200); // Delay to ensure transition starts after opacity is set to 0
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);
    const commentStyle = {
        transition: "opacity 0.5s",
        opacity: opacity,
    };
    useEffect(() => {
        const blob = document.getElementById("blob");

        window.onpointermove = event => {
            const { clientX, clientY } = event;

            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 3000, fill: "forwards" });
        }

        return () => {
            window.onpointermove = null; // Cleanup event listener on component unmount
        };
    }, []);
    useEffect(() => {
        // Function to set height
        function setHeight() {
            var mainCanvasHeight = document.querySelector('.main-canvas-another').offsetHeight;
            var blurDiv = document.getElementById('blur');
            blurDiv.style.height = mainCanvasHeight + 'px';
        }
    
        // Set height when component mounts
        setHeight();
    
        // Set height when user navigates between pages
        window.addEventListener('hashchange', setHeight);
    
        // Set height when device height changes (e.g., orientation change)
        window.addEventListener('resize', setHeight);
    
        // Cleanup function
        return () => {
            // Remove event listeners to avoid memory leaks
            window.removeEventListener('hashchange', setHeight);
            window.removeEventListener('resize', setHeight);
        };
    }, []);
    
    useEffect(() => {
        const container = document.querySelector(".tilt");
        const image = container.querySelector("img");

        container.addEventListener("mouseenter", () => {
            container.addEventListener("mousemove", tilt);
        });

        container.addEventListener("mouseleave", () => {
            container.removeEventListener("mousemove", tilt);
            container.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
            image.style.transform = "rotateY(0deg) rotateX(0deg)";
        });

        function tilt(event) {
            const { top, bottom, left, right } = container.getBoundingClientRect();

            const middleX = (right - left) / 2;
            const middleY = (bottom - top) / 2;

            const clientX = event.clientX;
            const clientY = event.clientY;

            const offsetX = (clientX - left - middleX) / middleX;
            const offsetY = (middleY - clientY + top) / middleY;

            container.style.transform = `perspective(1000px) rotateY(${offsetX * 15}deg) rotateX(${offsetY * 15}deg) scale3d(1, 1, 1)`;
            image.style.transform = `rotateY(${-offsetX * 15}deg) rotateX(${-offsetY * 15}deg)`;
        }
    }, []);

    useEffect(() => {
        if (!Fragment) {
            return
        }
        document.querySelector(`${Fragment}`).scrollIntoView()

    }, [Fragment]);
    return (
        <div className='main-canvas-another flex items-center h-auto overflow-hidden w-full flex-col'>
            <Header setFragment={setFragment} />
            <div id='home' className='flex flex-row h-[calc(100vh-15vh)] w-full items-center z-[9999]'>
                <div className='flex w-full flex-col pl-[150px] gap-10'>
                    <h1 className=' text-5xl text-white pb-4'>We develop things here.</h1>
                    <div className=' w-full flex'>
                        <button onClick={()=>{setFragment("#about")}} className=' reset anim-bg-gradient w-[150px] h-[50px]'>About us</button>
                    </div>
                </div>
                <div className=' relative right-[-100px]'>
                    <img className='border-[1px] border-transparent rounded-xl' src='/website.png' width={1500} height={700} />
                </div>
            </div>
            <div id="blob"></div>
            <div id="blur">

            </div>

            <div className='h-auto w-full z-[9999] overflow-hidden  ' id='services'>
                <div className="blur"></div>
                <h1 className='text-center text-white text-4xl pb-2'> Our Services</h1>
                <div className='flex w-full h-full'>
                    <div className='flex flex-col gap-5 w-full mt-6 h-auto'>
                        <div className='flex flex-row gap-24 w-full justify-center h-auto'>
                            <div class="card-wrapper">
                                <div class="card">
                                    <div className='flex flex-row items-center'>
                                        <h1 className=' text-white text-2xl'>Mobile<br />App Development</h1>
                                        <svg fill="#ffffff" height={150} width={150} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 502.664 502.664" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M310.166,397.593H75.951V61.671h234.151v25.13h31.472V54.811C341.595,24.677,316.853,0,286.74,0H99.355 C69.199,0,44.522,24.677,44.522,54.811v393.02c0,30.178,24.677,54.833,54.833,54.833H286.74 c30.113,0,54.855-24.655,54.855-54.833V397.01h-31.429C310.166,397.01,310.166,397.593,310.166,397.593z M193.015,475.226 c-13.892,0-25.108-11.238-25.108-25.108c0-13.913,11.217-25.13,25.108-25.13c13.913,0,25.152,11.238,25.152,25.13 C218.167,463.988,206.929,475.226,193.015,475.226z"></path> <rect x="102.785" y="95.386" width="70.256" height="42.84"></rect> <rect x="102.785" y="205.073" width="70.256" height="42.84"></rect> <rect x="102.785" y="319.873" width="70.256" height="42.818"></rect> <path d="M422.399,223.905c-2.481-12.986-7.507-25.001-14.625-35.506l25.195-25.216l-25.734-25.648l-25.152,25.173 c-10.462-7.161-22.541-12.123-35.484-14.625v-35.7h-36.411v35.7c-12.964,2.502-24.936,7.485-35.505,14.625l-25.108-25.173 l-25.734,25.669l25.152,25.216c-7.097,10.505-12.101,22.52-14.582,35.484h-35.657v36.39h35.656 c2.481,12.921,7.507,24.936,14.603,35.484l-25.173,25.173l25.734,25.626l25.173-25.152c10.527,7.161,22.541,12.144,35.505,14.668 v35.635h36.411v-35.656c12.942-2.481,24.936-7.507,35.484-14.625l25.152,25.152l25.734-25.648l-25.195-25.173 c7.118-10.505,12.123-22.541,14.625-35.505h35.678l0,0v-36.368H422.399z M328.437,281.693c-21.894,0-39.669-17.688-39.669-39.604 c0-21.894,17.774-39.69,39.669-39.69c21.916,0,39.604,17.774,39.604,39.69C368.041,264.026,350.309,281.693,328.437,281.693z"></path> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>

                                    </div>
                                    <p className='text-white'>
                                        Empowering your brand with sleek and intuitive mobile apps for e-commerce, business, and portfolio needs. Engage users on the go with seamless experiences that drive results.
                                    </p>
                                    <div className=' w-full flex flex-col gap-3 items-center justify-center h-[20vh] mt-4 relative'>
                                        <button onClick={()=>{setFragment("#testimonials")}} className=' reset anim-bg-gradient w-[150px] h-[50px]'>Testimonials</button>
                                        <button  onClick={()=>{navigate("/quote")}} className=' reset anim-bg-gradient w-[150px] h-[50px]'>Get a quote</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-wrapper">
                                <div class="card">
                                    <div className='flex flex-row items-center gap-10'>
                                        <h1 className=' text-white text-2xl'>Website<br />Development</h1>
                                        <svg fill="#ffffff" height={150} width={100} version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M62,5H2C0.896,5,0,5.896,0,7v50c0,1.104,0.896,2,2,2h60c1.104,0,2-0.896,2-2V7C64,5.896,63.104,5,62,5z M60,9v8H4V9H60z M4,55V21h56v34H4z"></path> <path d="M10,15c0.52,0,1.04-0.21,1.41-0.59C11.79,14.04,12,13.52,12,13s-0.21-1.04-0.59-1.42c-0.74-0.74-2.08-0.74-2.83,0.01 C8.21,11.96,8,12.47,8,13c0,0.53,0.21,1.04,0.59,1.42C8.96,14.79,9.479,15,10,15z"></path> <path d="M16,15c0.52,0,1.04-0.21,1.42-0.59C17.79,14.04,18,13.52,18,13s-0.21-1.04-0.59-1.42c-0.74-0.74-2.08-0.74-2.83,0.01 C14.21,11.96,14,12.48,14,13s0.21,1.04,0.59,1.42C14.96,14.79,15.479,15,16,15z"></path> <path d="M22,15c0.53,0,1.04-0.21,1.41-0.59C23.79,14.04,24,13.53,24,13c0-0.52-0.21-1.04-0.59-1.42c-0.74-0.74-2.08-0.74-2.83,0.01 C20.21,11.96,20,12.48,20,13c0,0.53,0.21,1.04,0.59,1.41C20.96,14.79,21.479,15,22,15z"></path> <path d="M31,25H10c-1.104,0-2,0.896-2,2s0.896,2,2,2h21c1.104,0,2-0.896,2-2S32.104,25,31,25z"></path> <path d="M31,33H10c-1.104,0-2,0.896-2,2s0.896,2,2,2h21c1.104,0,2-0.896,2-2S32.104,33,31,33z"></path> <path d="M31,41H10c-1.104,0-2,0.896-2,2s0.896,2,2,2h21c1.104,0,2-0.896,2-2S32.104,41,31,41z"></path> <path d="M54,25H39c-1.104,0-2,0.896-2,2v16c0,1.104,0.896,2,2,2h15c1.104,0,2-0.896,2-2V27C56,25.896,55.104,25,54,25z M52,41H41 V29h11V41z"></path> </g> </g></svg>

                                    </div>
                                    <p className='text-white'>
                                        Crafting immersive web experiences tailored for e-commerce, business, landing, and portfolio pages. Elevate your online presence with designs that captivate and convert.
                                    </p>
                                    <div className=' w-full flex flex-col items-center gap-3 mt-4 relative'>
                                        <button onClick={()=>{setFragment("#testimonials")}} className=' reset anim-bg-gradient w-[150px] h-[50px]'>Testimonials</button>
                                        <button  onClick={()=>{navigate("/quote")}} className=' reset anim-bg-gradient w-[150px] h-[50px]'>Get a quote</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-wrapper">
                                <div class="card">
                                    <div className='flex flex-row items-center gap-10'>
                                        <h1 className=' text-white text-2xl'>Graphic<br />Designing</h1>
                                        <svg fill="#ffffff" height={150} width={100} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M59,0H1C0.4,0,0,0.4,0,1v46c0,0.6,0.4,1,1,1h22v10h-3v2h4h12h4v-2h-3V48h22c0.6,0,1-0.4,1-1V1C60,0.4,59.6,0,59,0z M35,58 H25V48h10V58z M58,46H36H24H2v-8h3h22h6h22h3V46z M33.8,16.3l-2.9-7.6c-0.1-0.3-0.5-0.6-0.9-0.6s-0.8,0.2-0.9,0.6l-2.9,7.6 C26.1,16.5,26,16.7,26,17v19H6V6h48v30H34V17C34,16.7,33.9,16.5,33.8,16.3z M28.4,16l1.5-4.2l1.6,4.2H28.4z M29,18v18h-1V18H29z M31,18h1v18h-1V18z M58,36h-2V5c0-0.6-0.4-1-1-1H5C4.4,4,4,4.4,4,5v31H2V2h56V36z"></path> <path d="M51,25v-8c0-0.6-0.4-1-1-1H38v1v1v3h2v-3h4v3h2v-3h3v6H38v2h12C50.6,26,51,25.6,51,25z"></path> <path d="M9,17v8c0,0.6,0.4,1,1,1h12v-2H11v-6h3v3h2v-3h4v3h2v-3v-1v-1H10C9.4,16,9,16.4,9,17z"></path> <rect x="12" y="28" width="2" height="2"></rect> <rect x="16" y="28" width="2" height="2"></rect> <rect x="20" y="28" width="2" height="2"></rect> <rect x="38" y="28" width="2" height="2"></rect> <rect x="42" y="28" width="2" height="2"></rect> <rect x="46" y="28" width="2" height="2"></rect> <rect x="38" y="12" width="2" height="2"></rect> <rect x="42" y="12" width="2" height="2"></rect> <rect x="46" y="12" width="2" height="2"></rect> <rect x="12" y="12" width="2" height="2"></rect> <rect x="16" y="12" width="2" height="2"></rect> <rect x="20" y="12" width="2" height="2"></rect> </g> </g> </g></svg>
                                    </div>
                                    <p className='text-white'>Empower your brand with captivating graphic designs, from striking thumbnails to timeless logos. Elevate your visual identity with our creative expertise.</p>
                                    <div className=' w-full flex flex-col items-center justify-center gap-3  h-[20vh] mt-4 relative'>
                                        <button onClick={()=>{setFragment("#testimonials")}} className=' reset anim-bg-gradient w-[150px] h-[50px]'>Testimonials</button>
                                        <button  onClick={()=>{navigate("/quote")}} className=' reset anim-bg-gradient w-[150px] h-[50px]'>Get a quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-center'>
                            <div class="card-wrapper ">
                                <div class="card">
                                    <div className='flex flex-row items-center gap-10'>
                                        <h1 className=' text-white text-2xl'>Marketing</h1>
                                        <svg fill="#ffffff" height={150} width={100} version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23.4,13.3C23,13.1,22.4,13,22,13.2l-1,0.4v-12C21,0.7,20.3,0,19.5,0h-2C16.7,0,16,0.7,16,1.5V3h-2.5C12.7,3,12,3.7,12,4.5 V8H9.5C8.7,8,8,8.7,8,9.5v5.2l-3,0.7v-0.3c0-0.6-0.3-1.1-0.8-1.3L3,13.2C2.8,12.5,2.2,12,1.5,12h-1C0.2,12,0,12.2,0,12.5v11 C0,23.8,0.2,24,0.5,24h1c0.7,0,1.3-0.5,1.5-1.2l1.2-0.6C4.6,22,4.9,21.5,5,21l4.8,2.8c0.2,0.1,0.5,0.2,0.8,0.2 c0.2,0,0.5-0.1,0.7-0.2l12-6.4c0.5-0.3,0.8-0.8,0.8-1.3v-1.5C24,14.1,23.8,13.6,23.4,13.3z M2,22.5C2,22.8,1.8,23,1.5,23H1V13h0.5 C1.8,13,2,13.2,2,13.5V22.5z M4,20.9c0,0.2-0.1,0.4-0.3,0.4L3,21.7v-7.4l0.7,0.4C3.9,14.8,4,14.9,4,15.1V20.9z M17,1.5 C17,1.2,17.2,1,17.5,1h2C19.8,1,20,1.2,20,1.5v12.4L17,15V1.5z M13,4.5C13,4.2,13.2,4,13.5,4H16v11.4l-1.4,0.5l-0.3-1.1 c-0.2-0.6-0.7-1-1.2-1.1V4.5z M9,9.5C9,9.2,9.2,9,9.5,9H12v4.8l-3,0.7V9.5z M23,16c0,0.2-0.1,0.4-0.3,0.4l-12,6.5 c-0.1,0.1-0.3,0.1-0.5,0L5,19.9v-3.5l7.7-1.7c0.3-0.1,0.5,0.1,0.6,0.4l0.5,1.6c0,0.1,0,0.3,0,0.4c-0.1,0.1-0.2,0.2-0.3,0.2l-3,0.7 c-0.3,0.1-0.4,0.3-0.4,0.6c0.1,0.2,0.3,0.4,0.5,0.4c0,0,0.1,0,0.1,0l3-0.7c0.4-0.1,0.7-0.4,0.9-0.7c0.1-0.2,0.2-0.4,0.2-0.6l7.6-2.8 c0.2-0.1,0.3,0,0.5,0.1c0.1,0.1,0.2,0.2,0.2,0.4V16z"></path> </g></svg>
                                    </div>
                                    <p className='text-white'>Elevate your brand's presence with our dynamic marketing solutions. From strategic campaigns to targeted ads, we drive engagement and boost conversions across platforms, ensuring your message reaches the right audience at the right time.
                                    </p>
                                    <div className=' w-full flex flex-col items-center justify-center gap-3  h-[20vh] mt-2 relative '>
                                        <button onClick={()=>{setFragment("#testimonials")}} className=' reset anim-bg-gradient w-[150px] h-[50px]'>Testimonials</button>
                                        <button  onClick={()=>{navigate("/quote")}} className=' reset anim-bg-gradient w-[150px] h-[50px]'>Get a quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-auto overflow-hidden flex flex-row z-[9999] mt-10' id='about'>
                <article className=' pl-20 mt-10 w-full'>
                    <h1 className='text-5xl pb-2 text-white'>About us</h1>
                    <h2 className='text-2xl pb-2 text-white mt-2'>Introducing IcySolutions: Your Innovation Partners!</h2>
                    <p className=' text-justify text-white text-xl mt-2'>
                        At IcySolutions, we believe in pushing the boundaries of possibility and redefining what's achievable in the digital realm. With a year of dedicated service in the industry, we've honed our expertise to become your ultimate innovation partners. Our team of seasoned professionals brings a wealth of experience and a passion for innovation to every project we undertake.
                        <br />
                        <br />

                        Driven by a relentless pursuit of excellence, we're committed to delivering cutting-edge solutions that not only meet but exceed your expectations. Whether you're a startup looking to disrupt the market or an established enterprise aiming to stay ahead of the curve, we have the skills and expertise to turn your vision into reality. From conceptualization to execution, we're with you every step of the way, ensuring seamless collaboration and unparalleled results. With IcySolutions as your innovation partner, the future is yours to shape.
                    </p>
                </article>
                <div className='w-full flex justify-center items-center'>
                    <div className='w-[300px] absolute logo-home h-[300px] border-[1px] border-transparent rounded-full flex justify-center items-center tilt'>
                        <img src='/logo2.png' height={150} width={150} />
                    </div>
                </div>
            </div>
            <div className='h-[auto] w-full z-[9999] mt-10' id='team'>
                <h1 className='text-5xl text-white text-center pb-2'>Team</h1>
                <div className='flex flex-col gap-10'>
                    <div>
                        <h1 className="text-3xl text-white pb-2 pl-16 mt-5">Web Developers</h1>
                        <div className='flex flex-row gap-24 mt-5 w-full justify-center h-auto'>
                            <div class="card-wrapper">
                                <div class="card pt-10">
                                    <div className='flex flex-row justify-between items-center gap-10 h-[100px]'>
                                        <h1 className=' text-white text-2xl'>Saad</h1>
                                        <svg height="50" viewBox="0 0 20 20" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673c1.366-1.099 2.242-2.783 2.242-4.673 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.89.876 3.574 2.242 4.673-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327" fill-rule="evenodd" transform="translate(-364 -1999)" /></svg>
                                    </div>
                                    <p className='text-white mt-5'>Elevate your brand's presence with our dynamic marketing solutions. From strategic campaigns to targeted ads, we drive engagement and boost conversions across platforms, ensuring your message reaches the right audience at the right time.
                                    </p>
                                    <div className=' w-full flex flex-col items-center justify-center gap-3  h-[20vh] mt-4 relative'>
                                        <button className=' reset anim-bg-gradient w-[150px] h-[50px]'>Resume</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-wrapper">
                                <div class="card pt-10">
                                    <div className='flex flex-row justify-between items-center gap-10 h-[100px]'>
                                        <h1 className=' text-white text-2xl'>Saad</h1>
                                        <svg height="50" viewBox="0 0 20 20" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673c1.366-1.099 2.242-2.783 2.242-4.673 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.89.876 3.574 2.242 4.673-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327" fill-rule="evenodd" transform="translate(-364 -1999)" /></svg>
                                    </div>
                                    <p className='text-white mt-5'>Elevate your brand's presence with our dynamic marketing solutions. From strategic campaigns to targeted ads, we drive engagement and boost conversions across platforms, ensuring your message reaches the right audience at the right time.
                                    </p>
                                    <div className=' w-full flex flex-col items-center justify-center gap-3  h-[20vh] mt-4 relative'>
                                        <button className=' reset anim-bg-gradient w-[150px] h-[50px]'>Resume</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-wrapper">
                                <div class="card pt-10">
                                    <div className='flex flex-row justify-between items-center gap-10 h-[100px]'>
                                        <h1 className=' text-white text-2xl'>Saad</h1>
                                        <svg height="50" viewBox="0 0 20 20" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673c1.366-1.099 2.242-2.783 2.242-4.673 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.89.876 3.574 2.242 4.673-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327" fill-rule="evenodd" transform="translate(-364 -1999)" /></svg>
                                    </div>
                                    <p className='text-white mt-5'>Elevate your brand's presence with our dynamic marketing solutions. From strategic campaigns to targeted ads, we drive engagement and boost conversions across platforms, ensuring your message reaches the right audience at the right time.
                                    </p>
                                    <div className=' w-full flex flex-col items-center justify-center gap-3  h-[20vh] mt-4 relative'>
                                        <button className=' reset anim-bg-gradient w-[150px] h-[50px]'>Resume</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl text-white pb-2 pl-16 mt-5">Mobile Developers</h1>
                        <div className='flex flex-row gap-24 mt-5 w-full justify-center h-auto'>
                            <div class="card-wrapper">
                                <div class="card pt-10">
                                    <div className='flex flex-row justify-between items-center gap-10 h-[100px]'>
                                        <h1 className=' text-white text-2xl'>Saad</h1>
                                        <svg height="50" viewBox="0 0 20 20" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673c1.366-1.099 2.242-2.783 2.242-4.673 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.89.876 3.574 2.242 4.673-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327" fill-rule="evenodd" transform="translate(-364 -1999)" /></svg>
                                    </div>
                                    <p className='text-white mt-5'>Elevate your brand's presence with our dynamic marketing solutions. From strategic campaigns to targeted ads, we drive engagement and boost conversions across platforms, ensuring your message reaches the right audience at the right time.
                                    </p>
                                    <div className=' w-full flex flex-col items-center justify-center gap-3  h-[20vh] mt-4 relative'>
                                        <button className=' reset anim-bg-gradient w-[150px] h-[50px]'>Resume</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-wrapper">
                                <div class="card pt-10">
                                    <div className='flex flex-row justify-between items-center gap-10 h-[100px]'>
                                        <h1 className=' text-white text-2xl'>Saad</h1>
                                        <svg height="50" viewBox="0 0 20 20" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673c1.366-1.099 2.242-2.783 2.242-4.673 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.89.876 3.574 2.242 4.673-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327" fill-rule="evenodd" transform="translate(-364 -1999)" /></svg>
                                    </div>
                                    <p className='text-white mt-5'>Elevate your brand's presence with our dynamic marketing solutions. From strategic campaigns to targeted ads, we drive engagement and boost conversions across platforms, ensuring your message reaches the right audience at the right time.
                                    </p>
                                    <div className=' w-full flex flex-col items-center justify-center gap-3  h-[20vh] mt-4 relative'>
                                        <button className=' reset anim-bg-gradient w-[150px] h-[50px]'>Resume</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl text-white pb-2 pl-16 mt-5">Graphic Designers</h1>
                        <div className='flex flex-row gap-24 mt-5 w-full justify-center h-auto'>
                            <div class="card-wrapper">
                                <div class="card pt-10">
                                    <div className='flex flex-row justify-between items-center gap-10 h-[100px]'>
                                        <h1 className=' text-white text-2xl'>Saad</h1>
                                        <svg height="50" viewBox="0 0 20 20" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673c1.366-1.099 2.242-2.783 2.242-4.673 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.89.876 3.574 2.242 4.673-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327" fill-rule="evenodd" transform="translate(-364 -1999)" /></svg>
                                    </div>
                                    <p className='text-white mt-5'>Elevate your brand's presence with our dynamic marketing solutions. From strategic campaigns to targeted ads, we drive engagement and boost conversions across platforms, ensuring your message reaches the right audience at the right time.
                                    </p>
                                    <div className=' w-full flex flex-col items-center justify-center gap-3  h-[20vh] mt-4 relative'>
                                        <button className=' reset anim-bg-gradient w-[150px] h-[50px]'>Resume</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl text-white pb-2 pl-16 mt-5">Marketers</h1>
                        <div className='flex flex-row gap-24 mt-5 w-full justify-center h-auto'>
                            <div class="card-wrapper">
                                <div class="card pt-10">
                                    <div className='flex flex-row justify-between items-center gap-10 h-[100px]'>
                                        <h1 className=' text-white text-2xl'>Saad</h1>
                                        <svg height="50" viewBox="0 0 20 20" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673c1.366-1.099 2.242-2.783 2.242-4.673 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.89.876 3.574 2.242 4.673-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327" fill-rule="evenodd" transform="translate(-364 -1999)" /></svg>
                                    </div>
                                    <p className='text-white mt-5'>Elevate your brand's presence with our dynamic marketing solutions. From strategic campaigns to targeted ads, we drive engagement and boost conversions across platforms, ensuring your message reaches the right audience at the right time.
                                    </p>
                                    <div className=' w-full flex flex-col items-center justify-center gap-3  h-[20vh] mt-4 relative'>
                                        <button className=' reset anim-bg-gradient w-[150px] h-[50px]'>Resume</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-wrapper">
                                <div class="card pt-10">
                                    <div className='flex flex-row justify-between items-center gap-10 h-[100px]'>
                                        <h1 className=' text-white text-2xl'>Saad</h1>
                                        <svg height="50" viewBox="0 0 20 20" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673c1.366-1.099 2.242-2.783 2.242-4.673 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.89.876 3.574 2.242 4.673-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327" fill-rule="evenodd" transform="translate(-364 -1999)" /></svg>
                                    </div>
                                    <p className='text-white mt-5'>Elevate your brand's presence with our dynamic marketing solutions. From strategic campaigns to targeted ads, we drive engagement and boost conversions across platforms, ensuring your message reaches the right audience at the right time.
                                    </p>
                                    <div className=' w-full flex flex-col items-center justify-center gap-3  h-[20vh] mt-4 relative'>
                                        <button className=' reset anim-bg-gradient w-[150px] h-[50px]'>Resume</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-auto mt-10 w-full z-[9999]' id='testimonials'>
                <h1 className=' text-center text-5xl text-white'>Our Clients</h1>
                <div className='w-full flex flex-col items-center mt-10'>
                    <AvatarGroup total={24}>
                        <Avatar alt="Remy Sharp" sx={{ width: 70, height: 70 }} src="/images.jpeg" />
                        <Avatar alt="Travis Howard" sx={{ width: 70, height: 70 }} src="/images1.jpeg" />
                        <Avatar alt="Agnes Walker" sx={{ width: 70, height: 70 }} src="/images2.jpeg" />
                        <Avatar alt="Trevor Henderson" sx={{ width: 70, height: 70 }} src="/images3.jpeg" />
                    </AvatarGroup>
                </div>
                <div className='w-full flex justify-center items-center h-[500px] z-[9999]'>
                    <div
                        key={testimonials[activeTestimonial].id}
                        className='w-[65%] h-[300px] text-white commentBox flex flex-col bg-red-500 border-[1px] rounded-3xl p-10'
                        style={commentStyle}
                    >
                        <div className='flex flex-row gap-5 items-center'>
                            <div className=' border-[1px] rounded-full'><img src='/images.jpeg' height={50} width={50} alt='image' /></div>
                            <div className='text-xl'>{testimonials[activeTestimonial].name}</div>
                        </div>
                        <p className='italic text-xl mt-10'>
                            {testimonials[activeTestimonial].description}
                        </p>
                        <div className='flex flex-row justify-between mt-10 items-center'>
                            <p>{testimonials[activeTestimonial].place}</p>
                            <div className='flex flex-row gap-1'>
                                <StarIcon sx={{ color: "yellow", fontSize: 38 }} />
                                <StarIcon sx={{ color: "yellow", fontSize: 38 }} />
                                <StarIcon sx={{ color: "yellow", fontSize: 38 }} />
                                <StarIcon sx={{ color: "yellow", fontSize: 38 }} />
                                <StarIcon sx={{ color: "yellow", fontSize: 38 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-screen w-full flex flex-row z-[9999]' id='contact'>
                <div className='text-white italic w-full text-5xl flex justify-center items-center'>Let's Talk</div>
                <div className=' text-white flex w-full flex-col justify-center'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-2xl'>Name</h1>
                            <input placeholder='Enter your name' className='w-[80%] h-[55px] border-t-0 border-r-0 border-b-2 border-l-0 border-white bg-transparent text-lg  pl-3 placeholder:text-white outline-none' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-2xl'>Email</h1>
                            <input placeholder='Enter your email' className='w-[80%] h-[55px]  border-white bg-transparent text-lg border-t-0 border-r-0 border-b-2 border-l-0 pl-3 placeholder:text-white outline-none' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-2xl'>Message</h1>
                            <textarea id='message' placeholder='Enter your message' className='w-[80%] h-[55px]  border-white text-lg bg-transparent border-t-0 border-r-0 border-b-2 border-l-0 pl-3 placeholder:text-white p-5 outline-none' />
                        </div>
                        <div className=' flex w-[80%] mt-5 justify-center items-center'>
                            <button className=' reset anim-bg-gradient w-[150px] h-[50px]'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-auto w-full pb-10 z-[9999]'>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-row w-full justify-between'>
                        <div className=' flex justify-center w-full items-center'>
                            <h1 className='text-3xl text-white'>Let's connect and <br />bring your dream website to life!</h1>
                        </div>
                        <div className=' w-full flex justify-center items-center'>
                            <img src='/logo2.png' width={150} height={150} />
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-row items-center justify-center'>
                                <img src='/logo2.png' width={70} height={70} />
                                <h1 className='text-white text-2xl font-bold text-left'>Icy Solutions</h1>
                            </div>
                            <h1 className='text-white   text-center '>
                                Make the right decision for <br />your buisness with us!
                            </h1>
                        </div>
                        <div className='flex flex-col w-full items-center justify-center'>
                            <div className='flex flex-col'>
                                <Link className='text-[#6E6E6E]  text-lg hover:text-white'>get a quote</Link>
                                <Link className='text-[#6E6E6E]  text-lg hover:text-white'>privacy policy</Link>
                                <Link className=' text-[#6E6E6E]  text-lg  hover:text-white'>cookies policy</Link>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-5 justify-center pl-10'>
                            <h1 className='text-[#6E6E6E] text-2xl font-bold'>Let's Connect</h1>
                            <div className='flex flex-row gap-5'>
                                <InstagramIcon sx={{ color: "gray", fontSize: 40 }} />
                                <XIcon sx={{ color: "gray", fontSize: 40 }} />
                                <FacebookIcon sx={{ color: "gray", fontSize: 40 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnotherHome