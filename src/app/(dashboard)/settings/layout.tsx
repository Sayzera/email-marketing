import { onLoginUser } from '@/actions/auth';
import { ChatProvider } from '@/context/user-chat-contex';
import React from 'react'

type Props = {
    children:React.ReactNode
}

export default async function OwnerLayout({
    children
}: Props) {
  const authenticated = await onLoginUser();

  if(!authenticated) return null

  return (
    <ChatProvider>
      <div className='flex h-screen w-full'>
      </div>
    </ChatProvider>
  )
}