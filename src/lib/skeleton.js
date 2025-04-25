import React from 'react'
import { motion } from "framer-motion"
import { UserX } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

export const FriendCardSkeletom = () => {
  return (
    <div >
      <Skeleton className={`h-24 w-24 rounded-full mx-auto mb-4`}/>
      <Skeleton className={`h-4 w-4/5 mx-auto mb-2`}/>
      <Skeleton className={`h-6 w-full mb-2`}/>
      <Skeleton className={`h-6 w-full`}/>
    </div>
  )
}

export const NoFriendMessage = () => {
  return (
    <>
      <motion.div
        initial = {{opacity : 0 , y : 0}}
        animate = {{opacity : 1 , y : 20}}
        exit = {{opacity : 0 , y : 0}}
        transition={{duration : 0.5}}
        className='flex flex-col items-center justify-center w-full p-8 '
      >
        <UserX size={64} className='text-gray-400 mb-4 '/>
        <h3 className='text-2xl font-semibold mb-2'>No Friends Request</h3>
        <p className='text-gray-500 dark:text-gray-400'>Looks Like You&apos;re all caught up! why not explore
            and connect with new people
        </p>
      </motion.div>
    </>
  )
}