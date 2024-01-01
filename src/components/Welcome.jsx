import { useState, useEffect } from 'react'
import { TfiFacebook, TfiInstagram, TfiGithub } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function Welcome() {
    return (
        <div className='mt-20 mb-10 md:mb-1 mx-8 md:grid grid-cols-2'>
            <div className='flex flex-col gap-4 '>
                {/* Name */}
                <span className='bg-justTop font-Grotesk uppercase px-4 py-2 bg-slate-600 rounded-lg w-fit'>Jamiu fawaz</span>
                <h1 className='uppercase text-white text-2xl font-bold'>HAY! I'm FAWAZ</h1>
                <h1 className='text-primary text-4xl uppercase font-bold'>I am a Fullstack Deeveloper</h1>
                <p className='text-xl'>I am a Technically-minded personnel with years of experience in Frontend Development,
                    Backend Development API Design and Integration.
                </p>

                <div className='flex gap-4 md:gap-10'>
                    <a href="/assets/cv/updated_DevFawaz_CV.pdf" download="DevFawaz-CV" target='_blank' rel='noreferrer'>
                        <button className='bg-primary px-5 py-2 md:px-7 md:py-4 rounded-full text-sm md:text-xl hover:opacity-[0.5]'>Download CV</button>
                    </a>


                    <div className='flex gap-4 justify-center'>
                        <Link to="https://github.com/Fazzy01">
                            <div className='w-7 h-7 md:w-11 md:h-11 bg-[black] rounded-full flex justify-center items-center border-solid border-2 border-indigo-600 hover:opacity-[0.6] '>
                                <FaGithub className='text-sm md:text-xl' />
                            </div>
                        </Link>

                        <Link to="www.linkedin.com/in/jamiu-fawaz-6373781a8">
                            <div className='w-7 h-7 md:w-11 md:h-11  bg-[#cd2d48] y rounded-full flex justify-center items-center border-solid border-2 border-indigo-600 hover:opacity-[0.6] '>
                                <FaLinkedin className='text-sm md:text-xl' />
                            </div>
                        </Link>

                        <Link to="https://wa.me/2349086531144">
                            <div className='w-7 h-7 md:w-11 md:h-11 bg-primary rounded-full flex justify-center items-center border-solid border-2 border-indigo-600 hover:opacity-[0.6] '>
                                <FaWhatsapp className='text-sm md:text-xl' />
                            </div>
                        </Link>

                        <Link to="https://twitter.com/Fazzy499?t=CYKJCuLFKwj6sGI42CmMiQ&s=09" className='hidden md:block'>
                            <div className='w-7 h-7 md:w-11 md:h-11 bg-primary rounded-full flex justify-center items-center border-solid border-2 border-indigo-600 hover:opacity-[0.6] '>
                                <FaXTwitter className='text-sm md:text-xl' />
                            </div>
                        </Link>


                        {/* <div className='w-11 h-11 bg-primary rounded-full flex justify-center items-center border-solid border-2 border-indigo-600 hover:opacity-[0.6] '>
                            <FaXTwitter fontSize={26} />
                        </div>
                        <div className='w-11 h-11 bg-primary rounded-full flex justify-center items-center border-solid border-2 border-indigo-600 hover:opacity-[0.6] '>
                            <TfiFacebook fontSize={26} />
                        </div> */}

                    </div>

                </div>
            </div>

            <div className='hidden md:block'>
                {/* pics */}
                <img src="/assets/illustration/blogging_bro.svg" alt="my_image_illustration" className='h-[70vh] w-[100%]' />
            </div>

        </div >
    )
}
