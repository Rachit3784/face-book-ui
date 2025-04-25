import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import { Button } from '@/components/ui/button';

function VidComments({ comments }) {
  return (
    <div>
      {comments?.map((comment, index) => (
        comment?.user?.text !== "" && (
          <div className="mb-4" key={index}>
            <div className="flex items-center space-x-2 pl-1">
              <div>
                <Avatar className="h-7 w-7 rounded-full dark:bg-gray-400">
                  <AvatarImage />
                  <AvatarFallback>R</AvatarFallback>
                </Avatar>
              </div>

              <div className="bg-[#232324] rounded-lg px-2 py-1">
                <p className="font-semibold text-sm">{comment?.user?.username}</p>
                <p className="text-sm text-gray-300">{comment?.user?.text}</p>
              </div>
            </div>

            <div className="flex items-center ml-7 text-gray-500 text-xs space-x-2">
              <Button variant="ghost" size="sm">Like</Button>
              <Button variant="ghost" size="sm">Reply</Button>
              <span>{comment?.user?.createdAt}</span>
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default VidComments;
