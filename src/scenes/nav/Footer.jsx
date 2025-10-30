import Spline from "@splinetool/react-spline";

import footerLogo from "../../assets/footer-logo.png";
import gitIcon from "../../assets/git-icon.svg";
import secondIcon from "../../assets/second-icon.svg";
import xIcon from "../../assets/x-icon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src={footerLogo} alt="logo" />

          <div className="footer-spline">
            <Spline scene="https://prod.spline.design/d8YzOeFHvH42Ip7Z/scene.splinecode" />
          </div>
        </div>
      </div>
      <div className="footer-copy-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="footer-copy">
                <p>© 2025 Converge. All rights reserved.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="footer-social">
                <a href="#" target="_blank">
                  <img src={gitIcon} alt="logo" />
                </a>
                <a href="#" target="_blank">
                  <img src={secondIcon} alt="logo" />
                </a>
                <a href="#" target="_blank">
                  <img src={xIcon} alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
