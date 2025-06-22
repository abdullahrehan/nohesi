import type { Metadata } from 'next'
import './globals.css'

// ✅ Import Inter Tight from next/font/google
import { Inter_Tight,Roboto_Flex  } from 'next/font/google'

// ✅ Configure Inter Tight (subsets & optional weights)
const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight', // useful for Tailwind too
})


// ✅ Roboto Flex
const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
})

// ✅ Metadata
export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* ✅ Apply font via className */}
      <body  className={`${interTight.variable} ${robotoFlex.variable}`}>
        {children}
      </body>
    </html>
  )
}
