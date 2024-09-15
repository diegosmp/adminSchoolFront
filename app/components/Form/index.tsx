'use client'

import { useState } from 'react'

export default function Form() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const handleSubmit = async () => {}
  return (
    <section className="w-80 h-96 bg-zinc-800 rounded-lg px-2 flex flex-col items-center gap-8">
      <h2 className="text-2xl font-bold text-zinc-300 mt-2">Cadastrar</h2>
      <form className="w-full flex flex-col gap-6 items-center">
        <input
          type="text"
          name="fullname"
          placeholder="Digite seu nome completo"
          className="bg-transparent border-b border-zinc-600 px-2 py-1 placeholder:text-zinc-500 placeholder:text-xs w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="exemplo@email.com"
          className="bg-transparent border-b border-zinc-600 px-2 py-1 placeholder:text-zinc-500 placeholder:text-xs w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          className="bg-transparent border-b border-zinc-600 px-2 py-1 placeholder:text-zinc-500 placeholder:text-xs w-full"
        />
        <input
          type="password"
          name="confirmpass"
          placeholder="Confirme sua senha"
          className="bg-transparent border-b border-zinc-600 px-2 py-1 placeholder:text-zinc-500 placeholder:text-xs w-full"
        />
        <div className="flex text-zinc-600 text-xs">
          <span>
            Já possui conta?{' '}
            <a href="/" className="underline">
              Entrar
            </a>
          </span>
        </div>
        <button className="w-24 h-8 bg-zinc-900 rounded-sm font-bold">Cadastrar</button>
      </form>
    </section>
  )
}
