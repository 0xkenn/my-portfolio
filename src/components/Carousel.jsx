import laravel from '../assets/techstack/laravel.svg'
import react from '../assets/techstack/react.svg'
import tailwind from '../assets/techstack/tailwindcss-icon.svg'

const Carousel = () => {
  return (
    <>
      <div className="carousel rounded-box">
  <div className="carousel-item">
    <img src={laravel} alt="Burger" />
  </div> 
  <div className="carousel-item">
    {<img src={react} alt="React" />}
  </div> 
  <div className="carousel-item">
    <img src={tailwind} alt="Burger" />
  </div> 
  

</div>
    </>


  )
}

export default Carousel