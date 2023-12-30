import { useState, useEffect } from 'react'
import { TfiFacebook, TfiInstagram, TfiGithub } from "react-icons/tfi";


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
                    <button className='bg-primary px-5 py-2 md:px-7 md:py-4 rounded-full text-sm md:text-xl'>Download CV</button>

                    <div className='flex gap-4 justify-center'>
                        <div className='w-7 h-7 md:w-11 md:h-11 bg-primary rounded-full flex justify-center items-center border-solid border-2 border-indigo-600 '>
                            <TfiFacebook className='text-sm md:text-xl' />
                        </div>

                        <div className='w-7 h-7 md:w-11 md:h-11  bg-[#cd2d48] y rounded-full flex justify-center items-center border-solid border-2 border-indigo-600 '>
                            <TfiInstagram className='text-sm md:text-xl' />
                        </div>

                        <div className='w-7 h-7 md:w-11 md:h-11 bg-primary rounded-full flex justify-center items-center border-solid border-2 border-indigo-600 '>
                            <TfiFacebook className='text-sm md:text-xl' />
                        </div>
                        {/* <div className='w-11 h-11 bg-primary rounded-full flex justify-center items-center border-solid border-2 border-indigo-600 '>
                            <TfiFacebook fontSize={26} />
                        </div>
                        <div className='w-11 h-11 bg-primary rounded-full flex justify-center items-center border-solid border-2 border-indigo-600 '>
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
