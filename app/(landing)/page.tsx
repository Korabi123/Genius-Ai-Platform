import { LandingContent } from "@/components/Landing-Content";
import { LandingHero } from "@/components/Landing-Hero";
import { LandingNavbar } from "@/components/Landing-Navbar";

const LandingPage = () => {
  return ( 
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
 
export default LandingPage;