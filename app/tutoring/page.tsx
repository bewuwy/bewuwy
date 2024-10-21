
export default function Tutoring() {
    return (
        <main className='w-full h-screen flex flex-col justify-center items-center'>

            <div className="md:w-1/3 w-4/5 flex flex-col justify-center items-center gap-12">

                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl font-bold">Wlodarczyk Tutoring</h2>
                    <h3>Mathematics lessons</h3>
                </div>

                <div>
                    <h3 className="text-lg font-bold">About me</h3>
                    <p>Hi! I am a Computer Science and Engineering student at TU Delft and I tutor (IB) Mathematics. With a solid foundation in analytical thinking, I&apos;m passionate about helping students understand and enjoy challenging subjects like Mathematics and beyond. My goal is to make learning less daunting and more engaging.</p>
                </div>

                <div>
                    <h3 className="text-lg font-bold">My teaching style</h3>
                    <p>I adapt each session to fit the student&apos;s needs, breaking down complex concepts into simpler steps. I keep things interactive, pushing students to solve problems on their own while offering support and guidance when needed. I believe in creating a relaxed and motivating environment that helps students gain confidence</p>
                </div>
                
                <a href="https://bewu.dev/schedule" className="underline font-bold">Book a lesson with me!</a>

                <div className="flex flex-col items-center">
                    <h2 className='text-lg mt-6'>Contact:</h2>
                    <span className='text-sm'>tutoring@bewu.dev</span>
                </div>

                <div>
                    <h2 className="mb-2">Details (company based in the Netherlands):</h2>
                    <p>Wlodarczyk Tutoring Eenmanszaak</p>
                    <p>KVK-nummer: 95283005</p>
                    <p>BTW-nummer: [NONE YET]</p>
                </div>
            </div>
        </main>
    )
}
