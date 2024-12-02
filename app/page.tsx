import './page.scss';

export default function Home() {
  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center'>

      <div className='flex flex-col justify-center items-center w-fit'>
        <svg viewBox="0 -110 650 120" className='pb-4 w-80 sm:w-[30rem] md:w-[35rem] lg:w-[40rem] h-auto drop-shadow-lg hover:drop-shadow-xl'>
          <text className="svgText" x="50%" y="0" textAnchor="middle">bewu.dev</text>
        </svg>
        <span className='text-lg'>i&apos;m Bartek and i&apos;m a dev</span>
      </div>

      <div className='flex justify-center items-center w-fit gap-4 mt-6'>
        <a href="/projects" role='button'>My projects</a>
        <a href="/about" role="button">About me</a>
      </div>
      
    </main>
  )
}
