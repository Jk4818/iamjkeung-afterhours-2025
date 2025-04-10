import React from 'react'
import AnimatedLogo from './AnimatedLogo'

type Props = {}

export default function LandingPage({ }: Props) {


    const videoSrc = "https://d1jtup13qecgqg.cloudfront.net/assets/after-hours/hero-hd.mp4";
    const videoThumb = "https://d1jtup13qecgqg.cloudfront.net/assets/after-hours/hero-hd-thumb.jpg";


    return (
        <div className='bg-main-blue w-full h-screen p-4 md:p-10'>
            <div className='absolute left-0  mx-4 md:mx-10 self-start '>
                <AnimatedLogo />
            </div>
            <div className='w-full h-full flex flex-col lg:flex-row justify-between items-center'>
                <div className='w-full md:min-w-140 lg:w-6/13 h-full'>
                    <div className='h-full lg:h-9/10 flex flex-col justify-end sm:justify-center items-start text-3xl sm:text-5xl xl:text-6xl font-black text-foreground lowercase text-center lg:text-left'>
                        <h1 className=''>
                            A cozy, late-night performance series where artistry takes the lead.
                        </h1>
                        <h1 className='my-7 sm:my-0 mt-4 w-full'>Real music. Real moments.</h1>
                    </div>
                </div>
                <div className='w-full lg:w-6/13 h-full rounded-xl'>
                    <video
                        loop
                        autoPlay
                        muted
                        poster={videoThumb}
                        className="w-full h-full object-cover rounded-xl"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* Scroll Indicator */}
            <div
                className="hidden lg:block absolute bottom-20 left-0 right-0 text-center cursor-pointer"
            >
                <p className="text-xs font-black text-foreground">Scroll down</p>
                <div
                    className="mt-2"
                >
                    ↓
                </div>
            </div>
        </div>
    )
}