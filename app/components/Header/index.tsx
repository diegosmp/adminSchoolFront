import Image from 'next/image'
import logoSVG from '../../public/LogoAdminschool.svg'

export default function Header() {
  return (
    <header className="w-full h-20 flex px-5 items-center justify-center md:justify-start 2xl:w-9/12 border-b border-zinc-700">
      <a href="/">
        <Image alt="Logo site Admin School" src={logoSVG} priority width={163} />
      </a>
    </header>
  )
}
