import React from 'react';

import photo5 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto4.jpg'
import photo6 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto5.jpg'
import photo7 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto6.jpg'
import photo8 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto7.jpg'
import photo9 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto8.jpg'
import photo10 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto9.jpg'
import photo11 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto10.jpg'
import photo12 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto11.jpg'
import photo13 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto12.jpg'

const Portfolio = () =>{
    return (
        <div className='w-full '>
            <div className='text-center my-6'>

            <div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-px bg-mysticRed border-0 dark:bg-mysticRed"/>
    <p class="absolute px-3 text-xs font-medium text-mysticRed -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray">Our Services</p>
</div>
            <h2 className='text-2xl font-bold text-onyx'>Our Case Study</h2>
            </div>

           
            <div>
                <div className=' flex items-center justify-center container mx-auto'>
                    <ul className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
                        <li className='bg-mysticRed text-white w-24 h-13 text-center '>All</li>
                        <li className='text-gray'>UX Design</li>
                        <li className='text-gray'>Web Design</li>
                        <li className='text-gray'>App Development</li>
                        <li className='text-gray'>Game Design</li>
                        <li className='text-gray'>Graphic Design</li>
                    </ul>
                </div>
                <div className='my-4 flex items-center justify-center container mx-auto'>

                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 '>

                    <div>
                        <img src={photo5} alt="" />
                        <img src={photo6} alt="" />
                        <img src={photo7} alt="" />
                    </div>
                    <div>
                        <img src={photo8} alt="" />
                        <img src={photo9} alt="" />
                        <img src={photo10} alt="" />
                    </div>
                    <div>
                        <img src={photo11} alt="" />
                        <img src={photo12} alt="" />
                        <img src={photo13} alt="" />
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio