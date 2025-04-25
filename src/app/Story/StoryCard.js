import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Plus } from 'lucide-react'
import React from 'react'

function StoryCard({isAddStory , story}) {
    const handleClickFunction = ()=>{

    }
  return (
    <>
    <Card
    className="w-40 h-50 relative overflow-hidden group cursor-pointer rounded-xl dark:bg-[#222121] bg-white  "
    onClick = {isAddStory ? undefined : handleClickFunction}
    >
        <CardContent
        className="p-0"
        >
{
    isAddStory ? (
        <div className='  h-full w-full flex flex-col'>
<div className='h-[120px] w-full  relative border-b'>
<Avatar>
<AvatarImage src="" alt="Profile" />
    <p className='w-full h-full flex items-center justify-center text-4xl'>H</p>
</Avatar>
</div>
<div className='h-[50px] flex flex-col  items-center justify-center'>
<Button variant = "ghost"
size = "sm"
className = "p-0 h-8 w-8  rounded-full bg-blue-500 hover:bg-blue-600 hover:dark:bg-blue-800 cursor-pointer"
>
    <Plus className='h-full w-full text-white'/>

</Button>
<p className='text-xs font-semibold mt-1'>Create Story</p>
</div>
<input
type='file'
accept='image/*,video/*'
className='hidden'
/>

        </div>
    ):(


        <>
        {
            story?.mediaType === 'image' ? (
                <img src={story?.mediaUrl} alt={story?.user?.username}
                
                className='w-full h-full object-cover'/>
                
            ):
            (
                <video src={story?.mediaUrl} alt={story?.user?.username}  className='w-full h-full object-cover'/>
            )
        }

        <div className='absolute ring-2 rounded-full top-2 left-2 ring-blue-500  py-[6px] px-[12px]'>
<Avatar>
<AvatarImage src="" alt="Profile" />
        <AvatarFallback>
R
        </AvatarFallback>
    
</Avatar>
        </div>
        <div className='absolute bottom-2 left-2 right-2'>
            <p className='text-white text-xs font-semibold truncate'>Rachit</p>
        </div>
        </>
    )
}
        </CardContent>
    </Card>
    </>
  )
}

export default StoryCard
