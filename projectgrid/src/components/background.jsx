import '../components/background.css'
import { FaHandshake } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Eve from "../assets/Eve.png"
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaDotCircle } from "react-icons/fa";
import Oliver from '../assets/oliver.png'
import Man from "../assets/man.png"

const background = () => {
  
  return ( 
     <div className='wrapper'>
      <div className="container-left">
        <div className="logo">
        <FaDotCircle /> Xpace
        </div>
        <div className="bring-text">
          <p>Team Together</p>
          <h3>Bring your <br/>team together. <br/> Right here.</h3>
          <p>The quick brown fox jumps over <br/> the lazy dog</p>
          <button>Learn how</button>
        </div>

        <div className="photo-text">
          <div className="photo">
            <div className="photo-man">
            <div className="week5">
              <p>Week 5</p>
            </div>
            <div className='nine-plus'>+9</div>
            </div>
          </div>
          <div className="Xpace"></div>
        </div>
      </div>
      
      {/* container-right */}
      <div className="container-right">
        <div className='hero'>
          <div className='navbar'>
            <p>Product</p>
            <p>Story</p>
            <p>Features</p>
            <p>Contact</p>
            <button>Sign Up</button>
          </div>
          <div className='Eve-cont'>
            <img src={Eve} height={"100%"}></img>
          </div>
          <div className='collaborate'>
            <h2>Collaborate</h2>
            <h2><FaHandshake /> everywhere.</h2>
            <p>Get our free mobile application</p>
            <button>Download</button>
          </div>
        </div>
        <div className='body'>
          <div className="body-container1"></div>
          <div className="body-container2">
            <h3 id="our-text">Our <span>Team</span></h3>
            <h3>Lea Herrera</h3>
            <p>UX Designer <GoArrowUpRight /></p>
          </div>
          <div className="body-container3">
            <div className="oliver-text">
            <h3>Oliver Haller</h3>
            <p>Co-Founder <GoArrowUpRight /></p>
            </div>     
          </div>
        </div>
        <div className='footer'>
          <div className='footer-container1'>
            <div className='join-text'>
                <h3>Join us if you <br/> want!</h3>
                <div className='join-learn'>
                  <button>Join Now!</button>
                  <p>Learn how!</p>
                </div>
            </div>
          </div>
          <div className='footer-container2'>
            <div className="socials-text">
              <p>Social <br/> Media <br/> Managers <br/> <IoIosArrowRoundForward /></p>
            </div>
          </div>
        </div>
      </div>
     </div>
   );
}
 
export default background;