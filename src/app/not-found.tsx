'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/')
    }, 3000) // Redirect after 3 seconds

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div className="fixed -z-10 left-0 min-h-screen min-w-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400">Redirecting to homepage...</p>
    </div>
  )
}