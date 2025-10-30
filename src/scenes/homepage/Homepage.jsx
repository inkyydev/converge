import HeroHome from "./HeroHome";
import CoreFeatures from "./CoreFeatures";
import Faq from "./Faq";
import UnfifiedTrading from "./UnifiedTrading";
import "./Homepage.css";
export default function Homepage() {
  return (
    <>
      <HeroHome />
      <CoreFeatures />
      <UnfifiedTrading />
      <Faq />
    </>
  );
}
