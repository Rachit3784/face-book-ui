import React from 'react'
import {motion} from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreHorizontal, UserX } from 'lucide-react'
function MutualFriends() {

    const mutualFriends = [
        {

        },{

        }
    ]
  return (
    <motion.div
    initial = {{opacity : 0 , y : 20}}
  animate = {{opacity : 1 , y : 0}}
  transition={{duration : 0.5}}
  className='mb-4'
    >
      <Card className={`dark:bg-[rgb(36,37,38)]`}>
        <CardContent>
        <h2 className='text-xl font-semibold mb-4'>Mutual Friends</h2>
  
        <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
  {
    mutualFriends.map((friend , index)=>(
  
      <div key={index}

      className='bg-white dark:bg-[rgb(54,55,56)]  p-4 rounded-lg flex items-start justify-between'>


        <div className='flex items-center space-x-4'>
        <Avatar className={` border-white dark:border-[#2b2b2e]`}>
<AvatarImage src="/" alt="Profile" />
        <AvatarFallback>
R
        </AvatarFallback>
    
</Avatar>

<div>
    <p className='font-semibold dark:text-gray-100'>Rachit Gupta</p>
    <p className='text-sm text-gray-500 dark:text-gray-400'>40M follower </p>
    </div>

 

        </div>

        <DropdownMenu>
        <DropdownMenuTrigger asChild>
<Button className={`sm:w-[65px] w-[45px] cursor-pointer hover:bg-gray-300`} variant={`ghost`} >
    <MoreHorizontal/>
</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align = 'end' className={`bg-gray-300 dark:bg-[rgb(44,45,46)]`}>
<DropdownMenuItem className={`cursor-pointer hover:dark:bg-[rgb(57,57,58)]`}>
  <UserX/> Unfollow
</DropdownMenuItem>

        </DropdownMenuContent>
    </DropdownMenu>
      </div>
    ))
  }
        </div>
        </CardContent>
      </Card>
    </motion.div> 
  )
}

export default MutualFriends
