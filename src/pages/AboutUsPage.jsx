import AboutContent from "../components/AboutContent";
import HeroSection from "../components/HeroSection";
import { aboutText } from "../data/about";

export default function AboutUsPage() {
    return (
        <>
            <HeroSection page="about" style="border" />
            <AboutContent data={aboutText.story} />
            <AboutContent data={aboutText.vision} />
            <AboutContent data={aboutText.mission} />
            <AboutContent data={aboutText.pros} />
            <AboutContent data={aboutText.timeline} />
            <AboutContent data={aboutText.stats} />
            <AboutContent data={aboutText.cta} />
        </>
    )
}