import React from 'react';
import{Menu} from './Menu';
import {BrowserRouter,Link,Route,Routes,Navigate} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Home';
import { Footer } from './Footer';
import { Search } from './Search';
import{BusAvailable} from './BusAvailable';




const App=()=>{
  return(
 <>
 <BrowserRouter>
 <Menu/>
 
 <Routes>
<Route path="/"  element={<Home/>}/>
   <Route path="/search" exact element={<Search/>}/>  
   <Route path="/buses" exact element={<BusAvailable/>}/>   
 </Routes>

 <Footer/>
 </BrowserRouter>
 </>


  );
}
export default App;