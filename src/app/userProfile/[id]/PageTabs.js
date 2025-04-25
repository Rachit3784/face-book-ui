"use client"
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'
import ProfileDetail from './ProfileDetail'

function PageTabs() {
  const [activeTab , setActiveTab] = useState('post')
  return (
    <div className='max-w-6xl w-full mx-auto  px-4 sm:px-6 lg:px-8 mt-8'>
      <Tabs defaultValue = "post"
      onValueChange = {setActiveTab}
      
      >


        <TabsList className={`grid grid-cols-4 w-full dark:bg-[rgb(36,37,38)]`}>
          <TabsTrigger className={`cursor-pointer`} value = "post">Posts</TabsTrigger>
          <TabsTrigger className={`cursor-pointer`} value = "about">About</TabsTrigger>
          <TabsTrigger className={`cursor-pointer`} value = "friends">Friends</TabsTrigger>
          <TabsTrigger className={`cursor-pointer`} value = "photos">Photos</TabsTrigger>

        </TabsList>
        <div className='mt-6'>
        <ProfileDetail activeTab = {activeTab} />
      </div>
      </Tabs>

      

    </div>
  )
}

export default PageTabs
