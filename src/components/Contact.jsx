import React from 'react'; 

const Contact = () =>{
    return(
        <div className='w-full my-6 '>
            <div className='bg-mysticRed grid md:grid-cols-2 max-w-[700px] m-auto h-32 rounded-lg'>
                <div className='items-start m-auto text-white'>
                    <p className='text-xs '>Subscribe Newsletter</p>
                    <h2 className='text-2xl font-bold'>Lets Stay In Touch</h2>
                </div>
                <div className='m-auto'>
                    <input className='h-9 rounded-lg' type="email" placeholder='Enter your email' />
                    <button className='bg-mysticRed text-white hover:bg-mysticRed text-white '>Subscribe Now</button>
                </div>
            </div>
        </div>
    );
}

export default Contact