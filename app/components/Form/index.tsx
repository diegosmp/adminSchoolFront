'use client'

import api from '@/app/api/api'
import { redirect } from 'next/navigation'
import { useState } from 'react'

export default function Form() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const handleSubmit = async (formData: FormData) => {
    const fullname = formData.get('fullname')
    const email = formData.get('email')
    const password = formData.get('password')

    if (password !== confirmPass) {
      console.log('As senhas não são iguais')
      return
    }

    try {
      await api.post('/users/create', {
        fullname,
        email,
        password,
      })

      setFullname('')
      setEmail('')
      setPassword('')
      setConfirmPass('')
    } catch (error) {
      console.log('Bad request')
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
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Digite seu nome completo"
          className="bg-transparent border-b border-zinc-600 px-2 py-1 placeholder:text-zinc-500 placeholder:text-xs w-full text-sm"
        />
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="exemplo@email.com"
          className="bg-transparent border-b border-zinc-600 px-2 py-1 placeholder:text-zinc-500 placeholder:text-xs w-full text-sm"
        />
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
          className="bg-transparent border-b border-zinc-600 px-2 py-1 placeholder:text-zinc-500 placeholder:text-xs w-full text-sm"
        />
        <input
          required
          type="password"
          name="confirmpass"
          value={confirmPass}
          onChange={(e) => {
            setConfirmPass(e.target.value)
          }}
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
