import React from 'react'

const experienceArray = [
    {
        jobRole: "Fullstack Developer",
        company: "DM Holdings",
        type: "FULL-TIME",
        date: "JAN 2019 - PRESENT",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .",
    },
    {
        jobRole: "Fullstack Developer",
        company: "Topupmate",
        type: "REMOTE",
        date: "AUG 2023 - MAY 2023",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .",
    },
    {
        jobRole: "Software Developer",
        company: "Webmable",
        type: "REMOTE",
        date: "JAN 2019 - PRESENT",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco .",
    },
]

export default function Experience() {
    return (
        <div className='pt-20 pb-20 mr-36 px-8 md:grid bg-banner w-screen'>
            <div className='flex flex-col gap-4 '>
                <span className='bg-justTop font-Grotesk uppercase px-4 py-2 bg-slate-600 rounded-lg w-fit space-x-9'>Experience</span>
                <h1 className='uppercase text-white text-4xl font-bold mb-6'>My Work <span className='text-primary'>Experience</span> </h1>

                <EachExperience comingParam={experienceArray} />
            </div>
        </div >
    )
}

function EachExperience({ comingParam }) {
    return (
        <div className='flex flex-col gap-4'>
            {
                // console.log(comingParam)
                comingParam.map((item) => (
                    <div className='w-98 md:w-[96%] h-fit p-6 bg-semiPrimary flex flex-col md:flex-row gap-5 border border-semiPrimary shadow-md rounded-lg'>
                        <div className="card w-[15rem] md:w-[15rem] bg-primary rounded-lg flex flex-col flex-grow-0 py-7 pl-4  gap-2">
                            <h1 className='text-xl font-bold'>{item.jobRole}</h1>
                            <h6 className='uppercase'>{item.company} | {item.type} </h6>
                            <h6 className='uppercase font-semibold'>{item.date}</h6>

                            <h5 className='uppercase bg-white rounded-2xl px-3 py-1 w-fit text-sm text-[black]'>Full Time</h5>
                        </div>

                        <div className="info flex flex-col gap-2 flex-1">
                            <h1 className='text-2xl font-bold'>Role</h1>
                            <p className='text-justify'>
                                {item.details}
                            </p>
                        </div>

                    </div>
                ))
            }
        </div>

    )
}
