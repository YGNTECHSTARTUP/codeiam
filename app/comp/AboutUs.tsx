import { Button } from '@/components/ui/button'
import {  ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='md:flex justify-between container -mt-[17%]'>
        <div className='lg:container'>
            <div className='text-3xl font-bold'>About Us</div><br/>
            <div className='text-4xl text-yellow-500 font-bold'>
                <div className=''>
                Where Ideas Become Reality
                    </div>
                <div>
                    Hack The Impossible
                </div>
            </div>
            <div className='text-[#707070]'>Codeiam is a dynamic pre-incubation and hackathon cluster designed to empower students by providing them with a robust platform to showcase their skills, creativity, and knowledge in the rapidly evolving field of technology. By offering a collaborative environment where innovative ideas can take shape, Codeiam fosters a culture of experimentation and hands-on learning, enabling students to work on real-world problems and create cutting-edge solutions.</div>
       <div className='font-extrabold text-sm'>Join Our Growing Whatsapp Community</div>
       <br/>
        <Button className='rounded-2xl bg-blue-500 hover:bg-blue-800'>Click Here to Get Started <ArrowRightIcon/></Button>

      </div>
        <div className=' '>
<Image src={"/about.png"} alt={"about-image"} width={800} height={800} />
        </div>
    </div>
  )
}

export default AboutUs