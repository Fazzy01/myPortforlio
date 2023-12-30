import React from 'react'

export default function About() {
    return (
        <div>
            <div className='mt-0 md:mt-20 mb-10 mx-8 md:grid grid-cols-2'>

                <div className='md:block'>
                    {/* pics */}
                    <img src="/assets/illustration/Programming-pana-primary.svg" alt="my_image_illustration" className='h-[70vh] w-[100%]' />
                </div>

                <div className='flex flex-col gap-4 '>
                    {/* Name */}
                    <span className='bg-justTop font-Grotesk uppercase px-4 py-2 bg-slate-600 rounded-lg w-fit'>About Me</span>
                    <h1 className='uppercase text-white text-2xl'>I AM AVAILABLE FOR</h1>
                    <h1 className='text-primary text-4xl uppercase'>Fullstack, BACKEND and Frontend</h1>
                    <h1 className='uppercase text-white text-2xl'>Projects</h1>
                    <p className='text-xl'>I am a Technically-minded personnel with years of experience in Frontend Development,
                        Backend Development API Design and Integration.
                    </p>

                    <div className='flex w-auto gap-2 md:gap-4'>
                        <div className='flex flex-col gap-2 border border-indigo-600 px-4 py-8 bg-transparent rounded-lg w-auto'>
                            <h1 className='text-xl md:text-3xl font-bold'>280+</h1>
                            <p className='w-fit'>Google Review</p>
                        </div>

                        <div className='flex flex-col gap-2 border border-indigo-600 px-4 py-8 bg-transparent rounded-lg w-auto'>
                            <h1 className='text-xl md:text-3xl font-bold'>280+</h1>
                            <p className='w-fit'>Google Review</p>
                        </div>

                        <div className='flex flex-col flex-shrink-2 flex-grow-0 gap-2 border border-indigo-600 px-4 py-8 bg-transparent rounded-lg w-auto'>
                            <h1 className='text-xl md:text-3xl font-bold'>280+</h1>
                            <p className='w-fit'>Google Review</p>
                        </div>
                    </div>

                    <div className='flex gap-3 md:gap-10'>
                        <button className='bg-primary px-5 py-2 md:px-7 md:py-4 rounded-full text-sm md:text-xl uppercase'>Get In Touch</button>
                    </div>

                </div>





            </div >
        </div>
    )
}
