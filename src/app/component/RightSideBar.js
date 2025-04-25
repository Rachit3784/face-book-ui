"use client"
import React, { useState } from 'react'
import {motion} from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, TrendingUp, TypeOutline } from 'lucide-react';
import { Button } from '@/components/ui/button';


function RightSideBar() {
const [showAllSpon , setAllSpon] = useState(false);
const sponsors = [
    {
      name: "Netflix",
      description: "Watch the latest trending movies and series.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qmBuBERRMhoFTvvNUWw7Kr9iicoxC4c8ZQ&s",
      website: "https://www.netflix.com",
    },
    {
      name: "Instagram",
      description: "Explore the latest features and connect with friends.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NoNt4ECTrCIzRA6PhvyyPThBY9OUEW0-ng&s",
      website: "https://www.instagram.com",
    },
    {
      name: "Spotify",
      description: "Stream your favorite music anytime, anywhere.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpvQJUXehm_yT1kr2WSATHaDRF88_JjWHcQ&s",
      website: "https://www.spotify.com",
    },
    {
      name: "Amazon",
      description: "Shop for everything you need with fast delivery.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBLSbp3rFpIZ0kzoreJLN7uZqkJz0h6-RQQ&s",
      website: "https://www.amazon.com",
    },
    {
      name: "Apple",
      description: "Discover innovative products and services.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qsC4qgsmGTJ9HnNYatRyi7GyJ7GlRMujlw&s",
      website: "https://www.apple.com",
    },
  ];

  const displaySponser = showAllSpon ? sponsors : sponsors.slice(0,3);

  return (
    <div>
      <motion.aside
      initial = {{opacity : 0, x:50}}
      animate = {{opacity : 1, x:0}}
      transition={{duration : 0.7}}
      
      >
  <Card className= "dark:bg-[#222121] bg-white  shadow-md ">
    <CardHeader >
<CardTitle className= "flex  text-lg   font-semibold items-center">
    <TrendingUp className='mr-1 h-5 w-5 text-primary'/>
              <span className='ml-2'>Trending...</span>  
    
    

</CardTitle>
    </CardHeader>

    <CardContent className="flex flex-col items-center  mt-[-16px]">
        

<ul className='space-y-2'>
{
    displaySponser.map((sponsor,index)=>(
      
        <motion.li key={index}
        initial = {{opacity : 0 , y : 50}}
        animate = {{opacity : 1 , y : 0}}
        
        transition={{delay: index*0.1, duration : 0.5}}
        className='flex flex-col items-center border-white border hover:bg-gray-200 hover:dark:bg-[#353634] cursor-pointer rounded-[5px]
        p-2 transition-colors duration-400 gap-1
        '
        >

            <img src={sponsor.image} alt="?" className='w-40 h-30 object-cover rounded-md '/>
            <div className='flex-col flex items-center'>
                <h3 className='font-bold text-sm text-gray-800 dark:text-gray-300 '>{sponsor.name}</h3>
               

               </div>
               <div className='pl-4 text-[12px]'>
                <p className=' text-gray-800 dark:text-gray-300 '>{sponsor.description}</p>
                    
                <a href={sponsor.website} className=' text-primary  flex items-center mt-1 hover:underline dark:text-gray-300' target='_blank'>
                  Visit Website <ExternalLink className='w-4 h-4 ml-1'/>
                  </a>
            </div>
            
        </motion.li>
    ))
}
        </ul>


{
  sponsors.length>3 && (
    <Button onClick = {()=>setAllSpon(!showAllSpon)} variant= "outline"
    className= "dark:bg-[#1b1c1b] hover:bg-[#27282a] mt-3 ml cursor-pointer">
    {showAllSpon ? "Show Less" : "Show More"}
           </Button>
  )
}
    </CardContent>
</Card>
      </motion.aside>
    
    </div>
  )
}

export default RightSideBar
