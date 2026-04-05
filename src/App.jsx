import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Events from './pages/Events'
import Venue from './pages/Venue'
import Classes from './pages/Classes'
import AboutUsPage from './pages/AboutUsPage'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

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
      <Router>
        <Header media={mediaCode} />
        <Routes>
          <Route exact path="/" element={<Homepage media={mediaCode} />} />
          <Route path="/events" element={<Events media={mediaCode} />} />
          <Route path="/venues" element={<Venue />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
