import React from 'react';

import photo21 from 'C:/Users/HP/Desktop/Projects/my-project/src/assets/foto20.jpg'
const Page404 = () =>{
    return(
        <div className='w-full'>
            
                <div className='container max-w-screen-sm mx-auto text-center pb-5'>
                    <div className=''>
                        <img src={photo21} alt="" />
                        <h2 className='text-vivid-cerise text-4xl font-bold font-["Source Sans Pro"]'>SAYFA BULUNAMADI</h2>
                        <p className='font-medium leading-7 text-base pt-5 font-["Source Sans Pro"] '>Aradığınız içeriğe şu anda ulaşılamıyor. İsterseniz diğer <br /> ürünlere göz ata bilirsiniz.</p>
                        <div>
                        <button type="button" className="mt-5 px-7 text-base text-white bg-vivid-cerise hover:bg-vivid-cerise focus:ring-4 focus:ring-vivid-cerise font-medium rounded-lg  py-2.5 mr-2 mb-2 dark:bg-vivid-cerise dark:hover:bg-vivid-cerise focus:outline-none dark:focus:ring-vivid-cerise">Alışverişe devam et</button>
                        </div>
                    </div>
                </div>
            
        </div>

        
    )
}

export default Page404