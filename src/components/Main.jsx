import Navbar from './Navbar'
import Content from './Content'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import { useRef } from 'react'

export default function Header() {

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const resultRef = (ref) => {
    switch (ref) {
      case 'homeRef':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'servicesRef':
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'aboutRef':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contactRef':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }

  return (
    <div className="bg-white">
      <Navbar resultRef = {resultRef}/>
      <Content />
      <Service ref={servicesRef}/>
      <About ref={aboutRef}/>
      <Contact ref={contactRef}/>
      <Footer/>
    </div>
  )
}
