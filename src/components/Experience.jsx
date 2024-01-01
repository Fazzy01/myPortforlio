import React from 'react'

const experienceArray = [
    {
        jobRole: "Fullstack Developer",
        company: "DM Holdings",
        type: "FULL-TIME",
        date: "JAN 2019 - PRESENT",
        details: `DM Holding is a conglomerate of companies with vast interests in Entertainment and Media business. it makes use of technology (ranging from software development, website design and Networking) in its promotion of Media/Marketing Communication landscape.
While in the company, I design website using Bootstrap, React and vanilla JS.
while I am responsible for providing solution to IT problems that the company face, I am also responsible for server configuration and set up and looking forward to using ansible for the server automation as the company scale.
I am also responsible for Software development and testing.the company has many project under its, so base on the project is the stack that would be used.
I am responsible for debugging and providing solutions when software / app is down or not misfunctioning.`,
    },
    {
        jobRole: "Fullstack Developer",
        company: "Topupmate",
        type: "REMOTE",
        date: "AUG 2023 - MAY 2023",
        details: `Designed and maintained an Online Bill Payment Platform, which not only assists small scale VTU businesses in linking/feeding on other external APIs but also streamline their daily purchase, generate invoice and flexibility in switching to different APIs depending on the clients choice/factors. The web application was built on PHP/OOP for creating robust API services, Autoloader was implemented for ease load of classes, JQuery/Ajax was used for fast loading and display of data to the frontend, JWT was also used for securely transporting of data on the server-side, Finally MySQL database was utilized as the Primary data storage.`,
    },
    {
        jobRole: "Software Developer",
        company: "Webmable",
        type: "INTERNSHIP",
        date: "JAN 2019 - PRESENT",
        details: `webmable is a web hosting platform which aims at easing hosting of website at cheaper rate. the project was built on Nodejs & Express, and Postgresql. while with the company I was supporting in frontend design for the company using HTML, CSS, Bootstrap, JQuery. 
        Also supporting in the backend team. 
        
        I was able to achieve and Design a self project, E-Library Management system which aims at keeping records and track of the circulation of books. The project was built using Nodejs & Express. EJS was used as the view engine. Multer was implemented for getting api body coming from Ajax.`,
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

                            <h5 className='uppercase bg-white rounded-2xl px-3 py-1 w-fit text-sm text-[black]'>{item.type}</h5>
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
