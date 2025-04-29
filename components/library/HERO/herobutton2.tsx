import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Herobuttons = () => {
  return (
    <div className='flex gap-4'>
      <Link href="/room">
        <Button
          size="lg"
          variant="outline"
          className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white no-underline flex space-x-2 group cursor-pointer relative transition duration-200 p-px hover:text-zinc-100 font-semibold px-4 py-2 h-14 items-center justify-center rounded-2xl text-center text-[16px] w-40 md:48 lg:w-52"
        >
          Get Started
        </Button>
      </Link>
      <Link href="/about" target='_blank'>
        <Button
          size="lg"
          variant="outline"
          className="flex h-14 items-center justify-center rounded-2xl border bg-white dark:bg-black text-sm text-black dark:text-white transition duration-200 w-40 md:48 lg:w-52 border-neutral-300 dark:border-neutral-600 text-[16px]"
        >
          Learn More
        </Button>
      </Link>
    </div>
  )
}

export default Herobuttons