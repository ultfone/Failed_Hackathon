import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './Navbar';
import Textcomp from './textcomp';
import Gridmain from './gridmain';
import Zeesh1 from './zeesh1';
import Services from './services';
import Fnq from './fnq';
import MainFooter from './footer';
import Foorm from './contact';
import Caarousel from './Carousel';
import './zeesh1.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './Details';

function App() {

  return ( 
<>
{/* Routing with d help of docs */}
<BrowserRouter>
<MyNavbar />
<Routes>
  <Route path="/" element={   
  <>
    <Gridmain/> <Zeesh1 /><Textcomp /><Caarousel></Caarousel><MainFooter/>
  </>
 } />
  <Route path="/fnq" element={<><Fnq></Fnq><MainFooter /></>} />
  <Route path="/contact" element={<><Foorm></Foorm><MainFooter /></>} />
  <Route path="/services" element={<><Services></Services><MainFooter /></>} />
  <Route path="/details" element={<><Details></Details><MainFooter /></>} />
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
