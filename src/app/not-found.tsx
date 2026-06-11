import type { ReactNode } from 'react'

export default function NotFoundPage({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <h1 className="text-3xl font-bold text-zinc-900">Not Found</h1>
      {children}
    </div>
  )
}