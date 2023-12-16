import Link from 'next/link'
import React from 'react'
import { auth, UserButton } from '@clerk/nextjs'

const Header = () => {
    const {userId} =auth();

  return (
    <>
     <nav className='bg-blue-700 py-4 px-6 flex items-center justify-between mb-5'>
        <div className='flex items-start'>
            <Link href= '/'>
                <div className='text-lg uppercase font-bold text-white'>
                    Clerk Auth
                </div>
            </Link>
        </div>

        <div className='text-white flex items-start'>
            {!userId && (
              <>
                <Link href='sign-in' className='text-gray-300 hover:text-white mr-4'>Sign In</Link>
                <Link href='sign-up' className='text-gray-300 hover:text-white mr-4'>Sign Up</Link>
              </>
            )}
            {userId && (
                <Link href='profile' className='text-gray-300 hover:text-white mr-4'>Profile</Link>
            )}
            <div className='ml-auto'>
                <UserButton afterSignOutUrl='/'/>
            </div>
        </div>
     </nav>   
    </>
  )
}

export default Header