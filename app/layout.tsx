import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'AdminSchool',
  description: 'Gerencie sua escola',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div className="bg-zinc-950 h-screen w-full flex flex-col items-center">
        <Header />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  )
}
