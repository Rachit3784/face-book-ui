"use client"
import React, { useState } from 'react'
import LeftSideBar from '../component/LeftSideBar'
import { FriendCardSkeletom , NoFriendMessage} from '@/lib/skeleton'
import FriendRequest from './FriendRequest'
import FriendSuggestion from './FriendSuggestion'

const page = () => {
    const [isloading , setloading] = useState(false);
    const friendRequest = [{
name : "Rachit Gupta"
    }]
    const friendSuggestion = [{}]
  return (
    <div className='bg-[#e0dfdf] dark:bg-[#171718]'>
      <LeftSideBar/>
      <main className='ml-0 md:ml-64 p-6 mt-16'>
<h1 className='text-2xl font-bold mb-6'>Friend Request</h1>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
{
    isloading ? (
        <FriendCardSkeletom/>
    ) : friendRequest.length === 0 ? (<NoFriendMessage/>) : (
        
        friendRequest.map((friend,index)=>(
            <FriendRequest
            key = {index} friend = {friend}/>
        ))
        
    )
}

</div>


<h1 className='text-2xl font-bold mb-6'>People you may know</h1>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
{
    isloading ? (
        <>
       
        <NoFriendMessage/>
        </>
    ) :( friendSuggestion.length === 0 ? (<NoFriendMessage/>) : (
        
        friendSuggestion.map((friend,index)=>(
            <FriendSuggestion
            key = {index} friend = {friend}/>
        ))
        
    )
)
}

</div>
      </main>

    </div>
  )
}

export default page
