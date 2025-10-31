import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./scenes/nav/HeaderNav";
import Homepage from "./scenes/homepage/Homepage";
import Footer from "./scenes/nav/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3, h4");

    headings.forEach((heading) => {
      const fragment = document.createDocumentFragment();

      heading.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const words = node.textContent.trim().split(" ");
          words.forEach((word, index) => {
            if (!word) return;

            const outer = document.createElement("span");
            outer.classList.add("reveal-line");

            const inner = document.createElement("span");
            inner.classList.add("reveal-word");
            inner.textContent = word;

            outer.appendChild(inner);
            fragment.appendChild(outer);

            if (index !== words.length - 1) fragment.append(" ");
          });
        } else {
          fragment.appendChild(node.cloneNode(true));
        }
      });

      heading.innerHTML = "";
      heading.appendChild(fragment);

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
      ScrollTrigger.getAll().forEach((t) => t.kill());
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
