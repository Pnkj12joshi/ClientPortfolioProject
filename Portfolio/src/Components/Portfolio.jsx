import React from 'react'
import resuume from "../Components/Portfolio.pdf"

const Portfolio = ({id}) => {
  const handlesubmit = ()=>{
    const resumeurl = resuume;
    const anchor = document.createElement("a");
    anchor.href = resumeurl;
    anchor.download = "Portfolio.pdf";
    anchor.click();

  }
  return (
    <>
      <div id={id} className='w-screen bg-black flex  justify-center items-center mt-4'>
        <div className='flex flex-col  text-white gap-4 mt-4'>
         <h1 className='text-center  text-4xl font-bold'> Portfolio</h1>
         <p className='text-xl font-semibol mt-4'> Have a look at some of my previous projects.</p>
         <button className=' mt-4 text-white bg-yellow-400 text-center p-2 rounded-[8px] hover:text-yellow-400 hover:bg-white' onClick={handlesubmit}>View and Download</button>
        </div>
 </div>
    </>
  )
}

export default Portfolio
