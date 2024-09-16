import FooterDashboard from './components/Footer'
import HeaderDashboard from './components/Header'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderDashboard />
      {children}
      <FooterDashboard />
    </>
  )
}
