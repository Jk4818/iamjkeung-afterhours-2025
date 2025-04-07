import React from 'react'

type Props = {}

export default function LandingPage({ }: Props) {
    return (
        <div className='bg-main-blue w-full h-screen p-4 lg:p-10 flex flex-row justify-center items-center'>
            <div className='flex flex-col justify-center items-center w-6/13 h-full'>
                <div className='h-1/20 bg-red-400 self-start'>LOGO</div>
                <div className='h-9/10 bg-red-300 flex flex-col justify-center items-start text-5xl font-black text-foreground lowercase'>
                    <h1 className=''>
                        A cozy, late-night performance series where artistry takes the lead.
                    </h1>

                    <h1 className='mt-4'>Real music. Real moments.</h1>
                </div>
            </div>
            <div  className='w-1/13 h-full bg-orange-300 rounded-xl'></div>
            <div  className='w-6/13 h-full bg-blue-300 rounded-xl'></div>
        </div>
    )
}