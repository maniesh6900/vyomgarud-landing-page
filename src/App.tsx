import { useEffect, useState } from 'react';
import { ChevronRight, Cpu, Eye, Mail, MapPin, Menu, Phone, Radio, Shield, Target, X, Zap } from 'lucide-react';

const VyomGarudLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<null | number>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const capabilities = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Tactical Reconnaissance',
      desc: 'Real-time intelligence gathering with AI-powered threat detection and autonomous navigation systems.',
      features: ['24/7 Operation', 'Encrypted Comms', 'Weather Resistant']
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Autonomous Systems',
      desc: 'Next-gen flight controllers with adaptive AI for mission-critical operations in contested environments.',
      features: ['Self-Healing', 'Swarm Capable', 'Zero Latency']
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'ISR Platforms',
      desc: 'Multi-spectrum surveillance systems delivering actionable intelligence with military-grade precision.',
      features: ['IR/Thermal', '4K+ Imaging', 'Edge Processing']
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: 'Command & Control',
      desc: 'Secure, redundant C2 infrastructure for coordinated multi-platform operations and mission planning.',
      features: ['Mesh Network', 'Offline Mode', 'Real-time Sync']
    }
  ];

  const highlights = [
    { icon: <Target className="w-6 h-6" />, text: 'Sub-meter precision targeting', metric: '<1m CEP' },
    { icon: <Zap className="w-6 h-6" />, text: 'Rapid deployment capability', metric: '<5min' },
    { icon: <Shield className="w-6 h-6" />, text: 'Military-grade encryption', metric: 'AES-256' }
  ];

  return (
    <div className="bg-zinc-950 text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-900/95 backdrop-blur-lg border-b border-zinc-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-sm flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">VyomGarud</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['About', 'Capabilities', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-zinc-300 hover:text-orange-500 transition-colors text-sm font-medium">
                  {item}
                </a>
              ))}
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
            <div className="px-4 py-4 space-y-3">
              {['About', 'Capabilities', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-orange-500 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,123,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,123,0,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'grid-slide 20s linear infinite'
          }}></div>
        </div>

        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full">
            <span className="text-orange-500 text-sm font-semibold">PRECISION • AUTONOMY • DOMINANCE</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Next-Generation
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              UAV Systems
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Military-grade autonomous platforms engineered for tactical superiority in the most demanding operational environments
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#capabilities" className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
              Explore Systems
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border-2 border-zinc-700 hover:border-orange-500 rounded-lg font-semibold transition-all">
              Request Briefing
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: '99.7%', label: 'Mission Success' },
              { value: '24/7', label: 'Operations' },
              { value: '<5ms', label: 'Response Time' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes grid-slide {
            0% { transform: translateY(0); }
            100% { transform: translateY(50px); }
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-orange-500 text-sm font-semibold mb-4">
                MISSION CRITICAL
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Redefining Aerial <span className="text-orange-500">Superiority</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                VyomGarud engineers cutting-edge unmanned aerial systems that combine advanced autonomy, 
                military-grade reliability, and precision targeting capabilities. Our platforms are designed 
                for defense forces and strategic operators who demand absolute performance in contested environments.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                From tactical reconnaissance to autonomous engagement systems, we deliver mission-critical 
                solutions backed by proven field performance and uncompromising security standards.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                {['ISO 9001', 'ITAR Compliant', 'MIL-STD-810'].map((cert) => (
                  <div key={cert} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded text-sm font-medium">
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl border border-orange-500/20 p-8">
                <div className="h-full bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-orange-500 opacity-50" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-2xl border border-orange-500/30 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-orange-500 text-sm font-semibold mb-4">
              CORE CAPABILITIES
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Engineered for <span className="text-orange-500">Dominance</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Full-spectrum UAV solutions designed for modern warfare and strategic operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-zinc-900 border rounded-xl p-8 transition-all duration-300 ${
                  activeCard === i ? 'border-orange-500 shadow-lg shadow-orange-500/20' : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 transition-colors ${
                  activeCard === i ? 'bg-orange-500 text-white' : 'bg-zinc-800 text-orange-500'
                }`}>
                  {cap.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{cap.title}</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">{cap.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cap.features.map((feature, j) => (
                    <span key={j} className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs font-medium text-zinc-300">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-colors ${
                  activeCard === i ? 'bg-orange-500' : 'bg-zinc-700'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 to-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, i) => (
              <div key={i} className="group text-center">
                <div className="inline-flex p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <div className="text-orange-500">
                    {highlight.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-orange-500 mb-2">{highlight.metric}</div>
                <p className="text-zinc-400">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-orange-500 text-sm font-semibold mb-4">
                GET IN TOUCH
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Request a <span className="text-orange-500">Briefing</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8">
                Connect with our team to discuss mission-specific requirements and explore how VyomGarud 
                systems can enhance your operational capabilities.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-5 h-5" />, text: 'ops@vyomgarud.com' },
                  { icon: <Phone className="w-5 h-5" />, text: '+91 (XXX) XXX-XXXX' },
                  { icon: <MapPin className="w-5 h-5" />, text: 'Bangalore, India' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-zinc-400">
                    <div className="text-orange-500">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
                      <Shield className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                    <p className="text-zinc-400">We'll be in touch shortly.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-sm flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">VyomGarud</span>
            </div>
            
            <div className="text-zinc-500 text-sm">
              © 2025 VyomGarud Systems. All rights reserved.
            </div>
            
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Security'].map((link) => (
                <a key={link} href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VyomGarudLanding;