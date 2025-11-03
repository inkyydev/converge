import logo from "../../assets/logo.png";
import gitIcon from "../../assets/git-icon.svg";
// import dicordIcon from "../../assets/discord-icon.svg";
import secondIcon from "../../assets/second-icon.svg";
import xIcon from "../../assets/x-icon.svg";

export default function HeaderNav() {
  return (
    <header>
      <div className="container">
        <div className="main-nav">
          <div className="row align-items-center">
            <div className="col-6 col-md-5">
              <div className="main-nav-logo">
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-7">
              <div className="main-nav-items">
                <div className="main-nav-items__social">
                  {/* <a href="#" target="_blank">
                    <img src={dicordIcon} alt="dicord" />
                  </a> */}
                  <a href="https://docs.converge.market/" target="_blank">
                    <img src={secondIcon} alt="git" />
                  </a>
                  <a href="https://x.com/convergemarkets" target="_blank">
                    <img src={xIcon} alt="x" />
                  </a>
                </div>
                <div className="main-nav-items__btn">
                  <a
                    href="https://tally.so/r/31jLA1"
                    target="_blank"
                    className="btn-all"
                  >
                    Sign-up for Access
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
