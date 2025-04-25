"use client"
import React, { useState } from 'react'
import PostContent from './PostContents/PostContent'
import { Card, CardContent } from '@/components/ui/card'
import { Briefcase, Cake, GraduationCap, Heart, Home, Mail, MapPin, Phone, Rss, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {motion } from "framer-motion"
import MutualFriends from './PostContents/MutualFriends'
import EditBio from './PostContents/EditBio'
function ProfileDetail({activeTab}) {

    const  [isEditBioModel , setEditBioModel] = useState(false)


    const userPost = [{
        _id : 1,
        content : "Hello World",
        mediaUrl : "/images/cheeta.jpg",
        mediaType : "image",
        comments : [
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          
          ]
        
      },{
        _id : 2 , 
        content : "Batman Gotham" ,
        mediaUrl : "/images/MenAreBrave.mp4",
        mediaType : "video"
      },
      {
        _id : 3 , 
        content : "Batman Gotham" ,
        mediaUrl : "/images/BatmanVSuperMan.mp4",
        mediaType : "video"
      },
      {
        _id : 4 , 
        content : "Batman Gotham" ,
        mediaUrl : "/images/CapEnd.mp4",
        mediaType : "video"
      },
      {
        _id : 5 , 
        content : "Batman Gotham" ,
        mediaUrl : "/images/CapViron.mp4",
        mediaType : "video"
      },
      {
        _id : 6,
        content : "Hello World",
        mediaUrl : "/images/dodge.jpg",
        mediaType : "image",
        comments : [

          ]
        
      },
      {
        _id : 7,
        content : "Hello World",
        mediaUrl : "/images/dodgechalanger.jpg",
        mediaType : "image",
        comments : []
      },
      {
        _id : 1,
        content : "Hello World",
        mediaUrl : "/images/cheeta.jpg",
        mediaType : "image",
        comments : [
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          
          ]
        
      },
      {
        _id : 1,
        content : "Hello World",
        mediaUrl : "/images/cheeta.jpg",
        mediaType : "image",
        comments : [
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          
          ]
        
      },
      {
        _id : 1,
        content : "Hello World",
        mediaUrl : "/images/cheeta.jpg",
        mediaType : "image",
        comments : [
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          
          ]
        
      },
      {
        _id : 1,
        content : "Hello World",
        mediaUrl : "/images/cheeta.jpg",
        mediaType : "image",
        comments : [
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          {
            text : "Batman : Men are brave",
            username : "Rachit",
            createdAt : "19/3/2025"
      
          },
          
          ]
        
      }
      ]
      
    const tabContent = {
        post : (
            <div  className='flex flex-col lg:flex-row gap-2 mb-4'>
            <div className='w-full lg:w-[70%] space-y-6'>
{
    userPost?.map((post)=>(
        <PostContent key={post?._id} post = {post}/>
    ))
}
                </div>
<div className='w-full lg:w-[30%]'>
<Card className={`dark:bg-[rgb(36,37,38)] shadow-md`}>
    <CardContent className={`p-6`}>
        <h2 className='text-xl font-semibold mb-4'>Intro</h2>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>This is Rachit The Boss</p>
        <div className='space-y-2 mb-4'>

        <div className='flex items-center gap-1.5'>
            <Home className='w-5 h-5'/>
            <span>Live In Govraon Kalan</span>
            </div>
            <div className='flex items-center gap-1.5'>
            <Heart className='w-5 h-5'/>
            <span>Single No Psychological Disorder</span>
            </div>
            <div className='flex items-center gap-1.5'>
            <MapPin className='w-5 h-5'/>
            <span>Work From Home</span>
            </div>
            <div className='flex items-center gap-1.5'>
            <Briefcase className='w-5 h-5'/>
            <span>Self Startup</span>
            </div>

            <div className='flex items-center gap-1.5'>
            <GraduationCap className='w-5 h-5'/>
             <span > 
                Study at <span className='font-semibold'>Youtube College of Technology , Online</span></span>
                
            </div>


        </div>
        <div className='flex items-center gap-1.5'>
            <Rss className='w-5 h-5'/>
            <span>Followed by 9 crore million </span>
            </div>
<Button className = 'w-full cursor-pointer mt-2' onClick = {()=>setEditBioModel(true)}>
Edit Bio
</Button>
    </CardContent>
</Card>
</div>
</div>

  ),

about : (
  <motion.div
  initial = {{opacity : 0 , y : 20}}
animate = {{opacity : 1 , y : 0}}
transition={{duration : 0.5}}
className='mb-4'
  >

<Card className={`dark:bg-[rgb(36,37,38)] shadow-md`}>
    <CardContent className={`p-6`}>
        <h2 className='text-xl font-semibold mb-4'>About { " "} Rachit Boss</h2>
        
        <div className='space-y-4 '>
        <div className='flex items-center gap-1.5'>
            <Briefcase className='w-5 h-5'/>
            <span>Self Startup</span>
            </div>

  
            <div className='flex items-center gap-1.5'>
            <GraduationCap className='w-5 h-5'/>
             <span > 
                Study at <span className='font-semibold'>Youtube College of Technology , Online</span></span>
                
            </div>

        <div className='flex items-center gap-1.5'>
            <Home className='w-5 h-5'/>
            <span>Live In Govraon Kalan</span>
            </div>

            <div className='flex items-center gap-1.5'>
            <Heart className='w-5 h-5'/>
            <span>Single No Psychological Disorder</span>
            </div>

            <div className='flex items-center gap-1.5'>
            <MapPin className='w-5 h-5'/>
            <span>Work From Home</span>
            </div>

            <div className='flex items-center gap-1.5'>
            <Phone className='w-5 h-5'/>
            <span>9009634404,8817998451</span>
            </div>
            
            <div className='flex items-center gap-1.5'>
            <Mail className='w-5 h-5'/>
            <span>grachit736@gmail.com</span>
            </div>
         
            <div className='flex items-center gap-1.5'>
            <Cake className='w-5 h-5'/>
            <span> DOB : 3/8/2004</span>
            </div>
         

            <div className='flex items-center gap-1.5'>
            <Rss className='w-5 h-5'/>
            <span>Followed by 9 crore million </span>
            </div>
        </div>
        

    </CardContent>
</Card>

  </motion.div>
),

friends : (
  <MutualFriends/>
),

photos : (
  <motion.div
  initial = {{opacity : 0 , y : 20}}
animate = {{opacity : 1 , y : 0}}
transition={{duration : 0.5}}
className='mb-4'
  >
    <Card>
      <CardContent>
      <h2 className='text-xl font-semibold mb-4'>Photos</h2>

      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1'>
{
  userPost?.filter((post)=>post?.mediaType === 'image' && post?.mediaUrl).map((post)=>(

    <div className='overflow-hidden  rounded-[3px]' key={post?._id}>
      <img src={post?.mediaUrl} className=' object-cover' alt = 'userPhotos'
      />
    </div>
  ))
}
      </div>
      </CardContent>
    </Card>
  </motion.div>
)


    }



  return (
    <div className=''>
        
      {
        tabContent[activeTab]
      }

      <EditBio
      isOpen = {isEditBioModel}
      onClose = {()=>setEditBioModel(false)}
      />

     
    </div>
  )
}

export default ProfileDetail
