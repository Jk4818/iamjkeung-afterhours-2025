import React from 'react'

type Props = Record<string, never>;

export default function LoadingSkeleton({}: Props) {
  return (
    <div className='h-screen w-screen fixed bg-main-blue flex items-center justify-center text-foregronud'>loading...</div>
  )
}