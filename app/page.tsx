import './page.scss'
import { Fredoka } from 'next/font/google'

const fredoka = Fredoka({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <main className={fredoka.className}>

      <div className="bewu-text">
        <span>bewu.dev</span>
      </div>

      <div className="rhs">
      
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <span className='hi'>Hi, I'm bewu and I'm a dev</span>

        <div className='content'>
          <div className="projects tile">
            <span className='title'>My projects</span>
            <span className='subtitle'>They may not be good, but they are mine</span>
            <a role="button">See my projects</a>
            <span className='annotation'>(actually they are good)</span>
          </div>
          <div className='me'>
            <div className='about tile'>

              <span className='title'>About me</span>
            </div>

            <div className='literally-me tile'>
              <span className='title'>Literally me</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}