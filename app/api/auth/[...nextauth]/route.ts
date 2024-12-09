import { AuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import SpotifyProvider from 'next-auth/providers/spotify'
import type { JWT } from 'next-auth/jwt'
import type { Session } from 'next-auth'

interface ExtendedToken extends JWT {
  accessToken?: string
  refreshToken?: string
  expiresAt?: number
}

interface ExtendedSession extends Session {
  accessToken?: string
}

declare module 'next-auth' {
  interface Session {
    accessToken?: string
  }
}

const scopes = [
  'user-read-email',
  'user-read-private',
  'user-top-read',
  'user-read-recently-played',
  'playlist-read-private'
].join(' ')

export const authOptions: AuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID ?? '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? '',
      authorization: {
        params: { scope: scopes }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }): Promise<ExtendedToken> {
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          expiresAt: account.expires_at
        }
      }
      return token as ExtendedToken
    },
    async session({ session, token }): Promise<ExtendedSession> {
      return {
        ...session,
        accessToken: (token as ExtendedToken).accessToken
      }
    }
  },
  pages: {
    signIn: '/'
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }