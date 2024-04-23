import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.modular.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const handleClick = (e) => {
    window.scrollTo(0, 0);
    document.querySelector(".navbar-collapse").classList.remove("show");
  };

  let location = useLocation().pathname;
  useEffect(()=>{
    setActiveLink(location);
  },[location]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-beige navbar-fixed`}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/img/mkd logo.jpeg"
              alt="logo"
              className="mkd-logo"
              width={100}
            />
          </Link>

          <div className="cart-menu-container">
            <div className={`nav-item shoppingCartMini`} onClick={handleClick}>
              <Link className={`nav-link ${activeLink === "/cart" && "text-black"}`} to={"/cart"}>
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
            <button
              className="navbar-toggler" 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === "/" && "active"}`}
                  aria-current="page"
                  to="/"
                  onClick={handleClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/company-profile" && "active"
                  }`}
                  to="/company-profile"
                  onClick={handleClick}
                >
                  Company Profile
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Products
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      School Furniture
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Home Furniture
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Office Furniture
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Library Furniture
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Staff Room Furniture
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Lab Furniture
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Computer Lab Furniture
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      College Furniture
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/contact" && "active"
                  }`}
                  to="/contact"
                  onClick={handleClick}
                >
                  Contact Us
                </Link>
              </li>

              <li
                className={`nav-item shoppingCart ${
                  activeLink === "" && "active"
                }`}
                onClick={handleClick}
              >
                <Link className={`nav-link ${activeLink === "/cart" && "active"}`} to={"/cart"}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
