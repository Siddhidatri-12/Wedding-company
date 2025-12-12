import { Header, Footer } from './components/Navigation'
import { Hero, ServicesAbout, Gallery, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesAbout />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App


