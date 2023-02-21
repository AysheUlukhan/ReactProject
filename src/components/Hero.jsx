import React from 'react';

import photo from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto1.png'

const Hero = () =>{
    return(


        <div class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
        <h2 className='py-3 max-w-2xl mb-4 leading-none md:text-5xl xl:text-5xl dark:text-onyx text-3xl font-bold text-onyx'>Choose What Matters <br /> To You Business & Your <br /> Customers</h2>
        <p className=' text-gray max-w-2xl mb-6 font-light  lg:mb-4 md:text-lg lg:text-md dark:text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <br />
                     in digni ssim euismod purus donec mus vulputate habitant iaculis. Com <br />
                        odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.</p>

                        <a href="#" class="inline-flex items-center px-5 py-3 my-5 text-sm font-medium text-center text-white bg-mysticRed rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            Get Started Now
            
         </a>
            
        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex">
        <img  src={photo} alt="/" />
        </div>                
    </div>
</div>
    )
}

export default Hero