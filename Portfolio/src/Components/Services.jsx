import React from 'react'
import webpage from "../assets/webpage.jpg"
import marketing from "../assets/branding.jpg"
import socialmedia from '../assets/social.jpg'
import content from '../assets/content.jpg'
import review from '../assets/review.jpg'
import seo from '../assets/seo.jpg'
import influencer from '../assets/influencer.jpg'
import branding from '../assets/branding.jpg'

const Services = ({id,handlescroll}) => {
  const imagearr =[
    {"title":"Website Design & Development", "image":webpage},
    {"title":"Social Media Management & Ad Campaigns", "image":socialmedia},
    {"title":"Branding", "image":branding},
    {"title":"Content Writing", "image":content},
    {"title":"SEO & SEM", "image":seo},
    {"title":"Influencer Marketing & Management", "image":influencer},
    {"title":"Mystery Shopping & Reviews", "image":review},

  ]
  return (
    <>
      <div id ={id} className=' w-screen'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
  <path  className="fill-black-400" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
   c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
   c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"/>
</svg>

       <div className='flex justify-center items-center w-full flex-col gap-4'>
        <h1 className='text-center font-bold text-4xl '> Services</h1>
        <p className=' text-center text-sm font-bold mt-4 sm:text-sm lg:text-xl '> Go through the marketing services that I offer and feel free to get in touch fur further inquiries and clarification.</p>
       <div className='w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-600 px-4 mt-4  justify-center items-center'>
          {imagearr.map((item, index)=>{
            return(
              <div className='flex flex-col justify-center items-center gap-4'>
                <img src={item.image} alt="webpage" className='w-[150px] h-[150px] rounded-full cursor-pointer transition duration-200 hover:opacity-70 hover:w-[180px] hover:h-[150px]'/>
                <h1 className='text-xl font-bold text-center'>{item.title}</h1>
              <button className=' p-2 text-white bg-yellow-400 hover:text-yellow-400 hover:bg-white' on onClick={()=> handlescroll("contactus")}> Know more </button>
              </div>
            )
          })}
       </div>
       </div>
      </div>
    </>
  )
}

export default Services
