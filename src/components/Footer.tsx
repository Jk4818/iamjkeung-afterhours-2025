import React from 'react'

type Props = Record<string, never>;

export default function Footer({ }: Props) {
    return (
        <footer className='font-bold font-sans text-[0.5rem] w-full h-10 bg-main-blue flex justify-center'>
            <div className="flex gap-2 items-center">
                <a href="https://iamjkeung.com" target="_blank" rel="noreferrer" className="hover:text-main-pink transition-all uppercase tracking-widest">
                    <p>Designed & Developed with ❤️ by iamjkeung.com {new Date().getFullYear().toString()}</p>
                </a>
            </div>
        </footer>
    )
}