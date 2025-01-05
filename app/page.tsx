import ContactSection from "@/components/contact";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Integrations from "@/components/integrations";
import IssueTracking from "@/components/issue-tracking";
import Navbar from "@/components/nav-bar";
import Pricing from "@/components/pricing";
import RoadmapView from "@/components/roadmap-view";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div id="root">
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <IssueTracking></IssueTracking>
      <RoadmapView></RoadmapView>
      <Integrations></Integrations>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
}
