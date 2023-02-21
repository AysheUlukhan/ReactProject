import React from 'react';

import photo2 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto2.png'

const About = () =>{
    return(


        <div class="bg-floralWhite">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
            <p className='text-mysticRed'>About Us</p>
            <h2 className='py-3 max-w-2xl mb-4 leading-none md:text-5xl xl:text-5xl dark:text-onyx text-3xl font-bold text-onyx'>Grow Your Business With <br /> Our Agency</h2>
            <p className=' text-gray max-w-2xl mb-6 font-light  lg:mb-4 md:text-lg lg:text-md dark:text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <br />
                         in digni ssim euismod purus donec mus vulputate habitant iaculis. Com <br />
                            odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.</p>
    
                            <ul>
                            <li className='text-onyx' > <i class="fa-solid fa-circle-check text-mysticRed"></i> Innovative website design</li>
                            <li className='text-onyx'><i class="fa-solid fa-circle-check text-mysticRed"></i> UI/UX design with global trends</li>
                            <li className='text-onyx'><i class="fa-solid fa-circle-check text-mysticRed"></i> Web and email hosting service</li>
                       </ul>
                
            </div>
            <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img  src={photo2} alt="/" />
            </div>                
        </div>
    </div>
    );
}

export default About