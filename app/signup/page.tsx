import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'

export default function Signup() {
  return (
    <div className="bg-zinc-950 h-screen w-full flex flex-col items-center">
      <Header />
      <main className="w-full h-screen flex flex-col items-center justify-center">
        <Form />
      </main>
      <Footer />
    </div>
  )
}
