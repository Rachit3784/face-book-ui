import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useRef, useState } from 'react'

function PostComments({post}) {

  const [showAllComments , setShowAllComments] = useState(false);
  const visibleComments  = showAllComments ? post?.comments : post?.comments?.slice(0,2);



  
  return (
    <div className='mt-4'>
<h3 className='font-semibold mb-2 '>Comments</h3>
<div className='max-h-60 overflow-y-auto pr-2'>
  
  {
  visibleComments?.map((comments,index)=>(
    <AnimatePresence>

   
<motion.div
initial={{opacity : 0 , height : 0}}
animate = {{opacity : 1, height : "auto"}}
exit= {{opacity : 0 , height : 0}}
transition={{ duration: 0.5, ease: "easeInOut"}}
key = {index}

>

    <div  className='flex  flex-col items-start space-y-2 '>


<div  className='flex items-start space-x-2 '>

<div>
        <Avatar className={`h-7 w-7  rounded-full  dark:bg-gray-400`}>
        <AvatarImage />
        <AvatarFallback>
        R
        </AvatarFallback>
              </Avatar>
        </div>
        
        
        <div className='dark:bg-[#3b3b3d] rounded-lg p-2 bg-[rgb(238,247,226)]'>
            <p>{comments?.username}</p>
            <p>{comments?.text}</p>
        </div>



       

</div>


<div className='flex items-center ml-7 text-gray-500 text-xs'>
                    <Button variant = "ghost" size = "sm" >
                    Like 
                    </Button>
                    <Button variant = "ghost" size = "sm" >
                    Reply
                    </Button>
                    <span>{comments?.createdAt}</span>
                    </div>

</div>



</motion.div>
</AnimatePresence>
  ))
}


  

</div>



<div>
{
  post?.comments?.length > 2 && (
    <p className='w-40 mt-2 text-blue-500 dark:text-gray-300 cursor-pointer'
    onClick={()=>setShowAllComments(!showAllComments)}>
{
  showAllComments ? "Show Less Comments" : "Show All Comments"
}
    </p>
  )
}

</div>


    </div>
  )
}

export default PostComments
