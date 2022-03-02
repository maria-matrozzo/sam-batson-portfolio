import { Link } from "react-router-dom";

function NavBar() {

    return(
      <div className="nav">
        <ul className="menuItems">
          {/* <li><Link to="/" className="link">Home</Link></li> */}
          <li className="nav_tabs"><Link to="/posts" className= "link">Writing Samples</Link></li>
          <li className="nav_tabs"><Link to="/addsample" className= "link">Add a Sample</Link></li>
        </ul>
      </div>
    )
  }


export default NavBar;