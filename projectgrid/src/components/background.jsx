import '../components/background.css'
import { FaHandshake } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const background = () => {
  
  return ( 
    <div className="wrapper">
      <div className="container">
        <div className="left-container">
          <div></div>

        </div>
      <div className='right-container'>
        
        <div className="hero">
          <div className="navbar">
            <p>Product</p>
            <p>Story</p>
            <p>Features</p>
            <p>Contacts</p>
            <button>Sign-Up</button>
          </div>
          <div className='collaborate'>
            <h2>Collaborate</h2>
             <h2 id="everywhere"><FaHandshake /> everywhere.</h2>
             <p>Get our free mobile application</p>
             <button >Download</button>

          </div>
        </div>
          <div className="body">

            <div className="face"></div>
            <div className="our-team">
              <div className='team'><h4>Our <span>Team</span></h4></div>
              <div className='lea'><h3>Lea Herrera</h3></div>
              <p>UX Designer</p>
            </div>
            <div className="oliver">
              <div className='oliver-text'>
                <h3>Oliver Haller</h3>
                <p>Co-Founder <MdArrowOutward /></p>
              </div>
            </div>

          </div>
          <div className="footer">
            <div className="footer-1"></div>
            <div className="footer-2"></div>
          </div>

        </div>
      </div>
    </div>
   );
}
 
export default background;