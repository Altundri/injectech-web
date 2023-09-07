import Navbar from './Navbar'
import Content from './Content'
import Service from './Service'

export default function Header() {

  return (
    <div className="bg-white">
      <Navbar />
      <Content />
      <Service />
    </div>
  )
}
