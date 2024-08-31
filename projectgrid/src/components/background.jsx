import '../components/background.css'
import { FaRegHandshake } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

const background = () => {
  return ( 
    <div className='wrapper'>
      <div className='container-left'>
        
      </div>
      <div className='container-right'>
        <div className='banner'>
          <div className='navbar'>
            <p>Product</p>
            <p>Story</p>
            <p>Features</p>
            <p>Contact</p>
            <button>Sign Up</button>
          </div>
          <div className='photo-text'>
            <div className='photo'></div>
            <div className='text'>
              <div className='collaborate'>
              <h1>Collaborate<br/><FaRegHandshake /> everywhere.</h1>
              <p>Get our free mobile application.</p>
              </div>
              <div className='button'>
                  <button>Download</button>
              </div>
            </div>
          </div>
        </div>
              <div className='containers'>
                <div className='face'></div>
                <div className='our-team'>
                  <div className='team'><h6>Our <span>Team</span></h6></div>
                  <div className='lea'><h6>Lea Herrera</h6>
                  <p>UX Designer <GoArrowUpRight /></p>
                  </div>
                </div>
                <div className='oliver'>
                  <div className="oliver-text"><h6>Oliver Haller</h6></div>
                  <div className='founder'><p>Co-Founder<GoArrowUpRight /></p></div>
                </div>
              </div>
              <div className='footer'>
              <div className='footer-left'>
                <div className='join'><h6>Join us if you<br/>want!</h6></div>
                <div className='btn-learn'>
                  <div><button>Join Now</button></div>
                  <div><p>Learn How!<GoArrowUpRight /></p></div>
                </div>
              </div>
              <div className='footer-right'></div>
              </div>
      </div>   
    </div>
   );
}
 
export default background;