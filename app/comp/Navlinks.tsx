import React from 'react'
import { NavLinkss } from '../constant'
import Link from 'next/link'
// import { TiArrowSortedDown } from "react-icons/ti";
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
            
         
           <Link href={link.route}>
           {link.name}
           </Link>
           
     
          
             
             </DropdownMenuTrigger>
           
             
              {
                
                 link.name === "CHAPTERS" && <div className='flex -space-x-14'>
                 
                  <DropdownMenuContent side={'bottom'} align={'start'}>
                  {
                    chapters.map((item)=>(
                     
                        <DropdownMenuItem key={item.key}>
                       <Link href={`${item.href}`} >
                       {item.label}
                       </Link>   
                          </DropdownMenuItem>
                      
                    ))}
                  </DropdownMenuContent> </div> }
            
         
            
       
            </DropdownMenu>
        )
     })}
    </div>
     
  )
}

export default Navlinks