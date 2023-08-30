"use client"

import { AuthProvider } from '@/context/authContext'
import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] })
const queryClient = new QueryClient()
// export const metadata = {
//   title: 'Blood Bond Network',
//   description: 'This is Blood Bond Network',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <AuthProvider>
        <QueryClientProvider client={queryClient}>
            {children}
            </QueryClientProvider>
        </AuthProvider>
      
        
        </body>
    </html>
  )
}
