
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { AnimatePresence  , motion} from 'framer-motion'
import { UserMinus, UserPlus } from 'lucide-react'
import React from 'react'

function FriendSuggestion() {
  return (
    <AnimatePresence>
    <motion.div
    initial = {{opacity : 0 , x : 50}}
    animate = {{opacity : 1 , x : 0}}
    transition={{duration : 0.4}}
    className='bg-white dark:bg-gray-600 rounded-lg p-4 shadow'
    >
      <Avatar className={`h-32 w-32 mx-auto rounded-full`}>
<AvatarImage />
<AvatarFallback>
R
</AvatarFallback>
      </Avatar>
<h3 className='text-lg font-semibold text-center mb-4'>Rachit Gupta</h3>

<div className='flex flex-col justify-between'>
<Button className={`bg-blue-600 cursor-pointer mb-2`}  onClick = {()=>{}} size={`lg`} >
<UserPlus className=' h-4 w-4'/><span>AddFriend</span>
</Button>


</div>
    </motion.div>
  </AnimatePresence>
  )
}

export default FriendSuggestion
