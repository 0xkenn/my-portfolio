import AboutPage from "./Pages/AboutPage"
import ProjectPage from "./Pages/ProjectPage"
import Footer from "./layout/Footer"
import NavBar from "./layout/NavBar"
import ContactPage from "./Pages/ContactPage"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


const App = () => {
  return (
   <>
  
     <div className=" flex flex-col h-screen ">
    
        <Router>
            <NavBar/>
             <Routes>
                <Route path="/" element={<AboutPage/>}/>
                <Route path="/projects" element={<ProjectPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
             </Routes>
            <Footer/>
        </Router>

      </div>
      
   </>
  )
}

export default App  