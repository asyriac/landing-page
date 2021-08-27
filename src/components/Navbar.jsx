import { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleToggleNavbar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <nav className="navbar-container flex flex-align-item-center">
      <h2 className="flex-grow">
        nullBrains<span className="font-color-primary">.</span>
      </h2>
      <div className={`flex flex-grow flex-align-item-center flex-justify-content-between nav-item-mobile-sidebar ${showSidebar && `nav-item-mobile-sidebar-visible`}`}>
        <div className="flex gap">
          <a href="/#" className="active">
            Home
          </a>
          <a href="/#">Features</a>
          <a href="/#">Blog</a>
          <a href="/#">Contact</a>
          <a href="/#">
            <i className="fas fa-search"></i>
          </a>
        </div>
        <div className="flex flex-align-item-center gap">
          <a href="/#">Sign In</a>
          <a href="/#" className="btn">
            Sign up
          </a>
        </div>
      </div>
      <div className="nav-item-mobile">
        <i className="fas fa-bars icon" onClick={handleToggleNavbar}></i>
      </div>
    </nav>
  );
};

export default Navbar;
