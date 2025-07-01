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
    images: ['/opengraph-image.png'], // imagem estática
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image.png'],
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
