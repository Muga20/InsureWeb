
import './App.css'
import './assets/styles.css'
import { BrowserRouter, Route, Routes ,Router  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layouts/Navbar'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Error from './views/Error';
import Testimonial from './pages/Testimonial';
import Profession from './pages/Profession';
import Footer from './layouts/Footer';
//import Service from './ourService/Services';
import ServiceDetails from './ourService/ServiceDetails';
import General from './categories/General';
import HealthInsure from './categories/HealthInsure';
import LifeInsure from './categories/LifeInsure';
import DataOne from './constants/DataOne';
import DataTwo from './constants/DataTwo';
import DataThree from './constants/DataThree';
import GetInsured from './components/GetInsured';



function App() {

  return (
    <div className="App">
      <div> 
      <BrowserRouter>
          <Navbar/>
          <Routes>
          <Route path="*" element={ <Error/> }/>
          <Route path="/" element={ <Home/> }/>
          <Route path="/contact" element={ <Contact/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/testimonial" element={ <Testimonial/> }/>
          <Route path="/team" element={ <Profession/> }/>
          {/**
           <Route path="/service" element={ <Service/> }/>
        */}
       
          <Route path="/services/:id" element={ <ServiceDetails/> }/>
          <Route path="/dataOne/:id" element={ <DataOne/>}/>
          <Route path="/dataTwo/:id" element={ <DataTwo/> }/>
          <Route path="/dataThree/:id" element={ <DataThree/>}/>
          <Route path="/general" element={ <General/>}/>
          <Route path="/health" element={ <HealthInsure/>}/>
          <Route path="/life" element={ <LifeInsure/>}/>
          <Route path="/getInsured/:id" element={ <GetInsured/> }/>
       


          
          </Routes>
          <Footer/>

      </BrowserRouter>

    
      </div>
    </div>
  )
}

export default App

