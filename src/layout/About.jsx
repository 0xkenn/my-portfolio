import Profile from '../assets/profile.png'
import Carousel from '../components/Carousel'


const About = () => {
  return (
    <>
    <div className="flex flex-row">
   
        <div className="flex  basis-3/4 my-20 mx-40 border border-solid p-5">
        
           <div className="flex flex-col">
          
           <h1 className="flex flex-col text-2xl font-bold  mx-3 mb-2">About Me</h1>
            <p className="mx-3 mt-1 text-left font-mono">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
           </div>
           
            

        
               
            
        </div>
       
      
        

        {/* column 2 */}
        <div className="flex basis-1/2 w-20">
            <div className="flex mt-20 "><img src={Profile} alt="profile" /></div>
        </div>
    </div>
    <div className="flex items-center"> <span className='text-2xl font-bold ml-10 font-mono'>Tech Stack: </span><span className='flex mb-2 '><Carousel/></span></div>


    </>
  )
}

export default About