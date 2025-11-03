import footerLogo from "../../assets/footer-logo.png";
// import gitIcon from "../../assets/git-icon.svg";
import secondIcon from "../../assets/second-icon.svg";
import xIcon from "../../assets/x-icon.svg";
import dicordIcon from "../../assets/discord-icon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src={footerLogo} alt="logo" />
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
                {/* <a href="#" target="_blank">
                  <img src={dicordIcon} alt="discord" />
                </a> */}
                <a href="https://docs.converge.market/" target="_blank">
                  <img src={secondIcon} alt="logo" />
                </a>
                <a href="https://x.com/convergemarkets" target="_blank">
                  <img src={xIcon} alt="x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
