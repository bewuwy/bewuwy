import Link from 'next/link';
import './style.scss'
import { Fredoka } from 'next/font/google';

const fredoka = Fredoka({ weight: "400", subsets: ["latin"] });

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
      <body className={fredoka.className}>
      
        {/* navbar */}
        <div className='flex justify-between items-center w-full py-4 px-8 top-0 bg-contrast text-white'>
          <Link href="/">Bartek Włodarczyk</Link>
          <div className="flex gap-4">
            <a href="/portfolio.pdf">CV</a>
            <a href="/tutoring">Tutoring</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
          </div>
        </div>

        {children}
      </body>
    </html>
  )
}
