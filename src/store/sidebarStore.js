import { create } from "zustand"


const UseSidebar = create((set)=>(
    {
        isSideBarOpen : false,
        toggleS : ()=>set((state)=>({isSideBarOpen : !state.isSideBarOpen}))
    }
))

export default UseSidebar