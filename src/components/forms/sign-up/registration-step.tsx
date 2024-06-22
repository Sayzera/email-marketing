'use client';
import { useAuthContextHook } from '@/context/use-auth-context';
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelectionForm from './type-selection-form';

type Props = {}

function RegistrationFormStep({ }: Props) {
    const {
        register,
        formState: { errors },
        setValue
    } = useFormContext();

    const { currentStep } = useAuthContextHook();
    const [onOPT, setOnOTP] = useState<string>('');
    const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner')
    setValue('otp', onOPT)


    switch (currentStep) {
        case 1:
            return <TypeSelectionForm
                register={register}
                userType={onUserType}
                setUserType={setOnUserType}
            />
        case 2:

        case 3:
    }




    return null
}

export default RegistrationFormStep