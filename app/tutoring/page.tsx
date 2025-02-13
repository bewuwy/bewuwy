import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "IB Maths Tutoring | Wlodarczyk Tutoring",
  description: "Professional IB Mathematics AA online and on-site tutoring. I'm Bartek, located in Delft, Netherlands, and I offer personalized IB Math lessons to help both SL and HL students excel.",
  metadataBase: new URL("https://bewu.dev"),
  alternates: {
    canonical: "tutoring",
  },
  keywords: [
    "IB Mathematics",
    "Math Tutoring",
    "IB Math AA",
    "Delft Tutor",
    "Online Math Tutoring",
    "IB DP Mathematics",
    "Math HL Tutor",
    "Math SL Tutor",
    "Netherlands Math Tutor",
    "International Baccalaureate Math",
  ],
};

export default function Tutoring() {
    return (
        <main className='w-full min-h-screen flex flex-col justify-center items-center mt-12'>

            <div className="md:w-1/3 w-4/5 mb-12 flex flex-col justify-center items-center gap-8">

                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-xl font-bold">IB Mathematics AA lessons</h1>
                    <span>Wlodarczyk Tutoring</span>
                </div>

                <div>
                    <p>Hi! I offer online and offline (Delft, Netherlands) Maths AA IB lessons! I have professional experience with tutoring Mathematics and I can help you reach the 7/7 (or any other mark :) ).</p>
                </div>

                <div>
                    <h2 className="text-lg font-bold">About me</h2>
                    <p>I am currently a Computer Science and Engineering student at TU Delft, and I also tutor IB Mathematics AA (both SL and HL). I finished IB DP at Batory High School in Warsaw with a score of 42 (7 from Maths AA HL). In my high school, I received the best graduating mathematician award, and represented it in many mathematical competitions (like the Singapore International Mathematical Modelling Contest). With a solid foundation in analytical thinking, I&apos;m passionate about helping students understand and enjoy challenging subjects like Mathematics and beyond. My goal is to make learning less daunting and more engaging.</p>
                </div>

                <div>
                    <h2 className="text-lg font-bold">My teaching style</h2>
                    <p>I adapt each session to fit the student&apos;s needs, breaking down complex concepts into simpler steps. I keep things interactive, pushing students to solve problems on their own while offering support and guidance when needed. I believe in creating a relaxed and motivating environment that helps students gain confidence</p>
                </div>
                
                <div className="flex flex-col items-center mt-4">
                    <h2 className='text-lg font-bold'>Contact me and book a lesson!</h2>
                    <p>Online lessons: 25 EUR/60 min</p>
                    <p>Live lesson (in Delft): from 30 EUR/60 min</p>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className='text-lg'>Contact:</h3>
                    <span>E-mail: <a href="mailto:tutoring@bewu.dev" className='link'>tutoring@bewu.dev</a></span>
                    <span>WhatsApp: <a href='https://wa.me/+31657123273' className='link' target='blank'>Chat with me</a></span>
                    <span>Google Maps: <a href="https://maps.app.goo.gl/Tbki8sMA7YWRZ61x6" className='link' target='blank'>Reviews and more</a></span>
                </div>

                <div className='mt-4'>
                    <h2 className="mb-2">Details (based in the Netherlands):</h2>
                    <p>Wlodarczyk Tutoring Eenmanszaak</p>
                    <p>KVK-nr: 95283005</p>
                    <p>BTW-id: NL005142382B51</p>
                </div>
            </div>
        </main>
    )
}
