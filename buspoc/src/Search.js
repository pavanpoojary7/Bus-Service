import React from "react";

export const Search=()=>{

  const sizeStyle={
    "height":'100%',
     "width" : '100%'
    
}

    return(
    
    <>
     
     <div className="container align-items-center pt-5">
      <div className="row p-3">
      {/* <Carousel className="  align-item-center pt-4">
  <Carousel.Item> */}
        <div className="card col-4">
            <img style={sizeStyle}
                 className="d-block w-100"
                 src="../pics/one.png"
                  alt="First slide"
                  />
                   
                <a href="#" className="btn btn-primary ">BOOK</a>
                  </div>
                  {/* </Carousel.Item>
        
                  <Carousel.Item> */}
        <div className="card col-4 ">
            <img style={sizeStyle}    
                 className="d-block w-100"
                 src="../pics/two.png"
                 alt="Third slide"
                   />
                    
                    <a href="#" className="btn btn-primary">BOOK</a>
                </div> 
                {/* </Carousel.Item> */}
        
                {/* <Carousel.Item> */}
        <div className=" card col-4 ">
            <img style={sizeStyle}
                 className="d-block w-100"
                 src="../pics/one.png"
                 alt="Third slide"
                 />
                   
                 <a href="#" className="btn btn-primary">BOOK</a>
                 </div>
                 {/* </Carousel.Item>
                 </Carousel> */}

                 </div>
              </div>
    
    
    </>);
}