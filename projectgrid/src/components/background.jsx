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
          <div></div>
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
          <div className="team"></div>
          <div className="oliver"></div>
        </div>
        <div className="joinSocial">
        
          <div className="join"></div>
          <div className="social"></div>
        </div>
      </div>
    </div>
  );
}
export default Background;
