import React, { useState } from 'react'
import Header from './Header'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
function Quote() {
    const [previousWebsiteActive, setpreviousWebsiteActive] = useState(null);
    const [previousServiceActive, setpreviousServiceActive] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    // Get a specific query parameter
    const myParam = searchParams.get('category');
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
    
    const websiteTypes = [
        { id: 1, name: "Business " },
        { id: 2, name: "E-commerce " },
        { id: 3, name: "Portfolio " },
        { id: 4, name: "Blogs" },
        { id: 5, name: "Educational " },
        { id: 6, name: "News and Media " },
        { id: 8, name: "Personal " },
        { id: 10, name: "Government " }
    ];
    const mobileAppCategories = [
        { id: 1, name: "Social Networking" },
        { id: 2, name: "Productivity" },
        { id: 3, name: "Entertainment" },
        { id: 4, name: "Utilities" },
        { id: 5, name: "Travel" },
        { id: 6, name: "Health & Fitness" },
        { id: 7, name: "Education" },
        { id: 8, name: "Finance" },
        { id: 9, name: "Lifestyle" },
        { id: 10, name: "Games" },
        { id: 11, name: "News" },
        { id: 12, name: "Shopping" },
        { id: 13, name: "Food & Drink" },
        { id: 14, name: "Music" },
        { id: 15, name: "Photo & Video" },
        { id: 16, name: "Sports" },
        { id: 17, name: "Weather" },
        { id: 18, name: "Books" },
        { id: 19, name: "Business" },
        { id: 20, name: "Navigation" },
        { id: 21, name: "Medical" },
        { id: 22, name: "Reference" },
        { id: 23, name: "Social" },
        { id: 24, name: "Utilities" },
        { id: 25, name: "Other" }
    ];
    const graphicDesignCategories = [
        { id: 1, name: "Logo Design" },
        { id: 2, name: "Branding" },
        { id: 3, name: "Print Design" },
        { id: 4, name: "Packaging Design" },
        { id: 5, name: "UI/UX Design" },
        { id: 6, name: "Illustration" },
        { id: 7, name: "Motion Graphics" },
        { id: 8, name: "Typography" },
        { id: 9, name: "Web Design" },
        { id: 10, name: "Other" }
      ];
    const changeStyleBtn = (id) => {
        if (previousWebsiteActive == null) {
            const elementToChange = document.getElementById(`${id}btn`);
            elementToChange.classList.toggle('reset');
            elementToChange.classList.toggle('anim-bg-gradient');
            setpreviousWebsiteActive(id)
        }
        else {
            let elementToChange = document.getElementById(`${previousWebsiteActive}btn`);
            elementToChange.classList.remove('reset');
            elementToChange.classList.remove('anim-bg-gradient');
            elementToChange = document.getElementById(`${id}btn`);
            elementToChange.classList.toggle('reset');
            elementToChange.classList.toggle('anim-bg-gradient');
            setpreviousWebsiteActive(id)
        }
    };
    const changeService = (id) => {
        if (previousServiceActive == null) {
            const elementToChange = document.getElementById(`${id}service`);
            elementToChange.classList.toggle('reset');
            elementToChange.classList.toggle('anim-bg-gradient');
            setpreviousServiceActive(id)
        }
        else {
            let elementToChange = document.getElementById(`${previousServiceActive}service`);
            elementToChange.classList.remove('reset');
            elementToChange.classList.remove('anim-bg-gradient');
            elementToChange = document.getElementById(`${id}service`);
            elementToChange.classList.toggle('reset');
            elementToChange.classList.toggle('anim-bg-gradient');
            setpreviousServiceActive(id)
        }
    };
    return (
        <div className='main-canvas-another flex flex-col h-auto items-center w-full'>
            <Header />
            <h1 className=' text-6xl pb-3 text-white z-[999] text-center'> Make the right decision for <br />your buisness with us!</h1>
            <div id="blob"></div>
            <div id="blur"></div>
            <p className='text-white text-center z-[9999] mt-10'> fill out the form and our team will contact you under 24 hours!</p>
            <div className='flex flex-col w-full items-center z-[9999]'>
                <div className='flex flex-row w-[80%] text-white justify-center mt-10'>
                    <div className='flex flex-col gap-3 w-full items-center'>
                        <input placeholder='Enter your name' className='w-[60%] h-[55px] border-t-0 border-r-0 border-b-2 border-l-0 border-white bg-transparent text-lg  pl-3 placeholder:text-white outline-none' />
                    </div>
                    <div className='flex flex-col gap-3 w-full items-center'>
                        <input placeholder='Enter your email' className='w-[60%] h-[55px] border-t-0 border-r-0 border-b-2 border-l-0 border-white bg-transparent text-lg  pl-3 placeholder:text-white outline-none' />
                    </div>
                </div>
                <div className='flex flex-row w-[80%] text-white justify-center mt-10'>
                    <div className='flex flex-col gap-3 w-full items-center'>
                        <input placeholder='Enter your phone no. (optional)' className='w-[60%] h-[55px] border-t-0 border-r-0 border-b-2 border-l-0 border-white bg-transparent text-lg  pl-3 placeholder:text-white outline-none' />
                    </div>
                    <div className='flex flex-col gap-3 w-full items-center'>
                        <input placeholder='Enter your Address (optional)' className='w-[60%] h-[55px] border-t-0 border-r-0 border-b-2 border-l-0 border-white bg-transparent text-lg  pl-3 placeholder:text-white outline-none' />
                    </div>
                </div>

            </div>
            <div className='flex flex-col text-white z-[9999]  w-[65%] mt-10'>
                {myParam == 'web' ? <h1 className='text-[white] text-xl font-semibold '>choose the website type</h1>:<h1 className='text-[white] text-xl font-semibold '>choose the mobile app type</h1>}
                {myParam == 'web' ? <div className='mt-10' style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridTemplateRows: "repeat(2, 1fr)", columnGap: "40px", rowGap: "20px" }}>
                    {
                        websiteTypes.map(e => {
                            return (
                                <button onClick={() => { changeStyleBtn(e.id) }} id={`${e.id + "btn"}`} key={e.id} className=' border-[1px] border-white rounded-lg w-auto p-5 h-[50px] flex justify-center items-center overflow-hidden'>
                                    {e.name}
                                </button>
                            )
                        })
                    }

                </div>
                    : 
                    myParam == 'mobile'?
                    <div className='mt-10' style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridTemplateRows: "repeat(5, 1fr)", columnGap: "40px", rowGap: "20px" }}>
                    {
                        mobileAppCategories.map(e => {
                            return (
                                <button onClick={() => { changeStyleBtn(e.id) }} id={`${e.id + "btn"}`} key={e.id} className=' border-[1px] border-white rounded-lg w-auto p-5 h-[50px] flex justify-center items-center overflow-hidden'>
                                    {e.name}
                                </button>
                            )
                        })
                    }

                </div>
                    : <div className='mt-10' style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridTemplateRows: "repeat(2, 1fr)", columnGap: "40px", rowGap: "20px" }}>
                    {
                        graphicDesignCategories.map(e => {
                            return (
                                <button onClick={() => { changeStyleBtn(e.id) }} id={`${e.id + "btn"}`} key={e.id} className=' border-[1px] border-white rounded-lg w-auto p-5 h-[50px] flex justify-center items-center overflow-hidden'>
                                    {e.name}
                                </button>
                            )
                        })
                    }

                </div>}
                {myParam == 'web' ? <div className=' flex flex-row gap-[40px] mt-[20px]'>
                    <button onClick={() => { changeStyleBtn(7) }} id='7btn' className=' border-[1px] border-white rounded-lg w-[150px] p-5 h-[60px] flex justify-center items-center'>
                        Nonprofit and Organization
                    </button>
                    <button onClick={() => { changeStyleBtn(9) }} id='9btn' className=' border-[1px] border-white rounded-lg w-[250px] p-5 h-[60px] flex justify-center items-center'>
                        Community and Social Networking
                    </button>
                </div> : null}
                <h1 className='text-[white] text-xl font-semibold mt-10'>choose the service type</h1>
                <div className='flex flex-row gap-[40px] mt-10'>
                    <button onClick={() => { changeService(1) }} id='1service' className=' border-[1px] border-white rounded-lg w-auto p-5 h-[50px] flex justify-center items-center'>Frontend</button>
                    <button onClick={() => { changeService(2) }} id='2service' className=' border-[1px] border-white rounded-lg w-auto p-5 h-[50px] flex justify-center items-center'>Backend</button>
                    <button onClick={() => { changeService(3) }} id='3service' className=' border-[1px] border-white rounded-lg w-auto p-5 h-[50px] flex justify-center items-center'>Frontend+Backend</button>
                </div>
                <div className='mt-10'>
                    <input placeholder='Enter your message' className='w-full h-[55px] border-t-0 border-r-0 border-b-2 border-l-0 border-white bg-transparent text-lg  pl-3 placeholder:text-white outline-none' />
                </div>
                <div className='mt-10 flex w-full justify-center'>
                    <button className=' reset anim-bg-gradient w-[150px] h-[50px]'>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default Quote