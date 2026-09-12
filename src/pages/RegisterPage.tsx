import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { AuthCard, FieldLabel, PasswordField } from '@/components/auth/AuthCard'
import { Input } from '@/components/ui/input'

export function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    document.title = 'Create Account | EduIntern Voyage'
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section aria-label="Create account" className="page-glow flex flex-1 items-center justify-center px-4 py-16 sm:px-6 sm:py-20">
      <AuthCard
        eyebrow="Start your journey"
        title="Create Your EduIntern Voyage Account"
        description="Create an account to access protected learning resources and personalize your learning journey."
        submitLabel="Create Account"
        footerText="Already have an account?"
        footerLinkLabel="Sign in"
        footerLinkTo="/login"
        onSubmit={handleSubmit}
      >
        <div>
          <FieldLabel htmlFor="register-name">Name</FieldLabel>
          <Input
            id="register-name"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            required
            aria-required="true"
            className="mt-2"
          />
        </div>
        <div>
          <FieldLabel htmlFor="register-email">Email</FieldLabel>
          <Input
            id="register-email"
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
          <FieldLabel htmlFor="register-password">Password</FieldLabel>
          <PasswordField
            id="register-password"
            name="password"
            value={password}
            onChange={setPassword}
            autoComplete="new-password"
          />
        </div>
      </AuthCard>
    </section>
  )
}