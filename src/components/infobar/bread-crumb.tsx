
'use client'
import React from 'react'

type Props = {}

export default function BreadCrumb({ }: Props) {
    const page = 'settings';
    // WIP: set up use side bar hook for real time chat and chat bot stuff
    return (
        <div className='flex flex-col'>
            <div className='flex gap-5 items-center'>
                <h2 className='text-3xl font-bold capitalize'>Title</h2>

            </div>

            <p className='text-gray-500 text-sm'>

                {
                    page === 'settings'
                        ? 'Tercihlerinizi ve Entegrasyonlarınızı ayarlardan yönetiniz.'
                        : page == 'dashboard'
                            ? 'Müşterilerinize gelişmiş rapor ekranı sunun'
                            : page == 'appointment'
                                ? 'Tüm randevularınızı inceleyin veya düzenleyin'
                                : page == 'email-marketing'
                                    ? 'Toplu olarak müşterilerinize mail gönderin'
                                    : page == 'integration'
                                        ? 'Corinna-AI dan 3.parti uygulamalara bağlanın'
                                        : 'Domain ayarlarını, chatbot ayarları, satış kayıtları, gelen sorular gibi düzenlemeri yapın'
                }


            </p>
        </div>
    )
}