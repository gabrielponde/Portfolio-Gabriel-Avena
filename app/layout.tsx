// app/layout.tsx
import '../css/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-gabriel-avena.vercel.app'),
  title: 'Gabriel Avena - Software Developer',
  description: 'Confira meu portfólio e projetos.',
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Gabriel Avena - Software Developer',
    description: 'Confira meu portfólio e projetos.',
    images: [
      {
        url: '/images/avena-banner.png',
        width: 1200,
        height: 630,
        alt: 'Gabriel Avena - Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Avena - Software Developer',
    description: 'Confira meu portfólio e projetos.',
    images: ['/images/avena-banner.png'],
  },
  verification: {
    google: '73wdnYkdqQZl46BmV50CR8ijT5iyo4WCB0t0RMUbj4o'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
