'use client'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4 text-white">
            Styleify
          </h1>
          <p className="text-xl text-gray-300">
            Your music taste, your fashion story
          </p>
        </div>

        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Transform your Spotify listening habits into a personalized fashion aesthetic. 
          Connect your account to discover your unique style profile.
        </p>

        {status === 'loading' ? (
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white mx-auto"></div>
        ) : !session ? (
          <button
            onClick={() => signIn('spotify', { callbackUrl: '/dashboard' })}
            className="group bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all text-lg flex items-center gap-3 mx-auto"
          >
            <span>Connect with Spotify</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        ) : (
          <div className="space-y-4">
            <p className="text-white text-xl">
              Welcome back, {session.user?.name}!
            </p>
            <button
              onClick={() => window.location.href = '/dashboard'}
              className="bg-white text-purple-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  )
}