import AboutContent from "../components/AboutContent";
import HeroSection from "../components/HeroSection";
import { aboutText } from "../data/about";

export default function AboutUsPage({ media }) {
    return (
        <>
            <HeroSection page="about" style="border" />
            <AboutContent media={media} data={aboutText.story} />
            <AboutContent media={media} data={aboutText.vision} />
            <AboutContent media={media} data={aboutText.mission} />
            <AboutContent media={media} data={aboutText.pros} />
            <AboutContent media={media} data={aboutText.timeline} />
            <AboutContent media={media} data={aboutText.stats} />
            <AboutContent media={media} data={aboutText.cta} />
        </>
    )
}