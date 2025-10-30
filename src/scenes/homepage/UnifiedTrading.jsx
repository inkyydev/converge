"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import circleLinear from "../../assets/circle-linear.png";
import logo from "../../assets/logo-trading.png";

gsap.registerPlugin(ScrollTrigger);

export default function UnifiedTrading() {
  useEffect(() => {
    const el = document.querySelector(".circle-anim");
    const heading1 = document.querySelector(".heading-first");
    const heading2 = document.querySelector(".heading-second");
    const heading3 = document.querySelector(".heading-third");
    const heading4 = document.querySelector(".heading-fourth");

    const isDesktop = window.innerWidth > 991;

    if (isDesktop) {
      // -------- 💻 DESKTOP: SCRUB + HEADINGS --------
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top top",
          end: "90% bottom",
          scrub: 1,
        },
      });

      // aktivacija headinga dok se skrola
      ScrollTrigger.create({
        trigger: ".scroll-section",
        start: "top top",
        end: "90% bottom",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          heading1.classList.toggle("active", p >= 0.01);
          heading2.classList.toggle("active", p >= 0.25);
          heading3.classList.toggle("active", p >= 0.5);
          heading4.classList.toggle("active", p >= 0.75);
        },
      });

      // maska – conic reveal sa scroll scrub-om
      tl.fromTo(
        el,
        {
          webkitMaskImage:
            "conic-gradient(from 0deg, transparent 0deg, transparent 0deg, black 0deg)",
          maskImage:
            "conic-gradient(from 0deg, transparent 0deg, transparent 0deg, black 0deg)",
        },
        {
          webkitMaskImage:
            "conic-gradient(from 0deg, transparent 0deg, transparent 360deg, black 360deg)",
          maskImage:
            "conic-gradient(from 0deg, transparent 0deg, transparent 360deg, black 360deg)",
          ease: "none",
          duration: 1,
        }
      );
    } else {
      // -------- 📱 MOBILE: SAMO MASK ANIMACIJA (jednom kad uđe u viewport) --------
      ScrollTrigger.create({
        trigger: ".scroll-section",
        start: "top 80%",
        markers: true,
        once: true,
        onEnter: () => {
          gsap.fromTo(
            el,
            {
              webkitMaskImage:
                "conic-gradient(from 0deg, transparent 0deg, transparent 0deg, black 0deg)",
              maskImage:
                "conic-gradient(from 0deg, transparent 0deg, transparent 0deg, black 0deg)",
            },
            {
              webkitMaskImage:
                "conic-gradient(from 0deg, transparent 0deg, transparent 360deg, black 360deg)",
              maskImage:
                "conic-gradient(from 0deg, transparent 0deg, transparent 360deg, black 360deg)",
              duration: 1.4,
              ease: "power2.out",
            }
          );
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="scroll-section">
      <div className="circle-wrapper">
        <div className="circle-border">
          <img src={circleLinear} alt="circle" />
          <div className="circle-anim"></div>
        </div>

        <div className="circle-inner">
          <img src={logo} alt="logo" />
          <h2>Unified Trading</h2>
          <p>
            Converge turns fragmented markets into one seamless trading
            terminal.
          </p>
        </div>

        <div className="title-mobile-hidden">
          <h2>Unified Trading</h2>
          <p>
            Converge turns fragmented markets into one seamless trading
            terminal.
          </p>
        </div>

        <div className="circle-titles">
          <h4 className="heading-fourth">
            Parsing <br /> Engine
          </h4>
          <h4 className="heading-first">
            Prediction Market <br /> Aggregator
          </h4>
          <h4 className="heading-second">
            Professional-
            <br />
            Grade Terminal
          </h4>
          <h4 className="heading-third">
            Arbitrage <br /> Engine™
          </h4>
        </div>
      </div>
    </section>
  );
}
