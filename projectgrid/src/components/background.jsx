import '../components/background.css'
import { FaRegHandshake } from "react-icons/fa6";

const background = () => {
  return ( 
    <div className='wrapper'>
      <div className='container-left'></div>
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
                <div className='our-team'></div>
                <div className='oliver'></div>

              </div>
      </div>
      
    </div>
   );
}
 
export default background;