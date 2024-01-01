import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div id='about'>
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
                    <p className='text-xl text-justify'>
                        Fawaz is a full-stack software developer with 4+ years of professional experience working with web technologies. His primary stacks include PHP and Laravel, Nodejs and Express, Python and Flask, JavaScript and React Js, Bootstrap, JQuery and Ajax, and his secondary stacks include MySQL and PostgreSQL, CI/CD and pipelines, and Linux.
                        He is knowledgeable in building APIs using PHP & Nodejs REST Framework constructing robust and secure backend.
                        I am technically minded personnel with vast knowledge across Networking (using cisco packet tracer to simulate and designing Networks), basic Pentesting and Cybersecurity, making it easier for me to write clean and secure codes.
                        He Holds a Bachelor of Science in Food Engineering from University of Ilorin. Passionate about leveraging technology to solve complex problems. Eager to tackle new challenges and collaborate with others to drive innovation. With excellent interpersonal skills and problem-solving skills. I am a fast learner capable of quickly mastering new skills, technologies, and roles.
                    </p>

                    <div className='flex w-auto gap-2 md:gap-4'>
                        <div className='flex flex-col gap-2 border border-indigo-600 px-4 py-8 bg-transparent rounded-lg w-auto'>
                            <h1 className='text-xl md:text-3xl font-bold'>10+</h1>
                            <p className='w-fit'>Project Review</p>
                        </div>

                        <div className='flex flex-col gap-2 border border-indigo-600 px-4 py-8 bg-transparent rounded-lg w-auto'>
                            <h1 className='text-xl md:text-3xl font-bold'>280+</h1>
                            <p className='w-fit'>Google Review</p>
                        </div>

                        <div className='flex flex-col flex-shrink-2 flex-grow-0 gap-2 border border-indigo-600 px-4 py-8 bg-transparent rounded-lg w-auto'>
                            <h1 className='text-xl md:text-3xl font-bold'>50+</h1>
                            <p className='w-fit'>Client Review</p>
                        </div>
                    </div>

                    <Link to="https://wa.me/2349086531144">
                        <div className='flex gap-3 md:gap-10'>
                            <button className='bg-primary px-5 py-2 md:px-7 md:py-4 rounded-full text-sm md:text-xl uppercase'>Get In Touch</button>
                        </div>
                    </Link>

                </div>





            </div >
        </div>
    )
}
