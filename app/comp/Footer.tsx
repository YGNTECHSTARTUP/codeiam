import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="mt-2 pt-2 border-t w-full border-white/10 flex bg-primary/80 justify-center transition-all duration-300 text-background items-center">
          <p className="text-sm text-center md:text-left">
            © {currentYear} <span className='underline decoration-dotted decoration-primary-foreground'>
           <Link href={"https://ygntech.vercel.app"} >
           YGN
           </Link>
                </span>&nbsp;All rights reserved.
          </p>
          
        </div>

  )
}

export default Footer