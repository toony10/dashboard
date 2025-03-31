"use client";
import { auth } from '@/lib/firebase'
import { signOut } from 'firebase/auth'
import { usePathname, useRouter } from 'next/navigation'
import { SidebarTrigger } from '../ui/sidebar';
import { Button } from '../ui/button';

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()

    const handleLogout = async () => {
        await signOut(auth)
        router.push('/login')
    }

    return (
        <>
            { pathname === '/login' ? <SidebarTrigger /> :
                <div className="flex gap-6">
                    <SidebarTrigger />
                    <nav className='flex flex-1/2 items-center gap-10 p-4'>
                        <p className='font-bold text-xl'>Welcome back 👋</p>
                        <Button variant="outline" className="flex" onClick={ handleLogout }>Logout</Button>
                    </nav>
                </div> }
        </>
    )
}
