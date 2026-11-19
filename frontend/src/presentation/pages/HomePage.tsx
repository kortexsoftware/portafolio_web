import { Hero } from "../components/sections/Hero";
import {
  DemoSection,
  PainSection,
  ProcessSection,
} from "../components/sections/HomeSections";

export const HomePage = () => (
  <>
    <Hero />
    <PainSection />
    <ProcessSection />
    <DemoSection />
  </>
);
