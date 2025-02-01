import React from 'react'
import Navbar from './Navbar';
import About from './About';
import MarketingService from './MrketingService';
import Services from './Services';
import Portfolio from './Portfolio';
import Guarantee from './Guarantee';
import Contactus from './Contactus';

const Dashboard = () => {
  const handlescroll = (id)=>{
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }
   
  }
  return (
    <>
        <div className=' bg-black h-[571px]'>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
  <path  className="fill-yellow-400" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
   c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
   c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"/>
</svg>

      <div className=' w-full flex justify-center items-center'>
        <div> <Navbar handlescroll = {handlescroll}/></div>
      </div>
    </div>
    <div className=' w-full bg-yellow-400 flex  flex-col-reverse md:flex-row'>
    <div className=' flex-1  py-3'>
      <div className='ml-[40px] flex flex-col gap-[50px]'>
      <h1 className='text-6xl font-bold'> Hello, I'm Vinayak.</h1>
      <p className='text-3xl text-white '> I’m a Marketing & Digital Marketing Freelancer. With a great passion about real and honest business conversations.</p>
      <button className="border-2 border-white text-black p-3 w-auto self-start hover:text-white text-sm">HOW CAN I HELP</button>
      </div>
    </div>
    <div className='flex-1 flex justify-center items-center py-3'>
    <img src='/src/assets/sutterstock.png' className='w-[200px] h-[200px] md:w-[593px] md:h-[370px]'/>
    </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
  <path  className="fill-yellow-400" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
   c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
   c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"/>
</svg>
 <About id = "about"/>
 <MarketingService id= "marketervice" handlescroll = {handlescroll}/>
 <Services id="service" handlescroll={handlescroll}/> 
 <Portfolio id="portfolio"/>
 <Guarantee id="guarantee"/>
 <Contactus id="contactus"/>
    </>

  )
}

export default Dashboard;
