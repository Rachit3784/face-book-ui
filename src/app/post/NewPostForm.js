import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { ImageIcon, Plus, Smile, VideoIcon, X } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'

import dynamic from 'next/dynamic'

const Picker = dynamic(()=>(import('emoji-picker-react')),{ssr:false})

const NewPostForm = ({ isPostFormOpen, setPostForm }) => {

  const [filePreview , setfilePreview] = useState(null);
  const [showEmojiPicker , setEmojiPicker] = useState(false);
const [postContent , setPostContent] = useState('');
  const handleEmojiPicker = (emojiObject)=>{
    setPostContent(prev=>prev+emojiObject.emoji)
  }
    return (
    <Card className="dark:bg-[#222121] bg-white ">
      <CardContent className="p-4">
        <div className="flex space-x-4">
          <Avatar>
            <AvatarImage src="" alt="Profile" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
          
          <Dialog open={isPostFormOpen} onOpenChange={setPostForm}>
            <DialogTrigger asChild className="w-full">
              <div className="w-full">
                <Input
                  placeholder="What's on your mind"
                  readOnly
                  className="cursor-pointer rounded-full h-12 border border-[#1f1e1e] dark:border-gray-800 dark:bg-[rgb(58,59,60)] placeholder:text-gray-800 dark:placeholder:text-gray-400"
                />
                
                <Separator className="my-2 h-[0.4px] dark:bg-[#34343a] bg-[#a7a8a9]" />
                
                <div className="flex justify-between">
                  <Button variant="ghost" className="flex items-center justify-center cursor-pointer">
                    <ImageIcon className="mr-2 h-5 w-5 text-green-700" />
                    <span>Photo</span>
                  </Button>
                  
                  <Button variant="ghost" className="flex items-center justify-center cursor-pointer">
                    <VideoIcon className="mr-2 h-5 w-5 text-red-700" />
                    <span>Video</span>
                  </Button>
                  
                  <Button variant="ghost" className="flex items-center justify-center cursor-pointer">
                    <Smile className="mr-2 h-5 w-5 text-yellow-700" />
                    <span>Smile</span>
                  </Button>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[525px] max-h-[80vh] dark:bg-[#202023] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-center">Create Post</DialogTitle>
                <DialogDescription>
                  Share what's on your mind with your friends
                </DialogDescription>
              </DialogHeader>
              <Separator className="my-2 h-[0.4px] dark:bg-[#34343a] bg-[#a7a8a9]" />
              <div className='flex items-center space-x-3 py-3'>
              <Avatar className="h-10 w-10">
            <AvatarImage src="" alt="Profile" />
            <AvatarFallback className="dark:bg-gray-400">R</AvatarFallback>
          </Avatar>
          <div>
            <p className='font-semibold'>
Rachit Gupta
            </p>
          </div>
              </div>
              <Textarea placeholder = "Whats on your mind"
              className="min-h-[100px] text-lg"/>
                <AnimatePresence 
                >
                  <motion.div
                  initial = {{opacity : 0 ,height : 0}}
                  animate = {{opacity : 1 , height :"auto"}}
                  exit = {{opacity:0,height : 0}}
                  
                  className='relative mt-4  border-2 border-dashed p-8  justify-center items-center flex flex-col rounded-lg'
                  >
<Button
variant="ghost"
size = "icon"
className="absolute top-2 right-2"
>
  <X className='w-4 h-4'/>
</Button>
{
  filePreview ? (
    fileType.startstWith("image") ?  (<img/>) : (<video/>)
  ) : (
    <>
    <Plus className='h-12 w-12 text-gray-500 cursor-pointer'/>
    <p className='text-gray-700 text-center '>Add Photos/Videos</p>
    </>
  )
}
<input type='file' accept='image/* video/*' className='hidden'/>
                  </motion.div>

                </AnimatePresence>
              <div className='p-4 bg-gray-200 mt-4 dark:bg-muted rounded-lg'>
<p className='mb-2 font-semibold text-center'>Add Your Post</p>


<div className="flex justify-between">
                  <Button variant="ghost" className="flex items-center justify-center cursor-pointer">
                    <ImageIcon className="h-5 w-5 text-green-700" />
                    
                  </Button>
                  
                  <Button variant="ghost" className="flex items-center justify-center cursor-pointer">
                    <VideoIcon className="h-5 w-5 text-red-700" />
                    
                  </Button>
                  
                  <Button variant="ghost" className="flex items-center justify-center cursor-pointer"
                  onClick = {()=>setEmojiPicker(!showEmojiPicker)}
                  >
                    <Smile className="h-5 w-5 text-yellow-700" />
                    
                  </Button>
                </div>


              </div>

              {
                showEmojiPicker && (
                  <motion.div
                  initial = {{opacity : 0 ,y : 20}}
                  animate = {{opacity : 1 , y :0}}
                  exit = {{opacity:0,y : 20}}
                  className='relative'
                  >
<Button
variant="ghost"
size = "icon"
className="absolute top-2 right-2 z-10 cursor-pointer"
onClick={()=>setEmojiPicker(false)}
>
  <X className='w-4 h-4' />
</Button>
<Picker onEmojiClick={handleEmojiPicker}/>
                  </motion.div>
                )
              }

              <div className='flex justify-end mt-4'>
<Button className="bg-blue-500 text-white cursor-pointer" >
  POST
</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}

export default NewPostForm