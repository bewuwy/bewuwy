import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About me | bewu.dev',
  description: 'Who even am I?',
  metadataBase: new URL('https://bewu.dev'),
  alternates: {
    canonical: "about"
  }
}

export default function About() {
    return (
        <main className='w-screen h-screen flex flex-col justify-center items-center'>

            <span>About me (page coming soon)</span>
        

            <h2 className='text-lg mt-6'>Contact me:</h2>
            
            <span className='text-sm'>bewu@bewu.dev</span>
        </main>
    )
}
