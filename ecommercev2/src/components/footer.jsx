import React from "react";
// import { Link } from "react-router-dom";
import "../css/footer.css";
import pay from "../images/pay.png";
import appstore from "../images/appstore.jpeg";
import play from "../images/play.jpeg";
import Connoisseur from "../images/Connoisseur-International.png";

export const Footer = () => {
  return (
    <footer>
      <div className="col">
        <img
          src={Connoisseur}
          className="logo"
          alt="logo"
          height="90px"
          width="90px"
        />
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> 2014 Forest Hills Drive, Fayetteville, North
          Carolina
        </p>
        <p>
          <strong>Phone:</strong> 704 222 1365 / (704) 234 6789
        </p>
        <p>
          <strong>Hours:</strong> 09:00 am - 06:00 pm, Mon - Sat
        </p>
        <div class="follow">
          <h4>Follow Us</h4>
          <div class="icon">
            <a href="https://www.facebook.com/">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.pinterest.com/">
              <i class="fab fa-pinterest"></i>
            </a>
            <a href="https://www.youtube.com/">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <p>About</p>
        <p>Delivery</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Contact</p>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <p>Sign in</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Track my Order</p>
        <p>Help</p>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src={appstore} alt="Apple store" />
          <img src={play} alt="Google Play" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={pay} alt="Pay" />
      </div>
      <p>&copy; 2023, Connoisseur International E-Commerce</p>
    </footer>
  );
};

export default Footer;
