import React from 'react';

import photo14 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto13.jpg'
import photo15 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto14.jpg'
import photo16 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto15.jpg'

const Capabilities = () =>{
    return(
        <div className='w-full  bg-floralWhite'>
            <div className='text-center py-6'>
            <div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-px bg-mysticRed border-0 dark:bg-mysticRed"/>
    <p class="absolute px-3 text-xs font-medium text-mysticRed -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray">Our Blog</p>
        </div>
                
                <h2 className='text-2xl font-bold text-onyx'>Every Singel Update From Here</h2>
            </div>

        <div className='my-4 flex items-center justify-center container mx-auto '>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
                
<div class="max-w-xs  bg-white border border-gray rounded-lg shadow dark:bg-gray dark:border-gray ">
        <div>
        <img class="rounded-t-lg" src={photo14} alt="" />
        </div>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-lg font-bold  tracking-tight text-onyx dark:text-white">35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired</h5>
        </a>
        <span className='text-xs px-1 text-onyx'>January 25, 2021</span>
        <span className='text-xs px-1 text-onyx'>Cristofer Westervelt</span>
        <span className='text-xs text-onyx'>10 Comment</span>
        <p class="my-3 font-normal text-gray dark:text-gray">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-mysticRed rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            Read More
        </a>
     </div>
</div>

<div class="max-w-xs bg-white border border-gray rounded-lg shadow dark:bg-gray dark:border-gray">
    <div>
        <img class="rounded-t-lg" src={photo15} alt="" />
    </div>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-onyx dark:text-white">Ridiculously powerful 2021 iPad Pro may drop this month</h5>
        </a>
        <span className='text-xs px-1 text-onyx'>January 25, 2021</span>
        <span className='text-xs px-1 text-onyx'>Cristofer Westervelt</span>
        <span className='text-xs text-onyx'>10 Comment</span>
        <p class="my-3 font-normal text-gray dark:text-gray">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-mysticRed rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            Read More
            
        </a>
    </div>
</div>

<div class="max-w-xs bg-white border border-gray rounded-lg shadow dark:bg-gray dark:border-gray">
    <div className=''>
        <img class="rounded-t-lg text-center" src={photo16} alt="" />
    </div>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-onyx dark:text-white">Memphis Design: the defining look of the 1980s</h5>
        </a>
        <span className='text-xs px-1 text-onyx'>January 25, 2021</span>
        <span className='text-xs px-1 text-onyx'>Cristofer Westervelt</span>
        <span className='text-xs text-onyx'>10 Comment</span>
        <p class="my-3 font-normal text-gray dark:text-gray">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-mysticRed rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            Read More
            
        </a>
    </div>
</div>


            </div>
        </div>

        </div>
    );
}

export default Capabilities