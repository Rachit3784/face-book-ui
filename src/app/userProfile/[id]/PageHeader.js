"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AnimatePresence , motion } from 'framer-motion'


import { Camera, PenLine, Save, Upload, X } from 'lucide-react'
import React, { useState } from 'react'

function PageHeader() {
const [iseditprofileModel , setEditProfileModel] = useState(false)
const [editCoverModel , setCoverModel] = useState(false)
const [coverPreview , setcoverPreview] = useState(false)
  return (
    <div className="max-w-full relative">

      <div className="relative overflow-hidden h-64 md:h-80">
        <img
          src="" ///images/dodgechalanger.jpg
          alt="cover"
          className="h-full w-full object-cover bg-amber-200"
        />
       <Button className={`absolute right-4 bottom-4 cursor-pointer flex items-center`} 
        onClick = {()=>setCoverModel(!editCoverModel)} 
       variant={`secondary`}>
        <Camera/><span className='hidden' >Edit Your Cover Photo</span>
</Button>
      </div>
{/* profileSection */}



<div className='max-w-6xl mx-auto  items-center  px-6 sm:px-4 lg:px-8 -mt-15 sm:-mt-25
 relative z-10'>
  
    <div className=' sm:flex-row sm:gap-2 flex flex-col'>

    <Avatar className={` h-25 w-25 sm:h-45 sm:w-45  border-4  border-white dark:border-[#2b2b2e]`}>
<AvatarImage src="" alt="Profile" />
        <AvatarFallback>
R
        </AvatarFallback>
    
</Avatar>


<div className='flex  sm:flex-1 sm:flex-row flex-col items-start sm:items-center justify-between md:pt-18 sm:mt-0 sm:pt-10 '>



<div className='sm:mt-8 md:mt-0 md:text-left flex flex-col justify-center  sm:items-start items-center'>
<h1 className='sm:text-3xl font-bold text-1xl'>Rachit Gupta</h1>
<span className='text-gray-400 font-semibold'>4.9k friends</span>
</div>

<div className='border md:pt-0  sm:pt-5 flex '>
<Button  className={`cursor-pointer`} onClick = {()=>setEditProfileModel(!iseditprofileModel)}>
<PenLine className='h-15 w-15'/>
<span className='sm:text-[13px] text-[11px]'> Edit Profile</span>
</Button>
</div>

</div>

    </div>


   


    </div>


{/* edit profile model */}

<AnimatePresence>

{
  iseditprofileModel && (
    <motion.div
    initial = {{opacity : 0 }}
    animate = {{opacity : 1}} 
    exit={{opacity : 0}}
    className='fixed inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center z-50'
    >  
       <motion.div
    initial = {{ scale : 0.9 , y : 20 }}
    animate = {{scale : 1 , y : 0} } 
    exit={{scale : 0.9 , y : 20}}
    className=' bg-white  dark:bg-[rgb(36,37,38)] rounded-lg shadow-xl w-full p-6 max-w-md'
    >
      <div className='flex justify-between items-center mb-4'>
<h2 className='text-2xl font-bold dark:text-gray-300 text-gray-800'>
Edit Profile
</h2>
<Button className={`cursor-pointer`} onClick = {()=>setEditProfileModel(!iseditprofileModel)} variant={`ghost`}>
  <X/>
</Button>

      </div>
<form className='space-y-4'>
  <div className='flex flex-col items-center gap-1 mb-4'>

    <Avatar className={`w-24 h-24  border-4  border-white dark:border-[#2b2b2e]`}>
      <AvatarImage/>
      <AvatarFallback>
        R
      </AvatarFallback>
    </Avatar>

    <input type='file' accept='image/*' className='hidden'/>

<Button type = 'button' variant={`outline`} size={`sm`} className={`mt-1  cursor-pointer`}> 

<Upload/><span>Change Profile Picture</span>
</Button>
  </div>

<div className='flex flex-col items-start gap-2'>
<Label htmlFor = 'username'>Username</Label>
<Input id = "username"/>

</div>
  

<div className='flex flex-col items-start gap-2'>
<Label htmlFor = 'dob'>Date of Birth</Label>
<Input id = "dob" type={`date`}/>

</div>


<div className='flex flex-col  gap-2'>
<Label htmlFor = 'gender'>Gender</Label>
<Select>
  <SelectTrigger className = "w-full">
    <SelectValue placeholder = "Select Gender"/>
  </SelectTrigger>
  <SelectContent>
    <SelectItem value = "male">Male</SelectItem>
    <SelectItem value = "female">Female</SelectItem>
    <SelectItem value = "other">other</SelectItem>
  </SelectContent>
</Select>

</div>
<Button type = 'submit' className={`w-full cursor-pointer text-white bg-blue-600 hover:bg-blue-400`}>
 <Save/> <span>Save Changes</span>
</Button>
</form>
      
    </motion.div>
      
    </motion.div>
  )
}
</AnimatePresence>

{/* edit cover model  */}

<AnimatePresence>

{
  editCoverModel && (
    <motion.div
    initial = {{opacity : 0 }}
    animate = {{opacity : 1}} 
    exit={{opacity : 0}}
    className='fixed inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center z-50'
    >  
       <motion.div
    initial = {{ scale : 0.9 , y : 20 }}
    animate = {{scale : 1 , y : 0} } 
    exit={{scale : 0.9 , y : 20}}
    className=' bg-white  dark:bg-[rgb(36,37,38)] rounded-lg shadow-xl w-full p-6 max-w-md'
    >
      <div className='flex justify-between items-center mb-4'>
<h2 className='text-2xl font-bold dark:text-gray-300 text-gray-800'>
Edit Cover
</h2>
<Button className={`cursor-pointer`} onClick = {()=>setCoverModel(!editCoverModel)} variant={`ghost`}>
  <X/>
</Button>

      </div>
<form className='space-y-4'>
  <div className='flex flex-col items-center gap-1 mb-4'>

   {
    coverPreview && (
      <img src='' alt = "coverPhoto" className='w-full h-40 object-cover mb-4 rounded-lg'/>
    )
   }
    <input type='file' accept='image/*' className='hidden'/>

<Button type = 'button' variant={`outline`} size={`sm`} className={`mt-1  cursor-pointer`}> 

<Upload/><span>Change Cover Picture</span>
</Button>
  </div>

 
<Button type = 'submit' className={`w-full cursor-pointer text-white bg-blue-600 hover:bg-blue-400`}>
 <Save/> <span>Save Cover Photo</span>
</Button>
</form>
      
    </motion.div>
      
    </motion.div>
  )
}
</AnimatePresence>


    </div>
  )
}

export default PageHeader
