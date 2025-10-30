import Spline from "@splinetool/react-spline";
import Lottie from "lottie-react";
import heroLottie from "../../assets/hero-anim.json";

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
              {/* <div className="animation-hero-spline">
                <Spline scene="https://prod.spline.design/d8YzOeFHvH42Ip7Z/scene.splinecode" />
              </div> */}
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="lottie-anim">
              <Lottie animationData={heroLottie} loop={true} autoplay={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
