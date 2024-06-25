'use client'

import { useToast } from "@/components/ui/use-toast";
import { useSignIn } from "@clerk/nextjs"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";


export const useSignInForm = () => {
    const {isLoaded, setActive, signIn} = useSignIn();
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const { toast } = useToast();
    const methods = useForm<UserLoginProps>({
        resolver: zodResolver(UserLoginSchema),
        mode: 'onChange'
    })


    const onHandleSubmit = methods.handleSubmit(
        async (values: UserLoginProps) => {
            if(!isLoaded) return 

            try {

            }catch(error:any) {
                
            }
        }
    )

}