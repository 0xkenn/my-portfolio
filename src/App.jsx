import AboutPage from "./Pages/AboutPage"
import Footer from "./layout/Footer"
import NavBar from "./layout/NavBar"



const App = () => {
  return (
   <>
  
     <div className=" flex flex-col h-screen ">
     <NavBar/>
      <AboutPage/>
      <Footer/></div>
      
   </>
  )
}

export default App  