"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UseSidebar from "@/store/sidebarStore";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Bell, Home, Lightbulb, LogOut, Menu, MenuIcon, MessageCircle, Moon, Search, Sun, User, Video } from "lucide-react";
import {useTheme} from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Header() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const {theme,setTheme} = useTheme()
  const {isSideBarOpen,toggleS} = UseSidebar()
  const router = useRouter();
  const handleNavigation = (path,item)=>{
router.push(path)
  }
  return (
    <header
      className="bg-white dark:bg-[rgb(36,37,38)] 
   text-foreground shadow-md h-16 fixed left-0 right-0 top-0 z-50 p-2
   "
    >
      <div className="mx-auto flex  items-center p-2  ">
        <div className="flex items-center w-full md:gap-4 justify-between">

        <div className="flex items-center gap-2 md:gap-4">

        
          <Image
            
            src="/images/Facebook_Logo.png"
            width={40}
            height={40}
            alt="facebook_logo"
            className="cursor-pointer"
            onClick={()=>handleNavigation("/")}
          />

          <div className="relative ">


            <form>
              <div className="relative">
                <Search
                  className="absolute left-2 top-1/2 transform -translate-y-1/2  text-gray-400 "
                  onClick={setSearchOpen}
                />

                <Input
                  className="h-10 w-40 md:w-64 pl-8 bg-gray-50 dark:bg-rgb-[rgb(58,59,60)] rounded-[10px]"
                  placeholder=" Search facebook .."
                />

                {isSearchOpen && (
                  <div
                    className="absolute top-full left-0 w-full bg-white dark:bg-[#262629]
                                      rounded-md shadow-lg mt-1 z-50
                                    "
                  >
                    <div className="p-1 ">
                        
                      <div className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-[#3e3e41]
                      cursor-pointer rounded-[4px] px-1 p-1 
                      " >
                        <Search
                        className="text-gray-600 text-sm "
                            />
<div className="flex items-center gap-2 ">
<Avatar>
    <AvatarImage src= "/images/Facebook_Logo.png" width={20} height={20} />
<AvatarFallback>

</AvatarFallback>
</Avatar>
<span>Rachit Gupta</span>


</div>

                      </div>

                    </div>
                  </div>
                )}


              </div>
            </form>


          </div>
          </div>
          
<nav className="hidden md:flex justify-around w-[40%] max-w-md">
{
    [
        {icon : Home , path : "/" , name: "Home"},
        {icon : Video , path : "/WatchVideoFeed" , name: "videp"},
        {icon : User , path : "/friendList" , name: "friends"},
    ].map((item,index)=>(

<Button key={index} variant= "ghost" 
 className= "bg-transparent dark:hover:text-white hover:dark:bg-transparent  w-[80] h-[40] cursor-pointer text-gray-600 relative  dark:text-gray-400 hover:text-blue-600 hover:bg-transparent" 
onClick = {()=>(handleNavigation(item.path))}

>
<item.icon/>
</Button>

    ))
}
</nav>


{/* user profile start */}

<div className="flex items-center space-x-2 md:space-x-4 ">
<Button onClick={toggleS} className= "md:hidden text-gray-700 hover:dark:bg-transparent bg-transparent cursor-pointer hover:dark:text-white  dark:text-gray-400" variant= "ghost" >
  <MenuIcon/>
  

</Button>
<Button  className= "hidden md:block hover:dark:bg-transparent  text-gray-700  hover:dark:text-white bg-transparent dark:text-gray-400 cursor-pointer" variant= "ghost" >
  <Bell/>

</Button>
<Button className= "hidden md:block hover:dark:bg-transparent  text-gray-700  hover:dark:text-white bg-transparent dark:text-gray-400 cursor-pointer" variant= "ghost" >
  <MessageCircle/>

</Button>

<DropdownMenu >
  <DropdownMenuTrigger asChild>
<Button variant="ghost" className= "relative h-8 w-8 rounded-full">
<Avatar>
  <AvatarImage src="/images/Facebook_Logic.png" />
  <AvatarFallback className='dark:bg-gray-500 dark:py-[6px] dark:px-[12px]   dark:rounded-full'>
    R
  </AvatarFallback>
</Avatar>
</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-64 z-50 bg-[#f8f9fb] shadow-md rounded-[7px] p-2 dark:bg-[#2b2b2e]" align="end">
<DropdownMenuLabel className="font-normal ">
<div className="flex flex-col space-y-1  p-2 " >
  <div className="flex items-center gap-3 " >
  <Avatar>
  <AvatarImage/>
  <AvatarFallback className="dark:bg-gray-400" >
    R
  </AvatarFallback>
</Avatar>
<div>
  <p className="text-sm leading-none font-medium" >
Rachit
  </p>
  <p className="text-sm leading-none font-medium" >
Rachit@gmail.com
  </p>
</div>
</div>

</div>
</DropdownMenuLabel>

<DropdownMenuSeparator />

<DropdownMenuItem className="my-1 p-1 items-center flex cursor-pointer"  onClick={()=>handleNavigation(`/userProfile`)}>
    <User className="inline size-5" /> <span className="ml-2">Profile</span>
  </DropdownMenuItem>
  <DropdownMenuSeparator />
  <DropdownMenuItem className="my-1 p-1 items-center flex cursor-pointer">
    <MessageCircle className="inline size-5" /> <span className="ml-2">Message</span>
  </DropdownMenuItem>
  <DropdownMenuSeparator />
  <DropdownMenuItem 
  className="my-1 p-1 items-center flex cursor-pointer"
  onClick={() => setTheme(theme && theme.trim() === 'dark' ? 'light' : 'dark')}
>
  {theme === "light" ? (
    <>
      <Moon className="inline size-5" /> <span className="ml-2">Dark</span>
    </>
  ) : (
    <>
      <Sun className="inline size-5" /> <span className="ml-2">Light</span>
    </>
  )}
</DropdownMenuItem>

  <DropdownMenuSeparator />
  <DropdownMenuItem className="my-1 p-1 items-center flex cursor-pointer">
    <Bell className="inline size-5" /> <span className="ml-2">Notification</span>
  </DropdownMenuItem>

  <DropdownMenuItem className="my-1 p-1 items-center flex cursor-pointer">
    <LogOut className="inline size-5" /> <span className="ml-2">LogOut</span>
  </DropdownMenuItem>
  </DropdownMenuContent>
  
</DropdownMenu>



</div>

        </div>
      </div>
    </header>
  );
}

export default Header;
