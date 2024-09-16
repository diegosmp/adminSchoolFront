'use client'

import Image from 'next/image'
import logoSVG from '@/app/public/LogoAdminschool.svg'
import Link from 'next/link'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { LogOut, UserCircle, School, GraduationCap, Apple, LayoutDashboard, Backpack, Home } from 'lucide-react'

export default function HeaderDashboard() {
  const router = useRouter()
  function handleLogout() {
    const deleteToken = deleteCookie('session', { path: '/dashboard' })
    console.log(deleteToken)

    router.replace('/')
  }
  return (
    <header className="w-full h-20 flex px-5 py-2 items-center justify-between 2xl:w-9/12 border-b border-zinc-700">
      <a href="/dashboard">
        <Image alt="Logo site Admin School" src={logoSVG} priority={true} width={163} quality={100} />
      </a>
      <nav>
        <div className="flex justify-between gap-4">
          <span>
            <LayoutDashboard width={26} className="bg-transparent hover:text-red-500 transition-colors " />
          </span>
          <ul className="hidden">
            <li>
              <Link href={'/dashboard'}>
                <Home width={22} className="bg-transparent hover:text-red-500 transition-colors " />
              </Link>
            </li>
            <li>
              <Link href={'/monitors'}>
                <GraduationCap width={22} className="bg-transparent hover:text-red-500 transition-colors " />
              </Link>
            </li>
            <li>
              <Link href={'/teachers'}>
                <Apple width={22} className="bg-transparent hover:text-red-500 transition-colors " />
              </Link>
            </li>
            <li>
              <Link href={'/students'}>
                <Backpack width={22} className="bg-transparent hover:text-red-500 transition-colors " />
              </Link>
            </li>
            <li>
              <Link href={'/classrooms'}>
                <School width={22} className="bg-transparent hover:text-red-500 transition-colors " />
              </Link>
            </li>
          </ul>
          <span>
            <Link href={'/profile'}>
              <UserCircle width={26} className="bg-transparent hover:text-red-500 transition-colors " />
            </Link>
          </span>
          <form action={handleLogout}>
            <button>
              <LogOut width={26} className="bg-transparent hover:text-red-500 transition-colors " />
            </button>
          </form>
        </div>
      </nav>
    </header>
  )
}
