import InfoBar from '@/components/infobar'
import BillingSettings from '@/components/settings/billing-settings'
import React from 'react'

type Props = {}

function SettingsPage({}: Props) {
  return (
  <>
   <InfoBar />
   <div className='overflow-y-auto w-full chat-window  h-0 flex flex-col gap-10'>
        <BillingSettings />
   </div>
  </>
  )
}

export default SettingsPage