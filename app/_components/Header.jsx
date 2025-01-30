import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (

        <div className="p-7 shadow-sm flex justify-between">
            <div className="flex items-center gap-8 ">
                <Image src="/logo.svg" alt="services" width={160} height={80} />
                <div className="md:flex items-center gap-6 hidden">
                    <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>accueil</h2>
                    <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>services</h2>
                    <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>à propos de nous</h2>
                </div>
            </div>
            <Button>
            Commencer
                </Button>
        </div>
    )
}

export default Header