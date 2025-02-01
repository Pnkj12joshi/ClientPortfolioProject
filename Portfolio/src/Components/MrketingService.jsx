import React from 'react'

const MrketingService = ({id, handlescroll}) => {
  return (
    <>
     <div id={id} className='w-screen flex justify-center items-center flex-col gap-2 bg-yellow-400 mt-10 '>
       <div className=' mt-5 items-center  flex justify-center flex-col gap-6 p-4 w-full'>
        <div className='flex flex-col gap-4 justify-center items-center w-[80%] mt-4'>
        <h1 className='text-5xl text-white font-bold text-center ' > Marketing Consultancy</h1>
         <p className=' items-center text-black text-center' > Sometimes all you need is a helping hand to get your marketing back on track, and that’s where my marketing consultancy services can help you. Whether your business is a startup, SME or large corporate, I offer <span className='font-bold'>hourly </span>  consultancy sessions,<span> half day </span> and <span className='font-bold'> day
          </span> rates to come into your business and provide expert advice from my years of experience.</p>
       <p className=' items-center text-black text-center'> I work with freelancers, small businesses, professional service firms, and corporations on a marketing consultancy basis. I can advise your business or marketing teams on any marketing issues and blocks you might be experiencing. 
       </p>
       < p className=' items-center text-black text-center'>I work with freelancers, small businesses, professional service firms, and corporations on a marketing consultancy basis. I can advise your business or marketing teams on any marketing issues and blocks you might be experiencing. 
       </p>
       <p className=' items-center text-black text-center'> My marketing consultancy is completely flexible depending on what you need. It could be a one-hour brainstorm over Zoom, Skype or Whatsapp, a sense check or it might be that you need a half day session in your office with your team looking at a new campaign that you might be planning.
       </p>
       <p className=' items-center text-black text-center'>I work as part of your business, give you a fresh perspective and draw on my years of experience across a number of industries to help you get to where you need to be. </p>
      <p className='items-center text-black text-center'> Feel free to get in touch with me at anytime for inquiries, to schedule a <span className='font-bold'>  meeting </span>, or to book an <span className='font-bold'> online session </span> 	</p>
       <button className='bg-black text-white font-bold p-2 hover:text-black hover:bg-white' onClick={()=>handlescroll("contactus")}>Get in Touch</button>
        </div>
        
       </div>
 </div>
    </>
   
  )
}

export default MrketingService
