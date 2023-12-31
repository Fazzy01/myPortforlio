import React from 'react'

export default function Banner() {
    return (
        <div className='px-0 py-3 h-fit w-full bg-white'>
            <marquee behaviour='scroll' scrollamount='20' Scrolldelay='100' width='100%' direction='left' truespeed="truespeed">
                <div className='flex flex-row gap-6 justify-center items-center'>

                    <img src="/assets/logo/nodejsLogo.png" alt="nodejs_logo" className='w-[20%] md:w-[10%] h-fit' />

                    <img src="/assets/logo/phplogo1.png" alt="phplogo1" className='w-[20%] md:w-[10%] h-fit' />

                    <img src="/assets/logo/python1.png" alt="python1" className='w-[20%] md:w-[10%] h-fit' />

                    <img src="/assets/logo/postman_2.png" alt="postman_2" className='w-[20%] md:w-[10%] h-fit' />
                    <img src="/assets/logo/larave_logo1.png" alt="larave_logo1" className='w-[20%] md:w-[10%] h-fit' />

                    <img src="/assets/logo/flaskLogo2flaskLogo2.png" alt="flaskLogo2" className='w-[20%] md:w-[10%] h-fit' />
                    <img src="/assets/logo/djangoLogo2.png" alt="djangoLogo2" className='w-[20%] md:w-[10%] h-fit' />
                    <img src="/assets/logo/bootstrapLogo1.png" alt="bootstrapLogo1" className='w-[20%] md:w-[10%] h-fit' />
                    <img src="/assets/logo/tailwindLogo1.png" alt="tailwindLogo1" className='w-[20%] md:w-[10%] h-fit' />
                    <img src="/assets/logo/typescript_logo2.png" alt="typescript_logo2" className='w-[20%] md:w-[10%] h-fit' />
                    <img src="/assets/logo/unsematicLogo1.png" alt="unsematicLogo1" className='w-[20%] md:w-[10%] h-fit' />
                    <img src="/assets/logo/mysql_logo.png" alt="mysql_logo" className='w-[20%] md:w-[10%] h-fit' />
                    <img src="/assets/logo/postgresqlLogo_old.png" alt="postgresqlLogo_old" className='w-[20%] md:w-[10%] h-fit' />
                    <img src="/assets/logo/cpanel_logo.png" alt="cpanel_logo" className='w-[20%] md:w-[10%] h-fit' />
                    <img src="/assets/logo/jqueryLogo.png" alt="jqueryLogo" className='w-[20%] md:w-[10%] h-fit' />

                </div>
            </marquee>
        </div >



        // <div id="controls-carousel" className="relative w-full" data-carousel="slide">
        //     {/* <!-- Carousel wrapper --> */}
        //     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        //         {/* <!-- Item 1 --> */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src="/assets/logo/flaskLogo2flaskLogo2.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="first" />
        //         </div>
        //         {/* <!-- Item 2 --> */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
        //             <img src="/assets/logo/flaskLogo2flaskLogo2.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //         </div>
        //         {/* <!-- Item 3 --> */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //         </div>
        //         {/* <!-- Item 4 --> */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src="/assets/logo/flaskLogo2flaskLogo2.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //         </div>
        //         {/* <!-- Item 5 --> */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //         </div>
        //     </div>
        //     {/* <!-- Slider controls --> */}
        //     <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        //         <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //             <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
        //             </svg>
        //             <span class="sr-only">Previous</span>
        //         </span>
        //     </button>
        //     <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        //         <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //             <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
        //             </svg>
        //             <span class="sr-only">Next</span>
        //         </span>
        //     </button>
        // </div >

    )
}
