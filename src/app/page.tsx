import AboutPage from "@/components/AboutPage";
import GettingStarted from "@/components/GettingStarted";
import LandingPage from "@/components/LandingPage";
import OfferPage from "@/components/OfferPage";


export default function Home() {
  return (
    <div className="min-h-screen min-w-screen">
      <main className="">
        <LandingPage />
        <AboutPage />
        <OfferPage />
        <GettingStarted />
      </main>
    </div>
  );
}
