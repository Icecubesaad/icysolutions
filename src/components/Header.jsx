import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Header({setFragment}) {
  const navigate = useNavigate()
    return (
      <div className='h-[15vh] w-full flex flex-row items-center justify-between overflow-hidden z-[9999]'>
          <div className=' pl-8'><img src="/logo2.png" width={70} height={70} alt='logo' /></div>
          <div className='flex menu-items flex-row items-center gap-5 pr-8 heading-links-text text-white'>
              <Link onClick={()=>{setFragment("#home")}} className="item" to="#home">Home</Link>
              <Link onClick={()=>{setFragment("#services")}} className="item" to="#services">Services</Link>
              <Link onClick={()=>{setFragment("#about")}} className="item" to="#about">About us</Link>
              <Link onClick={()=>{setFragment("#team")}} className="item" href="#team">Team</Link>
              <Link onClick={()=>{setFragment("#testimonials")}} className="item" href="#testimonials">Testimonials</Link>
              <Link onClick={()=>{setFragment("#faq")}} className="item" href="#faq">FAQ</Link>
              <Link onClick={()=>{setFragment("#contact")}} className="item" href="#contact">Contact us</Link>
              <button onClick={()=>{navigate("/quote")}} className='item reset anim-bg-gradient w-[200px] h-[50px]' href="#contact">Get a quote</button>
          </div>
      </div>
    )
  }
  
  export default Header