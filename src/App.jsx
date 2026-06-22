import Header from '/components/Header'
import Features from '/components/Features'
import Contents from '/components/contents'
import Galery from '/components/galery'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import Opentype from '../components/Opentype'
import Footer from '../components/Footer'

function App() {
  return (
    <div className ="bg-[#181818] flex flex-col gap-[120px]">
    <Header/>
    <div className="">
     <img src="/screens.png" />
    </div>
    <Features/>
   <Contents/>
   <Galery/>
   <Partners/>
   <Testimonials/>
   <Opentype/>
   <Footer/>
    </div>
  )
}

export default App