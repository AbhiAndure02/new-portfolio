import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBar'
import AboutSection from './Components/AboutSection'
import SkillSection from './Components/SkillSection'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar/>
      <div className='container mt-24 mx-auto py-4 px-12'>
      <HeroSection />
      <AboutSection />
      <SkillSection />
  
      <Footer />
      </div>
    </main>
  )
}
