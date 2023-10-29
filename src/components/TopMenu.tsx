import TopMenuItem from './TopMenuItem';
import styles from './topmenu.module.css';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';


export default async function TopMenu() {
    
    const session = await getServerSession(authOptions)
    
    return (
        <div className="h-12 bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-300 flex flex-row-reverse"> 
            <Image src={'/img/logo.png'} className="h-full w-auto" alt='logo image' 
             width={0} height={0} sizes='100vh'/>
             <TopMenuItem title='Booking' pageRef='/booking'/>
             <div className='flex flex-row absolute left-0 h-full'>
                {
                    session? <Link href="/api/auth/signout"><div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                        Sign-Out of {session.user?.name}</div></Link>
                    : <Link href="/api/auth/signin"><div className='flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm'>
                        Sign-In</div></Link>
                }
                <TopMenuItem title='My Booking' pageRef='/mybooking'/>

             </div>
        </div>
    )
}