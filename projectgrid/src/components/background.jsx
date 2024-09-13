import '../components/background.css'
import { FaHandshake } from "react-icons/fa";
// import { MdArrowOutward } from "react-icons/md";
import Eve from "../assets/Eve.png"
import Oliver from '../assets/oliver.png'

const background = () => {
  
  return ( 
     <div className='wrapper'>
      <div className="container-left"></div>
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
            <h2><FaHandshake /> everywhere</h2>
            <p>Get our free mobile application</p>
            <button>Download</button>
          </div>
        </div>
        <div className='body'>
          <div className="body-container1"></div>
          <div className="body-container2"></div>
          <div className="body-container3">
          {/* <img src={Oliver} heght={"100%"}></img> */}
          </div>
        </div>
        <div className='footer'>
          <div className='footer-container1'></div>
          <div className='footer-container2'></div>
        </div>
      </div>
     </div>
   );
}
 
export default background;