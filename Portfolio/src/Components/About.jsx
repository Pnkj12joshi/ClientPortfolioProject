import React from 'react'

const About = ( {id}) => {
  return (
    <>
     <div  id={id} className='w-screen flex justify-center items-center flex-col gap-2'>
        <div className=' items-center  flex justify-center flex-col gap-2 p-4'>
        <h1 className='text-5xl font-bold'> About Me </h1>
        <img src='/src/assets/WhatsApp-Image-2019-03-21-at-13.44.54-e1553173956220.jpeg' alt='graphicimage' className='h-[300px] w-[300px]'/>
        <p className='text-center max-w-[80%] text-gray-600'> My name is Vinayak Agarwal, a passionate digital marketing professional with three years of hands-on experience in the industry. Throughout my career, I have worked extensively in SEO, social media marketing, email marketing, and various other digital strategies that help businesses grow their online presence and connect with their target audience effectively.</p>
        </div>
       </div>
       <div className='w-screen flex justify-center items-center flex-col mt-2'>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="h-[30px] w-[80%]"> <path className="fill-yellow-400" class="elementor-shape-fill" d="M738,99l262-93V0H0v5.6L738,99z"></path> </svg>
       <h1 className='text-3xl text-black mt-2 font-bold'> Qualification</h1>
       <div className='flex justify-evenly gap-20 flex-col md:flex-row mt-2 py-3 text-[12px] font-bold'>
        <div className='flex justify-center items-center rounded-[50%] bg-yellow-400 w-[150px] h-[150px] cursor-pointer hover:text-gray-800'>
          Digital marketing Courses
        </div>
        <div className='flex justify-center items-center rounded-[50%] bg-yellow-400 w-[150px] h-[150px] cursor-pointer hover:text-gray-800'>
          Google Ads Certification
        </div> <div className='flex justify-center items-center rounded-[50%] bg-yellow-400 w-[150px] h-[150px] cursor-pointer hover:text-gray-800'>
          Graduation
        </div> <div className='flex justify-center items-center rounded-[50%] bg-yellow-400 w-[150px] h-[150px] cursor-pointer hover:text-gray-800'>
          MBA in Marketing
        </div>
       </div>
       </div>
       <div className='w-screen flex justify-center items-center flex-col mt-4'>
       <h1 className='text-3xl text-black mt-2 font-bold'> Experience</h1>
       <div className='flex justify-evenly gap-20 flex-col md:flex-row mt-2 py-3  text-[12px] font-bold'>
        <div className='flex justify-center items-center rounded-[50%] bg-yellow-400 w-[150px] h-[150px] cursor-pointer hover:text-gray-800'>
        ARS Private Ltd
        </div>
        <div className='flex justify-center items-center rounded-[50%] bg-yellow-400 w-[150px] h-[150px] cursor-pointer hover:text-gray-800'>
        Shikshakul Classes pvt ltd
        </div> <div className='flex justify-center items-center rounded-[50%] bg-yellow-400 w-[150px] h-[150px] cursor-pointer hover:text-gray-800'>
        Karigar Creations 
        </div> <div className='flex justify-center items-center rounded-[50%] bg-yellow-400 w-[150px] h-[150px] cursor-pointer hover:text-gray-800'>
        Mumma's Life
        </div>
       </div>
       </div>
       
    </>
   
  )
}

export default About
