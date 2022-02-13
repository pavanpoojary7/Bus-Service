import React from 'react';
import{Menu} from './Menu';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Home';
import { Footer } from './Footer';
import { Search } from './Search';

const App=()=>{
  return(

 <BrowserRouter>
 <Menu/>
 <Home/>
 <Footer/>

 <Routes>
  
 <Route path="/"  element={Search}/>

 </Routes>
 </BrowserRouter>


  );
}
export default App;