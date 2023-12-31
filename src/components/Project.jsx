import React from 'react'
import { Link } from 'react-router-dom'
import { VscArrowRight } from 'react-icons/vsc'
import { FiPlus } from "react-icons/fi";


const projectArray = [
    {
        imgsrc: "/assets/topupmatePic.png",
        imgalt: "topupmatePic_img",
        projectname: "Topupmate",
        url: "https://www.topupmate.com/",
        projecttitile: "VTU Website Design",
        projectdesc: "Frontend & Backend Design",
    },
    {
        imgsrc: "/assets/drivingexpressPic.png",
        imgalt: "Driving_img",
        projectname: "Driving-Express",
        url: "https://drivingexpress.ng/",
        projecttitile: "Website Design",
        projectdesc: "Backend Design",
    },

    {
        imgsrc: "/assets/allplzyeePic.png",
        imgalt: "AllPlayee_img",
        projectname: "AllPlayee",
        url: "https://allplayee.com/",
        projecttitile: "Website Application",
        projectdesc: "Frontend & Backend Design",
    },
    {
        imgsrc: "/assets/dmhPic.png",
        imgalt: "DMHoldings_img",
        projectname: "DMHoldings",
        url: "https://dmholdingslimited.com",
        projecttitile: "Website Design",
        projectdesc: "Frontend Design",
    },



];

export default function Project() {
    return (
        <div className='pt-20 pb-10 mb-5 px-8  bg-banner w-screen' id='projects'>
            <div className='flex flex-col gap-4 '>
                <span className='bg-justTop font-Grotesk uppercase px-4 py-2 bg-slate-600 rounded-lg w-fit space-x-9'>My Work</span>
                <h1 className='uppercase text-white text-4xl font-bold mb-6'>Recent Projects</h1>

                <EachProject comingParam={projectArray} />
            </div>
        </div >
    )
}


function EachProject({ comingParam }) {

    return (

        <div className='flex flex-row  justify-start overflow-x-scroll gap-8 no-scrollbar'>

            {comingParam.map((item) => (

                <div className='group p-4 bg-white w-fit md:w-1/3 h-fit rounded-xl flex flex-col flex-shrink-0 gap-6 '>
                    <Link to={item.url}>
                        <div className='relative overflow-hidden flex-shrink-0'>
                            <div className="w-[100%] object-fit rounded-xl group-hover:scale-125 " >
                                <img className='w-[100%] h-[40vh] rounded-xl' src={item.imgsrc} alt={item.imgalt} />
                            </div>

                            <div
                                class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center rounded-xl bg-overlay opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">

                                <h1 class="text-2xl text-white">{item.projectname}</h1>
                                <Link>
                                    <div className='w-11 h-11 mt-2 bg-white rounded-full flex justify-center items-center border-solid border-2 border-[white] hover:bg-primary'>
                                        <FiPlus fontSize={20} color='black' />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Link>

                    <div className='flex justify-between'>
                        <div    >
                            <h2 className='text-[black] text-xl md:text-2xl'>{item.projecttitile}</h2>
                            <p className='text-[gray] w-48 md:w-auto text-sm md:text-sm'>{item.projectdesc}</p>
                        </div>

                        <Link to={item.url}>
                            <div className='w-7 h-7 md:w-11 md:h-11 mt-2 bg-primary rounded-full flex justify-center items-center border-solid border-2 border-[black] '>
                                <VscArrowRight fontSize={20} />
                            </div>
                        </Link>
                    </div>
                </div>


            ))}
        </div>

    )


}