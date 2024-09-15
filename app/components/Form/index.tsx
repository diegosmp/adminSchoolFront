import api from '@/app/api/api'
import { redirect } from 'next/navigation'

export default function Form() {
  const handleSubmit = async (formData: FormData) => {
    'use server'
    const fullname = formData.get('fullname')
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      await api.post('/users/create', {
        fullname,
        email,
        password,
      })
    } catch (error) {
      console.log('Bad request', error)
    }

    redirect('/')
  }
  return (
    <section className="w-80 h-96 bg-zinc-800 rounded-lg px-2 flex flex-col items-center gap-8">
      <h2 className="text-2xl font-bold text-zinc-300 mt-2">Cadastrar</h2>
      <form action={handleSubmit} method="post" className="w-full flex flex-col gap-6 items-center">
        <input
          required
          type="text"
          name="fullname"
          placeholder="Digite seu nome completo"
          className="bg-transparent border-b border-zinc-600 px-2 py-1 placeholder:text-zinc-500 placeholder:text-xs w-full text-sm"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="exemplo@email.com"
          className="bg-transparent border-b border-zinc-600 px-2 py-1 placeholder:text-zinc-500 placeholder:text-xs w-full text-sm"
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Digite sua senha"
          className="bg-transparent border-b border-zinc-600 px-2 py-1 placeholder:text-zinc-500 placeholder:text-xs w-full text-sm"
        />
        <input
          required
          type="password"
          name="confirmpass"
          placeholder="Confirme sua senha"
          className="bg-transparent border-b border-zinc-600 px-2 py-1 placeholder:text-zinc-500 placeholder:text-xs w-full text-sm"
        />
        <div className="flex text-zinc-600 text-xs">
          <span>
            Já possui conta?{' '}
            <a href="/" className="underline">
              Entrar
            </a>
          </span>
        </div>
        <button className="w-24 h-8 bg-zinc-900 rounded-md font-bold">Cadastrar</button>
      </form>
    </section>
  )
}
