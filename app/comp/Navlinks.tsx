import React from 'react'
import { NavLinkss } from '../constant'
import Link from 'next/link'
import { TiArrowSortedDown } from "react-icons/ti";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { chapters } from '../constant'

const Navlinks = () => {
  return (
    <div className="gap-4 flex  items-center " >
     {NavLinkss.map((link)=>{
        return (
          <DropdownMenu key={link.key}>
          <DropdownMenuTrigger >
            <Link  href={link.route} className='hover:text-blue-500  flex border-dotted font-semibold text-sm mr-5'>
         
           
          
             {link.name}
             {
                
                link.name === "CHAPTERS" &&<TiArrowSortedDown className='inline mt-1' />
     }
             
              {
                
                 link.name === "CHAPTERS" && <div className='flex'>
                 
                  <DropdownMenuContent side={'bottom'} align={'start'}>
                  {
                    chapters.map((item)=>(
                     
                        <DropdownMenuItem key={item.key}>
                       <Link href={`${item.href}`} passHref legacyBehavior>
                       {item.label}
                       </Link>   
                          </DropdownMenuItem>
                      
                    ))}
                  </DropdownMenuContent> </div> }
            
         
            </Link>
            </DropdownMenuTrigger>
            </DropdownMenu>
        )
     })}
    </div>
     
  )
}

export default Navlinks