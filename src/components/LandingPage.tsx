import React from 'react'
import AnimatedLogo from './AnimatedLogo'

type Props = {}

export default function LandingPage({ }: Props) {
    return (
        <div className='bg-main-blue w-full h-screen p-4 md:p-10 flex flex-row justify-center items-center'>
            <div className='flex flex-col justify-center items-center min-w-140 w-6/13 h-full'>
                <div className='h-1/10 self-start '>
                    <AnimatedLogo />
                </div>
                <div className='h-9/10 flex flex-col justify-center items-start text-5xl xl:text-6xl font-black text-foreground lowercase'>
                    <h1 className=''>
                        A cozy, late-night performance series where artistry takes the lead.
                    </h1>

                    <h1 className='mt-4'>Real music. Real moments.</h1>
                </div>
            </div>
            <div className='w-1/13 h-full bg-orange-300 rounded-xl text-foreground font-black'>
                <div className='lowercase'>Scroll down</div>
            </div>
            <div className='w-6/13 h-full bg-blue-300 rounded-xl'></div>
        </div>
    )
}