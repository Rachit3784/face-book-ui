"use client"
import React, { useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Clock, Send } from 'lucide-react'

import {AnimatePresence, motion} from "framer-motion"
import { Card, CardContent, CardHeader } from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import {  MessageCircle, MoreHorizontal, Share, Share2, ThumbsUp } from 'lucide-react'

import { Dialog , DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger  } from '@/components/ui/dialog'

import VidComments from './VidComments'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
function VidCard({post}) {

    
    const [shareDialogOpen , setshareDialogOpen] = useState(false);
    
    const [showComments , setShowComments] = useState(false)
        const handleShare = (app)=>{
        const url = generateShareLink() 
        let shareUrl;
        switch(app) {
        case "whatsapp":
        shareUrl = "https://web.whatsapp.com/"
        break;
        case "twitter" : 
        shareUrl = "https://x.com/?lang=en"  
            break;
        case "facebook" :
        shareUrl = "https://www.facebook.com/"
        break;
        case "linkedin":
        shareUrl = "https://www.linkedin.com/home?originalSubdomain=in"
        break;
        case "instagram" :
          shareUrl = "https://www.instagram.com/"
          break;
          case 'copy':
            navigator.clipboard.writeText(url)
            setshareDialogOpen(false)
            
            return;
            default : 
            return;
      }
      
      
      window.open(shareUrl,"_blanck")
      setshareDialogOpen(false)
      
        }
      
        const generateShareLink = ()=>{
      return `https://localhost:3000/${post?._id}`
        }

  return (
    <motion.div
    key={post?._id}
    initial = {{opacity : 0 , y : 20}}
    animate = {{opacity : 1 , y : 0}}
    transition={{duration : 0.5}}
    className='bg-white dark:bg-[rgb(36,37,38)] rounded-lg overflow-hidden shadow-lg mt-3'
    >
<div>

<div className='flex items-center justify-between mb-4 px-4 mt-6'>
    <div className='flex items-center '>
    <Avatar className={`h-10 w-10 mx-auto rounded-full mr-2 dark:bg-gray-400`}>
<AvatarImage />
<AvatarFallback>
R
</AvatarFallback>
      </Avatar>
      <span className='font-semibold'>Rachit Gupta</span>
    </div>

    <div className='flex items-center dark:text-gray-300  text-gray-500'> 
    <Clock className='h-4 w-4 mr-1'/>
    <span className='text-[10px] '>19/3/2025</span>
</div>
    </div>
<div className='relative aspect-video bg-black mb-4'>
{
    post?.mediaUrl && (
        <video controls  className="w-full h-100 mb-4 rounded-lg" >
      <source src={post?.mediaUrl}   alt = {post?.content}  />
    </video>
    )
}
</div>

<div className='flex justify-between items-center px-3'>

  <span className='text-sm text-gray-700 dark:text-gray-400 hover:border-b-2 border-gray-800 dark:border-gray-400
  cursor-pointer 
  '>2 likes</span>
<div className='flex gap-3'>
<span className='text-sm text-gray-700 dark:text-gray-400 hover:border-b-2 border-gray-800 dark:border-gray-400
  cursor-pointer 
  ' onClick={()=>setShowComments(!showComments)}>3 comments</span>
  <span className='text-sm text-gray-700 dark:text-gray-400 hover:border-b-2 border-gray-800 dark:border-gray-400
  cursor-pointer 
  '>2 share</span>

</div>

</div>

<Separator className={`mt-2`}/>
<div className='flex justify-between mt-1'>
  <Button variant="ghost" className={`flex bg-transparent cursor-pointer items-center`}>
<ThumbsUp/><span>like</span>
  </Button>

  <Button variant="ghost" className={`flex bg-transparent cursor-pointer  items-center`} 
  >
<MessageCircle/><span>comment</span>
  </Button>

    <Dialog  open = {shareDialogOpen} onOpenChange = {setshareDialogOpen} >
    <DialogTrigger asChild >
    <Button variant="ghost" className={`bg-transparent cursor-pointer items-center`}>
  <Share2 className='ml-2'/><span>share</span>
    </Button>
    </DialogTrigger>

    <DialogContent>
    <DialogHeader>
      <DialogTitle>
        Share This Post
      </DialogTitle>
      <DialogDescription>
        Choose How do You Want To Share The Post
      </DialogDescription>
    </DialogHeader>
    
    <div className='flex flex-col space-y-4'>
    <Button onClick = {()=>handleShare('copy')} className={`cursor-pointer`}> Copy </Button>
    <Button onClick = {()=>handleShare('facebook')} className={`cursor-pointer`}>Share on Facebook
    </Button>
    
    <Button onClick = {()=>handleShare('instagram')} className={`cursor-pointer`}>Share on Instagram</Button>
    
    <Button onClick = {()=>handleShare('twitter')} className={`cursor-pointer`}>Share on Twitter</Button>
    
    <Button onClick = {()=>handleShare('whatsapp')} className={`cursor-pointer`}>Share on Whatsapp</Button>
    
    <Button onClick = {()=>handleShare('linkedin')} className={`cursor-pointer`}>Share on Linkedin </Button>
    
    
      </div>
      </DialogContent>
    

  
  </Dialog>
  
</div>

<Separator className={`mt-2`}/>
<div className='m-2 ml-3'>
<AnimatePresence>
{
showComments && (
  <motion.div
 initial={{opacity : 0 , height : 0}}
 animate = {{opacity : 1, height : "auto"}}
 exit= {{opacity : 0 , height : 0}}
 transition={{duration : 0.3}}
 className='ml-1'
  >
<ScrollArea className={` fixed ${post.comments.length  !== 0 ? "h-[200px]" : "h-[55px]"} w-full p-2 rounded-md border-2 border-gray-300`}>
<VidComments
comments = {post.comments}
/>



<div className='flex w-full px-2 items-center mt-4 absolute bottom-1 right-0 left-0 bg-white dark:bg-[rgb(36,37,38)]'>
<Avatar className={`h-10 w-10 mx-auto rounded-full mr-2 dark:bg-gray-400`}>
<AvatarImage />
<AvatarFallback>
R
</AvatarFallback>
      </Avatar>

      <Input className={`flex-1  mr-2 border  border-black dark:border-[#2c2b2d] dark:bg-[#2a2b2b]`} />
      <Button className={`cursor-pointer bg-transparent`} variant = "ghost">
        <Send/>
      </Button>
</div>
</ScrollArea>
  </motion.div>
)
}

</AnimatePresence>
</div>



</div>

    </motion.div> )
}

export default VidCard
