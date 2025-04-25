import { Button } from '@/components/ui/button'
import UseSidebar from '@/store/sidebarStore'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Bell, HomeIcon, MessageCircle, User, User2, UserCircle2Icon, UserIcon, Video } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

function LeftSideBar() {
  const {isSideBarOpen,toggleS} = UseSidebar()

   const router = useRouter();
    const handleNavigation = (path,item)=>{
  router.push(path)
    }


  return (
    <aside className={`top-16 left-0 p-3 h-full fixed transform transition-transform duration-200 md:translate
    ease-in-out z-50 md:z-0 flex flex-col ${isSideBarOpen ? "translate-x-0 bg-white dark:bg-[rgb(36,37,38)]  md:bg-transparent md:shadow-none " : "-translate-x-full" } ${isSideBarOpen ? "xl:bg-transparent md:shadow-none lg:bg-transparent" : "md:translate-x-0"}
    
    `}>
<div className='flex flex-col overflow-y-auto  justify-items-start h-full' >
<nav className='space-y-2 mt-2 flex-col  flex-grow'>
    <div className='flex items-center gap-[5px] cursor-pointer'>
        <Avatar>
            <AvatarImage/>
            <AvatarFallback className='dark:bg-gray-500 py-[6px] px-[12px]   rounded-full'>
                R
            </AvatarFallback>
        </Avatar>
        <span className='font-semibold'>Rachit Gupta</span>

    </div>

   
        
    <Button className="bg-transparent cursor-pointer flex items-center gap-2  " variant="ghost"
    onClick = {()=>handleNavigation("/")}
    >
              
              <HomeIcon size={23}/><span className='font-semibold '>Home</span>
            </Button>
            <Button className="bg-transparent cursor-pointer flex items-center gap-2  " variant="ghost"
            onClick = {()=>handleNavigation("friendList")}
            >
              
              <User size={23}/><span className='font-semibold '>User</span>
            </Button>
            <Button className="bg-transparent cursor-pointer flex items-center gap-2 " variant="ghost"
            onClick = {()=>handleNavigation("WatchVideoFeed")}
            >
              
              <Video size={23}/><span className='font-semibold '>Video</span>
            </Button>
            <Button className="bg-transparent cursor-pointer flex items-center gap-2  " variant="ghost"
            onClick = {()=>handleNavigation("")}
            >
              
              <MessageCircle size={23}/><span className='font-semibold '>Messages</span>
            </Button>
            <Button className="bg-transparent cursor-pointer flex items-center gap-2  " variant="ghost"
            onClick = {()=>handleNavigation(`userProfile`)}
            >
              
              <UserCircle2Icon size={23}/><span className='font-semibold '>Profile</span>
            </Button>
            <Button className="bg-transparent cursor-pointer flex items-center gap-2  " variant="ghost"
            onClick = {()=>handleNavigation("")}
            >
              
              <Bell size={23}/><span className='font-semibold '>Notifications</span>
            </Button>



    



</nav>


{/* footer Section */}


<div className='mb-16'>

<div className='flex items-center gap-[5px] cursor-pointer'>
        <Avatar>
            <AvatarImage/>
            <AvatarFallback className='dark:bg-gray-500 py-[6px] px-[12px]   rounded-full'>
                R
            </AvatarFallback>
        </Avatar>
        <span className='font-semibold'>Rachit Gupta</span>

    </div>
    <Separator/>

    <p className='text-[12px] ml-[10px]'>privacy policy</p>

</div>

<div>

</div>

</div>

    </aside>
  )
}

export default LeftSideBar
