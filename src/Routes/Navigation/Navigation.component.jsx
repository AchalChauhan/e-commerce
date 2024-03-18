import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
        <img src={logo} alt="" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">Shop</Link>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;