import api from '@/app/api/api'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default function LoginForm() {
  const handleLogin = async (formData: FormData) => {
    'use server'
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      const response = await api.post('/users/signin', {
        email,
        password,
      })

      if (!response.data.token) {
        return
      }

      const expessTime = 60 * 60 * 24

      cookies().set('session', response.data.token, {
        maxAge: expessTime,
        path: '/dashboard',
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
      })
    } catch (error) {
      return
    }

    redirect('/dashboard')
  }
  return (
    <section className="w-80 h-80 bg-zinc-800 rounded-lg px-2 flex flex-col items-center gap-8">
      <h2 className="text-2xl font-bold text-zinc-300 mt-2">Entrar</h2>
      <form action={handleLogin} className="w-full flex flex-col gap-6 items-center">
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
        <div className="flex text-zinc-600 text-xs">
          <span>
            Não possui conta?{' '}
            <a href="/signup" className="underline">
              Cadastrar-se
            </a>
          </span>
        </div>
        <button className="w-24 h-8 bg-zinc-900 rounded-md font-bold">Entrar</button>
      </form>
    </section>
  )
}
