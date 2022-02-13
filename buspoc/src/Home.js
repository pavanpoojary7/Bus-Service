//importing identifiers from nodemodules
import React from "react";
import { Button, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from "react-router-dom";




export const Home=()=>{
   
const backgroundStyle={
    "height":"500px",
    "width":'100%',
    "backgroundSize":"cover",
    "overflow": 'hidden',
    // "backgroundImage":"url('./pics/background.png')"
    
  }

  let navigate = useNavigate(); 
  const searching=()=>{
    let path = `newPath`; 
    navigate("search");
        
       
  }
//style for cards
const cardImage={
    "width": "370px",
    "height": '300px'
}

return(

<>
<img style={backgroundStyle} src="../pics/background.png" alt="backgroundimage"/>

{/* searching bus */}
 <div className="mt-4 container">
            <h1 className="display-2 text-center text-info"></h1>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 shadow-lg p-3">
                     {/*added text fields Menu.js*/}
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <FormControl variant=""></FormControl>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="From" variant="standard" />
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="To" variant="standard" />
                                <input type="date" 
                                 className="form-control mt-1" 
                                 />
                                <Button variant="outlined" href="#outlined-buttons"onClick={searching}>Search</Button>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>

{/* card part */}
<div className="container mt-lg-2">
<div className="d-flex flex-row flex-nowrap overflow-auto p-4">
     <div className="card col-lg-4 col-md-6 col-sm-12 p-2 me-1 mt-2" >
             <div className="card-body shadow-lg ">

                     <img style={cardImage} src="../pics/one.png" className="me-1 card-img" alt="..."/>
                                        
             </div>
     </div>

     <div className="card col-lg-4 col-md-6 col-sm-12 p-2 me-1 mt-2" >
             <div className="card-body shadow-lg">
                                        
                       <img style={cardImage} src="../pics/two.png" className="me-1 card-img" alt="..."/>
                                        
         </div>
   </div>

     <div className="card col-lg-4 col-md-6 col-sm-12 p-2 me-1 mt-2" >
          <div className="card-body shadow-lg">
                                        
                        <img style={cardImage} src="../pics/one.png" className="me-1 card-img" alt="..."/>
                                        
             </div>
     </div>

         <div className="card col-lg-4 col-md-6 col-sm-12 p-2 me-1 mt-2" >
            <div className="card-body shadow-lg">
                                        
                          <img style={cardImage} src="../pics/two.png" className="me-1 card-img" alt="..."/>
                                        
             </div>
         </div>
      </div> 
  </div>
                           
                            

</>
);
}