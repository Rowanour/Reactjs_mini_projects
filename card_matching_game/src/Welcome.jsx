

import icon from './assets/icon0.png'
function Welcome() {
    return (
      <div className="contain">
        <h1 className="welcome">Welcome to</h1>
        <h1 className='memorize'>Memorize</h1>
        <div>
          <img className='icon' src={icon} alt="" />
          <input className='text' type="text" placeholder="Enter Your Name" required/>
        </div>
      </div>
    );
  }
  
  export default Welcome;