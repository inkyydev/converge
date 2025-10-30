import chainIco from "../../assets/chain-icon.svg";
import chainIcoLinear from "../../assets/chain-icon-linear.svg";
import zeroIcon from "../../assets/zero-icon.svg";
import zeroIconLinear from "../../assets/zero-icon-linear.svg";
import custodyIcon from "../../assets/custody-icon.svg";
import custodyIconLinear from "../../assets/custody-icon-linear.svg";
import proIcon from "../../assets/pro-icon.svg";
import proIconLinear from "../../assets/pro-icon-linear.svg";
import crossIcon from "../../assets/cross-icon.svg";
import crossIconLinear from "../../assets/cross-icon-linear.svg";
import unifiedIcon from "../../assets/unified-icon.svg";
import unifiedIconLinear from "../../assets/unified-icon-linear.svg";

export default function CoreFeatures() {
  return (
    <section id="core_features">
      <div className="container">
        <h2>Core Features</h2>
        <div className="core-features-wrapper">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="features-single">
                <div className="feature-icon">
                  <img src={chainIco} alt="chain" />
                  <img src={chainIcoLinear} alt="chain" />
                </div>
                <h3>Chain Agnostic</h3>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="features-single">
                <div className="feature-icon">
                  <img src={zeroIcon} alt="chain" />
                  <img src={zeroIconLinear} alt="chain" />
                </div>
                <h3>Zero Added Fees</h3>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="features-single">
                <div className="feature-icon">
                  <img src={custodyIcon} alt="chain" />
                  <img src={custodyIconLinear} alt="chain" />
                </div>
                <h3>Custody Free</h3>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="features-single">
                <div className="feature-icon">
                  <img src={proIcon} alt="chain" />
                  <img src={proIconLinear} alt="chain" />
                </div>
                <h3>
                  Pro-Grade <br /> Tools
                </h3>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="features-single">
                <div className="feature-icon">
                  <img src={crossIcon} alt="chain" />
                  <img src={crossIconLinear} alt="chain" />
                </div>
                <h3>
                  Cross-Venue <br /> Arbitrage
                </h3>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="features-single">
                <div className="feature-icon">
                  <img src={unifiedIcon} alt="chain" />
                  <img src={unifiedIconLinear} alt="chain" />
                </div>
                <h3>
                  Unified Portfolio <br /> Management
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
