import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer" style={{marginTop:'100px'}}>
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Fruits</h4>
            <h6 className="list-unstyled">
              <li>Fruits Company,</li>
              <li>Chennai,</li>
              <li>India</li>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Groups</h4>
            <ui className="list-unstyled">
              <li>Apple</li>
              <li>Orange</li>
              <li>Mango</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact Us</h4>
            <ui className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Fruits | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;