import './style.scss'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: "400", subsets: ["latin"] })

export const metadata = {
  title: 'bewu.dev',
  description: 'i\'m bewu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
