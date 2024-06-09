import Profile from '../assets/profile.png';
import Carousel from '../components/Carousel';
import AboutMe from '../components/AboutMe';

const About = () => {
  return (
    <>
      <div className="flex justify-center text-3xl font-extrabold font-mono">Hi, Im Kenny Charles U. Tabon </div>
     <div className="flex justify-center mt-2"><Carousel/></div>
    <div className="flex flex-row">
  
        <div className="flex  basis-3/4 my-20 mx-20">
          
           <div className="flex flex-col border border-amber-500 p-5 dark:border ">
              <AboutMe/>
              
           </div>
          
        </div>
       
        {/* column 2 */}
        <div className="flex basis-1/2 w-20">
            <div className="flex mt-20 "><img src={Profile} alt="profile" /></div>
        </div>
    </div>
  


    </>
  )
}

export default About