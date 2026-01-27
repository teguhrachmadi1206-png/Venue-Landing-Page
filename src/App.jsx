import { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import UpcomingEvents from './components/UpcomingEvents'
import RentVenues from './components/RentVenue'
import Footer from './components/Footer'
import ArtClass from './components/ArtClass'
import AboutUs from './components/AboutUs'


function App() {
  // Used for setting maximum card displayed in events section, desktop: 3, middle: 2, mobile: 1
  const [mediaCode, setMediaCode] = useState(0)

  function useMediaQuery(query) {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
      const media = window.matchMedia(query)
      if (media.matches !== matches) {
        setMatches(media.matches)
      }

      const listener = () => {
        setMatches(media.matches)
      }

      if (typeof media.addEventListener === 'function') {
        media.addEventListener('change', listener);
      } else {
        media.addListener(listener);
      }

      return () => {
        if (typeof media.removeEventListener === 'function') {
          media.removeEventListener('change', listener);
        } else {
          media.removeListener(listener);
        }
      }

    }, [query, matches])

    return matches
  }

  const isDesktop = useMediaQuery('(min-width: 992px)');
  const isMiddle = useMediaQuery('(min-width: 600px')
  const isMobile = useMediaQuery('(max-width: 599px)');

  useEffect(() => {
    setMediaCode(() => {
      if (isDesktop) {
        return 3
      } else if (isMiddle) {
        return 2
      } else if (isMobile) {
        return 1
      }
    }, [mediaCode])
  })


  return (
    <>
      <Header media={mediaCode} />
      <HeroSection />
      <UpcomingEvents media={mediaCode} />
      <RentVenues media={mediaCode} />
      <ArtClass media={mediaCode} />
      <AboutUs />
      <Footer />
    </>
  )
}

export default App
