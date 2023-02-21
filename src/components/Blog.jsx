import React from 'react';

import photo4 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto3.png'

const Blog = () =>{
    return(
        <div className='w-full flex flex-col justify-between bg-floralWhite'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='md:items-start w-full px-2 py-8'>
                    
                    <p className='text-mysticRed text-xs'>Our Capabilities</p>
                    

                    <h2 className='py-3 text-4xl font-bold text-onyx'>Forward Thinking Team Of <br />Designers & Developers</h2>
                    <p className='font-light text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut nisi, <br /> amet rhoncus volutpat neque. Ipsum in aliquam 
                        eget vitae purus felis eget massa felis. <br /> Eu mattis in malesuada facilisi proin vel.</p>
                    <div className=' gap-4 my-5 grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                        <div className=' text-center w-32 p-2 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                        <h5 class="mb-2 text-mysticRed text-xl font-bold tracking-tight  dark:text-white">80%</h5>
                     <p class="font-normal text-onyx dark:text-onyx">Softwer <br /> Development</p>
                        </div>
                        <div className=' text-center w-32 p-2 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                        <h5 class="mb-2 text-mysticRed text-xl font-bold tracking-tight  dark:text-white">90%</h5>
                     <p class="font-normal text-onyx dark:text-onyx">Graphic Design</p>
                        </div>
                        <div className=' text-center w-32 p-2 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                        <h5 class="mb-2 text-mysticRed text-xl font-bold tracking-tight  dark:text-white">85%</h5>
                     <p class="font-normal text-onyx dark:text-onyx">Game Deisgn</p>
                        </div>
                        <div className=' text-center w-32 p-2 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                        <h5 class="mb-2 text-mysticRed text-xl font-bold tracking-tight  dark:text-white">100%</h5>
                     <p class="font-normal text-onyx dark:text-onyx">Web <br /> Development</p>
                        </div>

                    </div>    
                </div>
                <div>
                    <img src={photo4} alt="" />
                </div>

            </div>
            <div className='content-center bg-mysticRed text-white max-w-[1171px] max-h-[273px] m-auto rounded-lg  '>
                <div class="grid grid-cols-4 divide-x p-8">
                    <div className='text-center p-8'>
                    <i class="fa-solid fa-sliders text-3xl"></i>
                    <h2 className='text-xl font-bold'>120</h2>
                    <p className='text-sm'>Top Experts</p>
                    </div>
                    <div className='text-center p-8'>
                    <i class="fa-solid fa-sliders text-3xl"></i>
                    <h2 className='text-xl font-bold'>500</h2>
                    <p className='text-sm'>Strategies</p>
                    </div>
                    <div className='text-center p-8'>
                    <i class="fa-solid fa-sliders text-3xl"></i>
                    <h2 className='text-xl font-bold'>347</h2>
                    <p className='text-sm'>Great Results</p>
                    </div>
                    <div className='text-center p-8'>
                    <i class="fa-solid fa-sliders text-3xl"></i>
                    <h2 className='text-xl font-bold'>120</h2>
                    <p className='text-sm'>Hight Rankings</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Blog