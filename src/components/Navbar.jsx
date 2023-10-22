import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <h1>logo</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
