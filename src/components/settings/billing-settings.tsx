import { onGetSubscriptionPlan } from '@/actions/settings/index.';
import React from 'react'
import Section from '../section';

type Props = {}

export default async function BillingSettings({}: Props) {
    const plan = await onGetSubscriptionPlan();
    
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>
        <div className='lg:col-span-1'>
            <Section 
                label="Fatura Ayarları"
                message='Ödeme bilgilerinizi ekleyin, ve hesabınızı yükseltin'
                />
        </div>

    </div>
  )
}