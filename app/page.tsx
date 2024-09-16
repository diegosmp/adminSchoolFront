import Footer from './components/Footer'
import Header from './components/Header'
import LoginForm from './components/LoginForm'

export default function Home() {
  return (
    <div className="bg-zinc-950 h-screen w-full flex flex-col items-center">
      <Header />
      <main className="h-full flex flex-col items-center justify-center">
        <LoginForm />
      </main>
      <Footer />
    </div>
  )
}
