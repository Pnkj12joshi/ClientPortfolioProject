import React from 'react'

const Guarantee = () => {
  return (
    <>
    <div className='w-screen bg-black flex  justify-center items-center py-8'>
    <div className="w-full flex justify-center items-center  flex-col mt-4 mb-4">
      <svg className=' fill-yellow-400 h-[50px] w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"> <path class="elementor-shape-fill" d="M738,99l262-93V0H0v5.6L738,99z"></path> </svg>
     <h1 className='text-3xl text-yellow-400 font-bold mt-6'> What I Guarantee</h1>
     <div className='flex flex-col gap-4 text-white mt-10 sm:flex-row'>
        <div className='flex flex-col gap-2 '>  
            <h1 className=' text-center text-2xl font-bold'>Accurate Execution</h1>
            <p className=' text-center text-l'>Client tailored execution.</p>
        </div>
        <div className='flex flex-col gap-2  w-[400px]'>
            <h1 className='text-center text-2xl font-bold'>Commitment</h1>
            <p className=' text-center'>Wholeheartedly committed to delivering transformational change for each client.</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className=' text-center text-2xl font-bold'>Accurate Execution</h1>
            <p className=' text-center'>Client tailored execution.</p>
        </div>
     </div>
    </div>
    </div>
      
    </>
  
  )
}

export default Guarantee
