import {
    z,
    ZodType
} from 'zod'

export type UserRegistrationProps = {
    type: string;
    fullname: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
    otp: string;
}

export const UserRegistrationSchema: ZodType<UserRegistrationProps> = z.
    object({
        type: z.string().min(1),
        fullname: z
            .string()
            .min(4, { message: 'Ad Soyad alanı en az 4 karakter olmalıdır.' }),
        email: z
            .string()
            .email({ message: 'Geçersiz email formatı girdiniz' }),
        confirmEmail: z
            .string()
            .email(),
        password: z
            .string()
            .min(8, { message: 'Şifreniz en az 8 karekter olmalıdır.' })
            .max(64, { message: 'Şifre uzunluğu 64 karekteri geçemez.' })
            .refine(
                (value) => /^[a-zA-Z0-9_.-]/.test(value ?? ''),
                'Şifreniz sadece metin ve numara içerebilir'
            ),
        confirmPassword: z
            .string(),
        otp: z
            .string()
            .min(6, { message: 'Lütfen 6 haneli dijital kodu giriniz' })
    })
    .refine((schema) => schema.password === schema.confirmPassword, {
        message: 'Şifreleriniz eşleşmiyor',
        path: ['confirmPassword']
    })
    .refine((schema) => schema.email === schema.confirmEmail, {
        message: 'E-posta adresleriniz eşleşmiyor',
        path: ['confirmEmail']
    }) 
