import { Roboto } from '@next/font/google';
import { Navbar } from '@/components/navbar'
import './globals.css'

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	style: ['normal', 'italic'],
	variable: '--font-roboto'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${roboto.variable} font-sans text-white `}>
				<Navbar />
				<main className="min-h-[calc(100vh-var(--app-bar-height))] mt-[var(--app-bar-height)] p-2 bg-base-100">
					{children}
				</main>
			</body>
    </html>
  )
}
