import AboutContent from "../components/AboutContent";
import HeroSection from "../components/HeroSection";
import Breadcrumbs from "../components/Breadcrumbs";
import { aboutText } from "../data/about";

export default function AboutUsPage({ media }) {
    const pagePaths = [
        { label: "Home", href: "/" },
        { label: "About Us" }
    ];

    return (
        <>
            <Breadcrumbs paths={pagePaths} />
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