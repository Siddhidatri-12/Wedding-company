import { useState } from 'react'

// Hero Section
export const Hero = () => {
  const Button = ({ variant = 'primary', children, className = '', ...props }: any) => {
    const variants: any = {
      primary: 'bg-accent-600 text-white hover:bg-accent-700 shadow-figma hover:shadow-figma-lg',
      outline: 'border border-primary-300 text-primary-700 hover:bg-primary-50 bg-white',
    }
    return (
      <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    )
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-6 leading-tight fade-in-up">
            Your Dream Wedding
            <span className="block text-accent-600 mt-2">Awaits</span>
          </h1>
          <p className="text-lg text-primary-600 mb-10 max-w-2xl mx-auto leading-relaxed fade-in-delay-1">
            We create unforgettable moments and turn your vision into reality. From
            intimate ceremonies to grand celebrations, every detail is crafted with
            precision and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-delay-2">
            <Button variant="primary">Plan Your Wedding</Button>
            <Button variant="outline">View Gallery</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services & About Combined
export const ServicesAbout = () => {
  const services = [
    { id: '1', title: 'Wedding Planning', description: 'Full-service wedding planning from concept to execution.', icon: '💍' },
    { id: '2', title: 'Venue Selection', description: 'Expert guidance in finding the perfect venue.', icon: '🏛️' },
    { id: '3', title: 'Floral Design', description: 'Stunning floral arrangements and decorations.', icon: '🌸' },
    { id: '4', title: 'Catering', description: 'Exquisite cuisine tailored to your preferences.', icon: '🍽️' },
    { id: '5', title: 'Photography', description: 'Professional capture of your precious moments.', icon: '📸' },
    { id: '6', title: 'Entertainment', description: 'Live music and DJ services for your celebration.', icon: '🎵' },
  ]

  const stats = [
    { number: '500+', label: 'Weddings Planned' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Awards Won' },
  ]

  return (
    <>
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Our Services</h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Comprehensive wedding services designed to make your special day perfect
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-figma hover:shadow-figma-lg transition-shadow duration-300 border border-primary-100 fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{service.title}</h3>
                <p className="text-primary-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-primary-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold text-primary-900 mb-6">About Elegant Weddings</h2>
              <p className="text-base text-primary-600 mb-4 leading-relaxed">
                With over 15 years of experience, we create magical moments for couples worldwide.
                Every love story is unique, and your wedding should reflect that uniqueness.
              </p>
              <p className="text-base text-primary-600 leading-relaxed">
                Our team ensures every detail is perfect, combining creativity and flawless execution
                to bring your dream wedding to life.
              </p>
            </div>
            <div className="slide-in-right">
              <div className="bg-white rounded-lg p-4 shadow-figma-lg">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop"
                  alt="Wedding celebration"
                  className="rounded-lg shadow-figma w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-in-up">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white rounded-lg hover:bg-accent-50 transition-colors duration-300 border border-primary-100"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-3xl font-bold text-accent-600 mb-2 fade-in">
                  {stat.number}
                </div>
                <div className="text-primary-600 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Gallery Section
export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Ceremony', 'Reception', 'Decor', 'Catering', 'Floral', 'Venue']
  const galleryImages = [
    { id: '1', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', alt: 'Elegant wedding ceremony', category: 'Ceremony' },
    { id: '2', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop', alt: 'Beautiful wedding reception', category: 'Reception' },
    { id: '3', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop', alt: 'Wedding decorations', category: 'Decor' },
    { id: '4', src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop', alt: 'Wedding cake', category: 'Catering' },
    { id: '5', src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop', alt: 'Bridal bouquet', category: 'Floral' },
    { id: '6', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', alt: 'Wedding venue', category: 'Venue' },
  ]
  const filteredImages = selectedCategory === 'All' ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Our Gallery</h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Explore our portfolio of beautiful weddings and celebrations
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-accent-600 text-white shadow-figma'
                  : 'bg-white text-primary-700 hover:bg-primary-50 border border-primary-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-figma hover:shadow-figma-lg transition-shadow duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const Button = ({ variant = 'primary', children, className = '', ...props }: any) => {
    const variants: any = {
      primary: 'bg-accent-600 text-white hover:bg-accent-700 shadow-figma hover:shadow-figma-lg',
    }
    return (
      <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    )
  }

  return (
    <section id="contact" className="py-24 bg-primary-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Let's discuss how we can make your dream wedding a reality
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="slide-in-left">
            <h3 className="text-2xl font-semibold text-primary-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900 mb-1">Email</h4>
                  <p className="text-primary-600">hello@elegantweddings.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900 mb-1">Phone</h4>
                  <p className="text-primary-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-in-right">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-figma-lg border border-primary-100">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-primary-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-primary-900"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all resize-none text-primary-900"
                    placeholder="Tell us about your dream wedding..."
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
