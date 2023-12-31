import React from 'react'

const serviceArray = [
    {
        bg: "bg-lemon",
        imgsrc: "/assets/icons/frontend_icon.png",
        imgalt: "frontend",
        title: "Frontend",
        details: "Strong working experience in frontend development using Vue.js and React.js,I bring a wealth of expertise to the table.",
    },
    {
        bg: "bg-green",
        imgsrc: "/assets/icons/backend_icon.png",
        imgalt: "backend",
        title: "Backend",
        details: "Experienced Backend Developer: Harnessing Python, Django, and Laravel PHP to Empower Web Applications.",
    },
    {
        bg: "bg-blue",
        imgsrc: "/assets/icons/devops_icon.png",
        imgalt: "devOps",
        title: "DevOps",
        details: "Seasoned DevOps Engineer: Leveraging Docker, Jenkins, AWS, and Git to Streamline Development and Deployment.",
    },
]

export default function Services() {
    return (
        <div id='services'>
            <div className='pt-20 pb-10 mb-5 px-8 md:grid'>
                <div className='flex flex-col gap-4 '>
                    <span className='bg-justTop font-Grotesk uppercase px-4 py-2 bg-slate-600 rounded-lg w-fit space-x-9'>Services</span>
                    <h1 className='uppercase text-white text-4xl font-bold mb-6'>Design <span className='text-primary'>Services</span> I am Providing</h1>

                    <EachService comingParam={serviceArray} />

                </div>
            </div >
        </div>
    )
}


function EachService({ comingParam }) {
    return (

        <div className='flex flex-col md:flex-row justify-center items-center gap-10' >
            {

                comingParam.map((item) => (
                    <div className={`h-fit md:h-[25vw] w-[16rem]  md:w-[14rem] px-5 py-6 ${item.bg} flex flex-col gap-5`}>
                        <img src={item.imgsrc} alt={item.imgalt} className='w-[40%] self-center' />
                        <h1 className='text-xl text-[black] text-justify font-bold self-center'>{item.title}</h1>
                        <p className='text-[black] text-justify'>
                            {item.details}
                        </p>
                    </div>
                ))
            }
        </div >

    )
}