import Logo from "../assets/Images/keyspace-logo1.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Keyspace logo" />
        </div>

        <ul className="navlinks">
          <li>
            <a href="#">Buy</a>
          </li>
          <li>
            <a href="#">Rent</a>
          </li>
          <li>
            <a href="#">Find Agents</a>
          </li>
          <li>
            <a href="#">Commercial</a>
          </li>
          <li>
            <a href="#">inspire</a>
          </li>
          <li>
            <a href="#">overseas</a>
          </li>
        </ul>

        <div className="buttons">
          <button className="btn1">Login</button>
          <button className="btn2">Sign up</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
