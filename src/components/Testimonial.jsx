import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import photo18 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto17.jpg'
// import photo19 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto18.jpg'
// import photo20 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto19.jpg'



const data = [
    {
        id: 1,
        username: 'Phillip Levin',
        testimonial: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
        work: 'CEO / Creative IT'
    },
    {
        id: 2,
        username: 'Lincoln Lipshutz',
        testimonial: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
        work: 'CEO / Creative IT'
    },
    {
        id: 3,
        username: 'Craig Siphron',
        testimonial: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
        work: 'CEO / Creative IT'
    },
    {
        id: 4,
        username: 'Craig Siphron',
        testimonial: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
        work: 'CEO / Creative IT'
    },
    {
        id: 5,
        username: 'Craig Siphron',
        testimonial: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
        work: 'CEO / Creative IT'
    }
]

// import photo17 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto17.jpg'
const Testimonial = () =>{
    return(
        <div className='w-full bg-floralWhite'>
            <div className='text-center my-6'>
                 <div class="inline-flex items-center justify-center w-full">
                     <hr class="w-64 h-px bg-mysticRed border-0 dark:bg-mysticRed"/>
                     <p class="absolute px-3 text-xs font-medium text-mysticRed -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray">Our Testimonial</p>
                </div>
                    <h2 className='text-2xl font-bold text-onyx'>What Our Client Saying</h2>
            </div>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        {data.map( user => (
            <SwiperSlide key ={user.id}>

                <div className='w-full'>
                <div className='flex justify-center '>

                <div className=' max-w-sm  bg-white border border-gray rounded-lg shadow dark:bg-gray dark:border-gray'>
                    <div className='p-5'>
                    <p className='text-gray pb-5'>{user.testimonial}</p>
                    <div className='flex'>
                        <div>
                        <img src={photo18} alt="" />
                        </div>
                    <div className='px-3'>
                    <h6 className='text-mysticRed block text-bold'>{user.username}</h6>
                    <p className='text-gray text-xs'>{user.work}</p>
                    </div>
                    </div>
                    </div>
                </div>
                </div>

                </div>

            </SwiperSlide>
            
            
        ))}
        </Swiper>
</div>


    )
}

export default Testimonial