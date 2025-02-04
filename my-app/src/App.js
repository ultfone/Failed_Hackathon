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
import './zeesh1.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {




  return ( 
<>
{/* Routing with d help of docs */}
<BrowserRouter>
<MyNavbar />
<Routes>
  <Route path="/" element={   
  <>
    <Gridmain/> <Zeesh1 /><Textcomp /><MainFooter />
  </>
 } />
  <Route path="/fnq" element={<Fnq></Fnq>} />
  <Route path="/contact" element={<Foorm></Foorm>} />
  <Route path="/services" element={<Services></Services>} />
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
