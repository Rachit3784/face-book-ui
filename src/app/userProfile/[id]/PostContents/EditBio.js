import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Save } from 'lucide-react'
import React from 'react'

function EditBio({isOpen,onClose}) {
  return (
    <Dialog open = {isOpen} onOpenChange = {onClose}>
      <DialogContent className={`sm:max-w-[425px]`}>
<DialogHeader>Edit Bio</DialogHeader>
<form>
  <div className='grid gap-4 py-4'>
<div className='grid grid-cols-4 items-center gap-4'>
<Label htmlFor = 'bio' >Bio</Label>

<Textarea id = 'bioText'
name = 'bioText'
className={`col-span-3`}></Textarea>
</div>

<div className='grid grid-cols-4 items-center gap-4'>
<Label htmlFor = 'livein' >Live In</Label>
<Input id = 'livein'
name = 'livein'
className={`col-span-3`}></Input>
</div>


<div className='grid grid-cols-4 items-center gap-4'>
<Label htmlFor = 'relation' >Relationship</Label>
<Input id = 'relation'
name = 'relation'
className={`col-span-3`}></Input>
</div>


<div className='grid grid-cols-4 items-center gap-4'>
<Label htmlFor = 'work' >Work</Label>
<Input id = 'work'
name = 'work'
className={`col-span-3`}></Input>
</div>


<div className='grid grid-cols-4 items-center gap-4'>
<Label htmlFor = 'company' >Company</Label>
<Input id = 'company'
name = 'company'
className={`col-span-3`}></Input>
</div>


<div className='grid grid-cols-4 items-center gap-4'>
<Label htmlFor = 'study' >Study</Label>
<Input id = 'study'
name = 'study'
className={`col-span-3`}></Input>
</div>



  </div>

  <DialogFooter>
     
<Button type = 'submit' className={` cursor-pointer  dark:bg-white hover:bg-gray-600 hover:dark:bg-gray-100`}>
 <Save/> <span>Save Changes</span>
</Button>
  </DialogFooter>
</form>
      </DialogContent>
    </Dialog>
   
  )
}

export default EditBio
