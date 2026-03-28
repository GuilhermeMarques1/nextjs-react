import { CallToAction } from "@/templates/landing-page/sections/call-to-action";
import { CustomerStorySection } from "@/templates/landing-page/sections/customer-story-section";
import { FeatureSection } from "@/templates/landing-page/sections/feature-section";
import { HeroSection } from "@/templates/landing-page/sections/hero-section";
import { SupportSection } from "@/templates/landing-page/sections/support-section";

export const LandingPage = () => {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerStorySection />
        <CallToAction />
      </article>
    </>
  );
}