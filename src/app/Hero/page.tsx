import React from 'react'

const Page = () => {
    return (
        <section className='w-[70%] mx-auto z-40'>
            <div className='mt-[12%]'>
                <div >
                    <h1 className='text-[72px] text-white font-extrabold'>Empowering <span className='text-blue-800'>Innovation</span> </h1>
                    <h1 className='text-[72px] text-white mt-2 font-extrabold'>Igniting Change</h1>
                </div>
                <div className='mt-5 flex gap-3'>
                    <button className='bg-purple-700 glow text-white text-center py-2 px-8'>Projects</button>
                    <button className='bg-purple-700 glow text-white text-center py-2 px-8'>Consultation</button>
                </div>
            </div>
        </section>
    )
}

export default Page