import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My projects | bewu.dev',
  description: 'List of my (mostly hobby) projects.',
  metadataBase: new URL('https://bewu.dev'),
  alternates: {
    canonical: "projects"
  }
}

export default function Projects() {
    return (
      <main className='w-screen h-screen flex flex-col justify-center items-center'>
  
        <h1>My projects (page coming soon)</h1>
        
      </main>
    )
}
