import Profile from '../assets/profile.png';
import Carousel from '../components/Carousel';
import AboutMe from '../components/AboutMe';

const About = () => {
  return (
    <>
      <div className="flex justify-center text-center text-2xl md:text-3xl font-extrabold font-mono mt-5 px-2 sm:overflow-auto">
        Hi, Im Kenny Charles U. Tabon
      </div>
      
      <div className="flex justify-center mt-5 px-2">
        <Carousel />
      </div>
      
      <div className="flex  flex-col md:flex-row items-center mt-10 xl:mx-60 md:mx-5 sm:mx-5 space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20">
        {/* Column 1: AboutMe */}
        <div className="flex flex-col w-full 2xl:w-full    md:w-1/2 lg:w-3/4 p-5 border border-amber-500 dark:border">
          <AboutMe />
        </div>
        
        {/* Column 2: Profile Image */}
        <div className="flex justify-center 2xl:w-full md:w-full lg:w-3/4  p-5">
          <img src={Profile} alt="profile" className="w-full max-w-xs md:max-w-md lg:max-w-lg" />
        </div>
      </div>
    </>
  );
}

export default About;
