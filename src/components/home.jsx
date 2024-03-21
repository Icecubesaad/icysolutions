import React, { useEffect } from 'react'
import Header from './Header'

function Home() {
    return (
        <div className='main-canvas flex items-center h-[100vh] w-full overflow-x-hidden flex-col z-[9999]'>
            <Header/>
            <div className='flex flex-row h-[calc(100vh-15vh)] w-full items-center'>
                <div className='flex w-full flex-col pl-[150px] gap-10 '>
                    <h1 className=' text-5xl text-white pb-4'>We build things here</h1>
                    <div className=' w-full flex'>
                        <button className='border-[1px] border-white rounded-md text-white w-[150px] h-[50px] flex justify-center items-center'>About us</button>
                    </div>
                </div>
                <div className=' relative right-[-100px]'>
                    <img className='border-[1px] border-transparent rounded-xl' src='/website.png' width={1500} height={700} />
                </div>
            </div>
        </div>
    )
}

export default Home