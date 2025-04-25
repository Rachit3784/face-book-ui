"use"
import React, { useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar  , AvatarImage , AvatarFallback} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {  MessageCircle, MoreHorizontal, Share, Share2, ThumbsUp } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Dialog , DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger  } from '@/components/ui/dialog'
import PostComments from '@/app/post/PostComments'
function PostContent({post}) {

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
    >
      <Card className="dark:bg-[#222121] bg-white  ">
        <CardContent className="items-center">
<div className='flex mb-4 items-center justify-between'></div>
<div className='flex items-center  space-x-3 justify-between cursor-pointer'>
<div className='flex items-center  space-x-3 cursor-pointer'>
<Avatar>
<AvatarImage src="" alt="Profile" />
        <AvatarFallback>
R
        </AvatarFallback>
    
</Avatar>
<div>
  <p className='font-semibold'>Rachit Gupta</p>
  <p className='font-sm text-gray-700 dark:text-gray-300'>19-3-2025</p>
</div>
</div>
<Button variant="ghost" className="hover:dark:bg-[#565658] cursor-pointer " >
  <MoreHorizontal />

</Button>
</div>


{
  post?.mediaUrl && post?.mediaType === 'image' && (
    <>
    <img src={post?.mediaUrl} alt = {post?.content} className='w-full h-full mt-4 mb-4 rounded-lg'/>
    </>
  ) }
  
{
    post?.mediaUrl && post?.mediaType === 'video' && (
    <div className='aspect-video'>
    
    <video controls  className="w-full h-100 my-4 rounded-lg" >
      <source src={post?.mediaUrl}   alt = {post?.content}  />
    </video>
    </div>
  )
}

<div className='flex justify-between items-center'>

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

  <Button variant="ghost" className={`flex bg-transparent cursor-pointer  items-center`}>
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
<Separator className={`mt-2 h-1`}/>
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
<PostComments
post = {post}
/>
  </motion.div>
)
}

</AnimatePresence>

        </CardContent>

       
      </Card>
   </motion.div>

  )
}

export default PostContent
