import { useState } from 'react'

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 slide-in-left">
            <div className="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center shadow-figma">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-primary-900">Elegant Weddings</span>
          </div>
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={item.href}
                  className="text-primary-700 hover:text-accent-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="hidden md:block px-6 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors duration-200 font-medium shadow-figma slide-in-right"
          >
            Get Started
          </button>
          <button
            className="md:hidden text-primary-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 fade-in">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-primary-700 hover:text-accent-600 transition-colors duration-200 font-medium block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

// Footer Component
export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">Elegant Weddings</span>
            </div>
            <p className="text-primary-300 max-w-md">
              Creating unforgettable moments and turning your dream wedding into reality.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-300">
              <li><a href="#home" className="hover:text-accent-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-accent-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-accent-400 transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-accent-400 transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-300">
              <li>hello@elegantweddings.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-300">
          <p>&copy; {currentYear} Elegant Weddings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
