
"use client"
import React, { useState } from 'react'
import LeftSideBar from '../component/LeftSideBar'
import RightSideBar from '../component/RightSideBar'
import StorySection from "../Story/StorySection"
import PostCard from '../post/PostCard'
import NewPostForm from '../post/NewPostForm'
function HomePage() {
const [isPostFormOpen , setPostForm] = useState(false);

const post = [{
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

]

  return (
    <div className='flex flex-col min-h-screen text-foreground'>
      
<main  className='flex flex-1 pt-16'>
  <LeftSideBar/>

  <div className='flex-1 px-4 md:ml-64 lg:mr-64 lg:max-w-2xl xl:max-w-2xl mx-auto'>
<div className='lg:ml-2 xl:ml-28'>
<StorySection/>

<NewPostForm
isPostFormOpen = {isPostFormOpen}
setPostForm = {setPostForm}
/>
<div className='mt-6 space-y-6'>

{
  post.map((post)=>(
<PostCard
key={post._id}
post = {post}
/>
  ))
}
</div>

</div>
  </div>

  <div className='hidden lg:block lg:w-64 xl:w-70 fixed right-0 top-16 bottom-0 overflow-y-auto p-4'>
<RightSideBar/>
  </div>
</main>

      </div>
      
    
  )
}

export default HomePage
