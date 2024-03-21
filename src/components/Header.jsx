import React from "react"
import { Link } from "react-router-dom"
function Header() {
    return (
      <div className='h-[15vh] w-full flex flex-row items-center justify-between overflow-hidden z-[9999]'>
        
          <div className=' pl-8'><img src="/logo2.png" width={200} height={200} alt='logo' /></div>
          <div className='flex menu-items flex-row items-center gap-5 pr-8 heading-links-text text-white'>
              <Link className="item" href="/">Home</Link>
              <Link className="item" href="/">Services</Link>
              <Link className="item" href="/">About us</Link>
              <Link className="item" href="/">Team</Link>
              <Link className="item" href="/">Features</Link>
              <Link className="item" href="/">Testimonials</Link>
              <Link className="item" href="/">Contact us</Link>
          </div>
      </div>
    )
  }
  
  export default Header