import '../components/background.css'
import { FaRegHandshake } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { FcDoughnutChart } from "react-icons/fc";
import { FaCalendarWeek } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { GiSunbeams } from "react-icons/gi";

const background = () => {
  const handleClick =()=>{
    console.log("button was clicked") // logs a message for every button click
  }
  return ( 
    <div className='wrapper'>
      <div className='container-left'>
        <div className='Xpace'><p> <FcDoughnutChart /> Xpace </p></div>
        <div className='Team'><p> Team Together </p>
        <h1>Bring Your <br/> team together. <br/> Right here.</h1>
        <p>The quick brown fox jumps over <br/> the lazy dog.</p>
        </div>
        <div className="Learn-btn" onClick={handleClick}><button>Learn how</button></div>
        <div className="pic-xpace">
          <div className="pic-x">
            <div className='nine'>+9 %</div>
          </div>
          <div className='week'>
              week 5 <FaCalendarWeek />
            </div>
          <div className="london">
            <div className='logo'>
            <GiSunbeams />
            </div>
            <div className='founded'><h6>We're Xpace - <br/> Founded in <br/> London</h6></div>
            <div className='light-message'>
            <div className='light'><FaLightbulb /></div>
            <div className='message'>
              <p>A short message that will bring you costumers into the world of photography</p>
            </div>
            </div>
            <div className='learn-our-story'>
              <p>learn Our story <GoArrowUpRight /></p>
            </div>
          </div>

        </div>
    
      </div>
      <div className='container-right'>
        <div className='banner'>
          <div className='navbar'>
            <p>Product</p>
            <p>Story</p>
            <p>Features</p>
            <p>Contact</p>
            <button  onClick={handleClick}>Sign Up</button>
          </div>
          <div className='photo-text'>
            <div className='photo'></div>
            <div className='text'>
              <div className='collaborate'>
              <h1>Collaborate<br/><FaRegHandshake /> everywhere.</h1>
              <p>Get our free mobile application.</p>
              </div>
              <div className='button'>
                  <button  onClick={handleClick}>Download</button>
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
                  <div><button  onClick={handleClick}>Join Now</button></div>
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