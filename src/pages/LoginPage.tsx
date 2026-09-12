import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { AuthCard, FieldLabel, PasswordField } from '@/components/auth/AuthCard'
import { Input } from '@/components/ui/input'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    document.title = 'Sign In | EduIntern Voyage'
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section aria-label="Sign in" className="page-glow flex flex-1 items-center justify-center px-4 py-16 sm:px-6 sm:py-20">
      <AuthCard
        eyebrow="Welcome back"
        title="Sign in to EduIntern Voyage"
        description="Sign in to continue learning and access your protected study resources."
        submitLabel="Sign In"
        footerText="Don't have an account?"
        footerLinkLabel="Create one"
        footerLinkTo="/register"
        onSubmit={handleSubmit}
      >
        <div>
          <FieldLabel htmlFor="login-email">Email</FieldLabel>
          <Input
            id="login-email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
            aria-required="true"
            className="mt-2"
          />
        </div>
        <div>
          <FieldLabel htmlFor="login-password">Password</FieldLabel>
          <PasswordField
            id="login-password"
            name="password"
            value={password}
            onChange={setPassword}
            autoComplete="current-password"
          />
        </div>
      </AuthCard>
    </section>
  )
}