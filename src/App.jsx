import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./scenes/nav/HeaderNav";
import Homepage from "./scenes/homepage/Homepage";
import Footer from "./scenes/nav/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.15,
      smooth: true,
      wheelMultiplier: 1.1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const headings = document.querySelectorAll("h1, h2, h3, h4");

    headings.forEach((heading) => {
      const text = heading.textContent.trim();
      heading.textContent = "";

      const words = text.split(" ");
      words.forEach((word) => {
        const outer = document.createElement("span");
        outer.classList.add("reveal-line");
        const inner = document.createElement("span");
        inner.classList.add("reveal-word");
        inner.textContent = word + " ";
        outer.appendChild(inner);
        heading.appendChild(outer);
      });

      gsap.fromTo(
        heading.querySelectorAll(".reveal-word"),
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          ease: "power3.out",
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="fl-page">
      <Header />
      <main>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
