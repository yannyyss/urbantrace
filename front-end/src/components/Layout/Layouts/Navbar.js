import React, {Component} from 'react';
import style from './Navbar.css'
import NavLogo from '../../../images/Urban-Trace-Logo-Nav.png';
import UrbanTrace from '../../../images/UrbanTrace.png';
import Country from '../../../images/UT-country.png';


class Navbar extends Component{

  state = {
    address: ''
  }
  
  onChange = Pollo => {
    console.log(Pollo);
  }

  render (){
    return (
    <div>
        <nav>
          <div className="Navbar">
            <img src={NavLogo} className="Navlogo" alt="" />
            <img src={UrbanTrace} className="Urbantrace" alt="" />
            <img src={Country} className="Country" alt="" />
          </div>
        </nav>
        <div className="Greenbar">
          <input id="address" type="text" className="Address" onChange={this.onChange} />
        </div>
       
    </div>);
  }
  
}

export default Navbar;

