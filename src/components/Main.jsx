import Navbar from './Navbar'
import Content from './Content'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

export default function Header() {

  return (
    <div className="bg-white">
      <Navbar />
      <Content />
      <Service />
      <About />
      <Contact/>
      <Footer/>
    </div>
  )
}
