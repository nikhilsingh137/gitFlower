import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* Add other links as needed */}
      </nav>
    </div>
  );
};

export default Navbar;
