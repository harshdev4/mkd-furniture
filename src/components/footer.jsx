import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="myfooter container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/company-profile" className="nav-link px-2 text-body-secondary">
                Company Profile
              </a>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-2 text-body-secondary">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link px-2 text-body-secondary">
                Contact Us
              </Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2023 M.K.D, Pvt</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;