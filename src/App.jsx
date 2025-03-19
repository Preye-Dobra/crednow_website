import { useEffect } from "react";
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/styling/style.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from "./components/Loader";
import About from "./pages/About";
import GetStarted from "./components/GetStarted";
import FAQs from "./components/FAQs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <>
      <section className="crednow-body-section xui-text-white">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy-policies' element={<Privacy />} />
            <Route path='/terms-and-conditions' element={<Terms />} />
            <Route path='*' element={<h1>No Match</h1>} />
          </Routes>
        </Suspense>
        <section className='xui-pb-3 xui-lg-pt-10 xui-pt-none xui-container'>
          <GetStarted />
        </section>
        <FAQs />
      </section>
      <Footer />
    </>
  )
}

export default App
