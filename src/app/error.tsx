import type { ReactNode } from 'react'

export default function ErrorPage({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <h1 className="text-3xl font-bold text-zinc-900">Error</h1>
      {children}
    </div>
  )
}