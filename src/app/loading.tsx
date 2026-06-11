import type { ReactNode } from 'react'

export default function LoadingPage({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <h1 className="text-3xl font-bold text-zinc-900">Loading...</h1>
      {children}
    </div>
  )
}