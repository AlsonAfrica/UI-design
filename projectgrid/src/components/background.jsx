import "./background.css";
function Background() {
  return (
    <div className="wrapper">
      <div className="container1">
        <div className="logo"></div>
        <div className="Text"></div>
      </div>
      <div className="container2">
        <div className="purple-container">
         
          <div className="collaborate">
            <h1>Collaborate</h1><h2>
              <img></img>everywhere.</h2>
            {/* <div className="hand-everywhere">
              
            </div> */}
            <span>Get our mobile free mobile application.</span>
            <div className="button-collab"><button>Download</button></div>
          </div>

          <div className="Navbar">
            <div className="Product">
              <div className="product-text"><p>Product</p></div>
            </div>
            <div className="Story">
            <div className="story-text"><p>Story</p></div>
            </div>
            <div className="Features">
            <div className="features-text"><p>Features</p></div>
            </div>
            <div className="Contact"><div className="contact-text"><p>Contact</p></div>
            </div>
            <div className="Sign-up"><button>Sign Up</button></div>
          </div>
          <div className="background-image"></div>
        </div>
        <div className="faceTeam">
          <div className="face"></div>
          <div className="team">
            <div className="Our-team"><p>Our <span className="Team">Team</span></p></div>
            <div className="Lea"><p>Lea Herrera <span>UX Designer</span></p></div>
  
            <div className="arrow"></div>
          </div>
          <div className="oliver">
            <div className="liver-text"><p>Oliver Haller<span>Co-Founder</span></p></div>
            <div className="liver-photo"></div>
          </div>
        </div>
        <div className="joinSocial">
          <div className="join">  
            <div className="Join-box"></div>
            <div className="Join-button"></div>
            <div className="Social-media"></div>
          
          </div>
          <div className="social"></div>
        </div>
      </div>
    </div>
  );
}
export default Background;
