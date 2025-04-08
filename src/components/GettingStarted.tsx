import React from 'react'

type Props = {}

export default function GettingStarted({ }: Props) {
    return (
        <div className='bg-main-green w-full h-96 p-4 lg:p-10 flex justify-between items-center text-xl'>
            <div className='flex flex-col w-1/2 h-full  justify-between'>
                <div className='w-3/4 h-1/2'>
                    <p>
                    We're a tight-knit collective of <span className='font-black'>creatives, producers, and music lovers</span> building a space where artists can feel seen, heard, and supported. After Hours is powered by <a className='font-black' href="iamjkeung.com" target='_blank'>iamjkeung.com</a>—a passion project rooted in storytelling, collaboration, and thoughtful production. We work closely with each artist to shape something meaningful, not just marketable.
                    </p>
                </div>
                <div className='h-1/2flex items-end'>
                    <h4 className='font-black'>Want to perform with us?</h4>
                </div>
            </div>
            <div className='flex bg-red-300'>
                <h1>
                    Get Started
                </h1>
                <h2>.</h2>
            </div>
        </div>
    )
}