"use client"
import React, { useState } from 'react'
import LeftSideBar from '../component/LeftSideBar'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import VidCard from './VidCard'
import RightSideBar from '../component/RightSideBar'


function page() {
    const videoPost  = [{
mediaUrl : "/images/MenAreBrave.mp4",
comments : [
{
    user : {
        text : "Batman : Men are brave",
        username : "Rachit",
        createdAt : "19/3/2025"


    }
}
]
    },]
    
  return (
    <div className='mt-12 min-h-screen '>
      <LeftSideBar/>
      
<main className='ml-0 md:ml-64 p-6'>

<Button variant={`ghost`} className={`mb-1`}>
    <ChevronLeft/><span>Back to Feed</span>
</Button>

<div className='flex items-start justify-start'>
<div className='w-3xl'>

{
    videoPost.map((post , index)=>(
      
<VidCard post = {post} key={index}/>
     


      
        
    )
    )
}

</div>

</div>

</main>

    </div>
  )
}

export default page
