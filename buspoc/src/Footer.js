import React from "react";

const boxStyle={
    "padding":'70px 60px',
    "bottom": '0',
     "width":'100%',
     "marginTop": '10px'
}

const containerStyle={
    "flexDirection": 'column',
    "maxWidth": '1000px',
    "margin": '0 auto'
}
const rowStyle={
    "display":'flex',
    "gridGap":"20px",
    "gridTemplateColumns" :'repeat'
}
const colStyle={
    "flexDirection":'column',
    "textAlign":'left',
    "marginLeft":'60px'
}
const linkStyle={
    "color":"white",
    "marginBottom": '20px',
    "fontSize":'18px',
    "textDecoratiion":'none'
}
const headingStyle={
    "fontSize":'24px',
    "color" : 'white',
    "fontWeight":'bold',
    "marginBottom" : '40px'
}


export const Footer=()=>{
    return(
    <>

    {/* footer details */}
    <div className="box bg-dark  " style={boxStyle}>
    <div className="container d-flex " style={containerStyle}>
        <div className="row d-flex"style={rowStyle}>
          
          <div className="col d-flex"style={colStyle}>
            <h1  style={headingStyle}>Services</h1>
            <a  className="text-decoration-none" href="#" style={linkStyle}>Travelling</a>
            <a  className="text-decoration-none" href="#" style={linkStyle}>Tours</a>
            <a className="text-decoration-none" href="#" style={linkStyle}>Bus race</a>
            <a  className="text-decoration-none" href="#" style={linkStyle}>Function</a>
          </div>
          <div className="col d-flex"style={colStyle}>
            <h1  style={headingStyle}>Contact Us</h1>
            <a  className="text-decoration-none" href="#" style={linkStyle}>Uttar Pradesh</a>
            <a   className="text-decoration-none"href="#" style={linkStyle}>Ahemdabad</a>
            <a  className="text-decoration-none" href="#" style={linkStyle}>Bangalore</a>
            <a  className="text-decoration-none" href="#" style={linkStyle}>Mumbai</a>
          </div>
          <div className="col d-flex"style={colStyle}>
            <h1  style={headingStyle}>Social Media</h1>
            <a className="text-decoration-none" href="#" style={linkStyle}>
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </a>
            <a  className="text-decoration-none" href="#" style={linkStyle}>
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </a>
            <a  className="text-decoration-none"href="#" style={linkStyle}>
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </a>
            <a  className="text-decoration-none" href="#" style={linkStyle}>
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </a>
          </div>
        </div>
      </div>
      </div>
    
    </>);
}