import './page.scss';

export default function Home() {
  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center'>

      <div className='flex flex-col justify-center items-center w-fit'>
        <span className='text-6xl sm:text-7xl md:text-8xl'>bewu.dev</span>
        <span className='text-lg'>i&apos;m Bartek and i&apos;m a dev</span>
      </div>

      <div className='flex justify-center items-center w-fit gap-4 mt-6'>
        <a href="/projects" role='button'>My projects</a>
        <a href="/about" role="button">About me</a>
      </div>
      
    </main>
  )
}
