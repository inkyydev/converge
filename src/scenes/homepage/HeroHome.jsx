import Lottie from "lottie-react";
import heroLottie from "../../assets/hero-anim.json";
import scrollArrow from "../../assets/scroll-arrow.json";
import SplinePart from "../../compontents/SplinePart";

export default function HeroHome() {
  return (
    <section id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-9">
            <div className="hero-text">
              <h1>One Platform Unifying All Odds.</h1>
              <a href="#" className="btn-all">
                Sign-up for Access
              </a>
              <div className="animation-hero-spline">
                <SplinePart />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="lottie-anim">
              <Lottie animationData={heroLottie} loop={true} autoplay={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#core_features">
          <Lottie animationData={scrollArrow} loop={true} autoplay={true} />
        </a>
      </div>
    </section>
  );
}
