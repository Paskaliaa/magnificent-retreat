

function MagnificentRetreat() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeAccordion, setActiveAccordion] = React.useState(null);
  const [selectedPlan, setSelectedPlan] = React.useState('regular');
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    accommodation: 'standard',
    paymentPlan: 'full',
    message: ''
  });

  // Re-run Lucide icon rendering after each render
  React.useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  });

  // Handle scroll to change navbar appearance
  React.useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY || window.pageYOffset;
        setIsScrolled(scrollPosition > heroHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
    return false;
  };

  // Navigation Component
  const Navigation = () => (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
      style={isScrolled ? {} : {backdropFilter: 'blur(0px)'}}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center gap-3">
            <div className="logo-icon-small">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${isScrolled ? "text-gold" : "text-gold"}`} style={isScrolled ? {} : {filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'}}>
                <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
                <path d="M2 17L12 22L22 17"></path>
                <path d="M2 12L12 17L22 12"></path>
              </svg>
            </div>
            <div 
              className={`text-xl font-bold tracking-wider uppercase transition-all duration-300 ${
                isScrolled ? 'text-purple' : 'text-white'
              }`}
              style={isScrolled ? {} : {textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'}}
            >
              Magnificent
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-purple' : 'text-white'}`}
          >
            {isMenuOpen ? (
              <i data-lucide="x" className="w-6 h-6" />
            ) : (
              <i data-lucide="menu" className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button type="button" onClick={(e) => scrollToSection('home', e)} className={`nav-link ${isScrolled ? '' : 'nav-link-hero'}`}>Home</button>
            <button type="button" onClick={(e) => scrollToSection('about', e)} className={`nav-link ${isScrolled ? '' : 'nav-link-hero'}`}>About</button>
            <button type="button" onClick={(e) => scrollToSection('facilitator', e)} className={`nav-link ${isScrolled ? '' : 'nav-link-hero'}`}>Facilitator</button>
            <button type="button" onClick={(e) => scrollToSection('agenda', e)} className={`nav-link ${isScrolled ? '' : 'nav-link-hero'}`}>Agenda</button>
            <button type="button" onClick={(e) => scrollToSection('pricing', e)} className={`nav-link ${isScrolled ? '' : 'nav-link-hero'}`}>Pricing</button>
            <button type="button" onClick={(e) => scrollToSection('faq', e)} className={`nav-link ${isScrolled ? '' : 'nav-link-hero'}`}>FAQ</button>
            <button type="button" onClick={(e) => scrollToSection('register', e)} className={`btn-primary-nav ${isScrolled ? '' : 'btn-primary-nav-hero'}`}>Reserve Your Spot</button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden pb-5 animate-slideDown ${isScrolled ? 'bg-white' : 'bg-black/20 backdrop-blur-md rounded-lg mt-2'}`}>
            <button type="button" onClick={(e) => scrollToSection('home', e)} className={`block w-full text-left py-3 nav-link ${isScrolled ? '' : 'nav-link-hero'}`}>Home</button>
            <button type="button" onClick={(e) => scrollToSection('about', e)} className={`block w-full text-left py-3 nav-link ${isScrolled ? '' : 'nav-link-hero'}`}>About</button>
            <button type="button" onClick={(e) => scrollToSection('facilitator', e)} className={`block w-full text-left py-3 nav-link ${isScrolled ? '' : 'nav-link-hero'}`}>Facilitator</button>
            <button type="button" onClick={(e) => scrollToSection('agenda', e)} className={`block w-full text-left py-3 nav-link ${isScrolled ? '' : 'nav-link-hero'}`}>Agenda</button>
            <button type="button" onClick={(e) => scrollToSection('pricing', e)} className={`block w-full text-left py-3 nav-link ${isScrolled ? '' : 'nav-link-hero'}`}>Pricing</button>
            <button type="button" onClick={(e) => scrollToSection('faq', e)} className={`block w-full text-left py-3 nav-link ${isScrolled ? '' : 'nav-link-hero'}`}>FAQ</button>
            <button type="button" onClick={(e) => scrollToSection('register', e)} className={`btn-primary-nav w-full mt-3 ${isScrolled ? '' : 'btn-primary-nav-hero'}`}>Reserve Your Spot</button>
          </div>
        )}
      </div>
    </nav>
  );

  // Hero Section
  const HeroSection = () => (
    <section id="home" className="hero-section">
      <div className="hero-image-container">
        <img 
          src="images/women.jpg" 
          alt="Magnificent Retreat - Women's Transformation Journey"
          className="hero-image"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white z-10 animate-fadeIn max-w-4xl">
          {/* Logo/Header Placeholder */}
          <div className="mb-8 inline-block">
            <div className="logo-placeholder">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
                <path d="M2 17L12 22L22 17"></path>
                <path d="M2 12L12 17L22 12"></path>
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight uppercase">
            Magnificent
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 font-light tracking-wide uppercase">
            The Ultimate Renewal Retreat for Women
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <button type="button" onClick={(e) => scrollToSection('register', e)} className="btn-gold">
              Reserve Your Spot
            </button>
            <a 
              href="mailto:renewingself@alabastron.org?subject=Discovery Call - Magnificent Retreat&body=Hello, I would like to book a discovery call about the Magnificent Retreat."
              className="btn-outline"
            >
              Book a Discovery Call
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <i data-lucide="calendar" className="text-gold w-5 h-5" />
              <span className="font-medium">3 Transformative Days</span>
            </div>
            <div className="flex items-center gap-2">
              <i data-lucide="map-pin" className="text-gold w-5 h-5" />
              <span className="font-medium">Hotel Brackenhurst, Limuru</span>
            </div>
          </div>
        </div>
      </div>
      <button 
        type="button"
        onClick={(e) => scrollToSection('about', e)}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Scroll to next section"
      >
        <i data-lucide="chevron-down" className="text-white/80 w-8 h-8" />
      </button>
    </section>
  );

  // About Section
  const AboutSection = () => (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">A Sacred Space for Transformation</h2>
          <div className="mb-16">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
              This 3-day retreat is a sacred space for women ready to embark on a journey of profound renewal and self-discovery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10">
                  <i data-lucide="heart" className="text-gold w-9 h-9" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple uppercase tracking-wide">Release</h3>
              <p className="text-gray-600 leading-relaxed">Let go of the burdens that have weighed you down and step into freedom</p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10">
                  <i data-lucide="sparkles" className="text-gold w-9 h-9" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple uppercase tracking-wide">Rediscover</h3>
              <p className="text-gray-600 leading-relaxed">Reconnect with your inner joy, delight, and authentic self</p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10">
                  <i data-lucide="star" className="text-gold w-9 h-9" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple uppercase tracking-wide">Rise</h3>
              <p className="text-gray-600 leading-relaxed">Emerge renewed and step into your full radiance and power</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-10 border-l-4 border-gold">
            <p className="text-2xl md:text-3xl font-light text-purple">
              "Come as you are. Leave Magnificent."
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // Facilitator Section
  const FacilitatorSection = () => (
    <section id="facilitator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Meet Your Facilitator</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-purple mb-4">Laimani Bidali</h3>
              <p className="text-xl text-gold mb-4">Professional Certified Life Coach</p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Laimani Bidali is a transformative life coach and founder of the Alabastron Network Trust, 
                an organization dedicated to helping women gain clarity and purpose. With years of experience 
                in holistic and transformative coaching, she guides women through profound personal journeys.
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3 text-purple">Areas of Expertise:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                    <span>Professional Certified Coach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                    <span>Activating Meaningful Change</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                    <span>Change Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                    <span>Chief Coach at Alabastron Inpowerment Ltd</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                    <span>Holistic & Transformative Life Coaching</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://alabastron.org/renewedwoman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Visit Website
                </a>
                <a 
                  href="https://www.linkedin.com/in/laimani-bidali-777a9b82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline purple-outline text-center"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="facilitator-image-container">
                <img 
                  src="images/laimani-bidali.jpg" 
                  alt="Laimani Bidali - Professional Certified Life Coach"
                  className="facilitator-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Agenda Section
  const AgendaSection = () => (
    <section id="agenda" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Your Journey of Transformation</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Day 1 */}
            <div className="agenda-card">
              <div className="flex items-start gap-4">
                <div className="agenda-day">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple mb-4">Day One: Release</h3>
                  <div className="space-y-3">
                    <div className="agenda-item">
                      <i data-lucide="clock" className="text-gold w-4 h-4" />
                      <span className="font-semibold">Morning:</span> Welcome & Opening Circle
                    </div>
                    <div className="agenda-item">
                      <i data-lucide="clock" className="text-gold w-4 h-4" />
                      <span className="font-semibold">Mid-Morning:</span> Guided Meditation Session
                    </div>
                    <div className="agenda-item">
                      <i data-lucide="clock" className="text-gold w-4 h-4" />
                      <span className="font-semibold">Afternoon:</span> Release Workshop - Letting Go of What No Longer Serves
                    </div>
                    <div className="agenda-item">
                      <i data-lucide="clock" className="text-gold w-4 h-4" />
                      <span className="font-semibold">Evening:</span> Group Discussion & Reflection
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="agenda-card">
              <div className="flex items-start gap-4">
                <div className="agenda-day">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple mb-4">Day Two: Rediscover</h3>
                  <div className="space-y-3">
                    <div className="agenda-item">
                      <i data-lucide="clock" className="text-gold w-4 h-4" />
                      <span className="font-semibold">Morning:</span> Sunrise Meditation
                    </div>
                    <div className="agenda-item">
                      <i data-lucide="clock" className="text-gold w-4 h-4" />
                      <span className="font-semibold">Mid-Morning:</span> Walk in the Tea Plantations
                    </div>
                    <div className="agenda-item">
                      <i data-lucide="clock" className="text-gold w-4 h-4" />
                      <span className="font-semibold">Afternoon:</span> Joy & Purpose Workshop
                    </div>
                    <div className="agenda-item">
                      <i data-lucide="clock" className="text-gold w-4 h-4" />
                      <span className="font-semibold">Evening:</span> Sacred Circle - Sharing & Connection
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="agenda-card">
              <div className="flex items-start gap-4">
                <div className="agenda-day">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple mb-4">Day Three: Rise</h3>
                  <div className="space-y-3">
                    <div className="agenda-item">
                      <i data-lucide="clock" className="text-gold w-4 h-4" />
                      <span className="font-semibold">Morning:</span> Integration Meditation
                    </div>
                    <div className="agenda-item">
                      <i data-lucide="clock" className="text-gold w-4 h-4" />
                      <span className="font-semibold">Mid-Morning:</span> Stepping Into Your Magnificence Workshop
                    </div>
                    <div className="agenda-item">
                      <i data-lucide="clock" className="text-gold w-4 h-4" />
                      <span className="font-semibold">Afternoon:</span> Creating Your Action Plan
                    </div>
                    <div className="agenda-item">
                      <i data-lucide="clock" className="text-gold w-4 h-4" />
                      <span className="font-semibold">Evening:</span> Closing Ceremony & Celebration
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Pricing Section
  const PricingSection = () => (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Investment in Your Transformation</h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full inline-flex shadow-inner">
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedPlan('earlybird');
                }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ease-in-out font-semibold ${
                  selectedPlan === 'earlybird' 
                    ? 'bg-gold text-white shadow-md transform scale-105' 
                    : 'text-gray-700 hover:text-purple'
                }`}
              >
                Early Bird
              </button>
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedPlan('regular');
                }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ease-in-out font-semibold ${
                  selectedPlan === 'regular' 
                    ? 'bg-gold text-white shadow-md transform scale-105' 
                    : 'text-gray-700 hover:text-purple'
                }`}
              >
                Regular
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Standard */}
            <div className="pricing-card">
              <h3 className="text-2xl font-bold text-purple mb-4">Standard</h3>
              <div className="price-display mb-6">
                <span className="text-4xl font-bold text-gold transition-all duration-300">
                  KES {selectedPlan === 'earlybird' ? '64,610' : '77,610'}
                </span>
                <span className="text-gray-600">/person</span>
                <div className="text-sm text-gray-500 mt-1">
                  {selectedPlan === 'earlybird' ? '(Early Bird - Save KES 13,000)' : ''}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>Shared accommodation (2 per room)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>All meals included</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>All workshops & activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>Retreat materials</span>
                </li>
              </ul>
              <button type="button" onClick={(e) => {
                e.preventDefault();
                setFormData({...formData, accommodation: 'standard'});
                scrollToSection('register', e);
              }} className="btn-primary w-full">
                Select Plan
              </button>
            </div>

            {/* Premium */}
            <div className="pricing-card featured">
              <div className="badge">Most Popular</div>
              <h3 className="text-2xl font-bold text-purple mb-4">Premium</h3>
              <div className="price-display mb-6">
                <span className="text-4xl font-bold text-gold transition-all duration-300">
                  KES {selectedPlan === 'earlybird' ? '90,610' : '103,610'}
                </span>
                <span className="text-gray-600">/person</span>
                <div className="text-sm text-gray-500 mt-1">
                  {selectedPlan === 'earlybird' ? '(Early Bird - Save KES 13,000)' : ''}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>Private accommodation</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>All meals included</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>All workshops & activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>Retreat materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>Spa treatment included</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>1-on-1 coaching session</span>
                </li>
              </ul>
              <button type="button" onClick={(e) => {
                e.preventDefault();
                setFormData({...formData, accommodation: 'premium'});
                scrollToSection('register', e);
              }} className="btn-gold w-full">
                Select Plan
              </button>
            </div>

            {/* VIP */}
            <div className="pricing-card">
              <h3 className="text-2xl font-bold text-purple mb-4">VIP Experience</h3>
              <div className="price-display mb-6">
                <span className="text-4xl font-bold text-gold transition-all duration-300">
                  KES {selectedPlan === 'earlybird' ? '129,610' : '155,610'}
                </span>
                <span className="text-gray-600">/person</span>
                <div className="text-sm text-gray-500 mt-1">
                  {selectedPlan === 'earlybird' ? '(Early Bird - Save KES 26,000)' : ''}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>Luxury suite accommodation</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>All meals + special dining</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>All workshops & activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>Premium retreat materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>Daily spa treatments</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>3 coaching sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <i data-lucide="check" className="text-gold w-5 h-5 mt-1" />
                  <span>Airport transfers</span>
                </li>
              </ul>
              <button type="button" onClick={(e) => {
                e.preventDefault();
                setFormData({...formData, accommodation: 'vip'});
                scrollToSection('register', e);
              }} className="btn-primary w-full">
                Select Plan
              </button>
            </div>
          </div>

          {/* Payment Plans */}
          <div className="mt-12 bg-purple/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-purple mb-4">Flexible Payment Plans Available</h3>
            <p className="text-gray-700 mb-6">
              We offer 3 convenient payment options to make your transformation journey accessible
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-purple">Pay in Full</h4>
                <p className="text-sm text-gray-600 mt-2">Save 5% when you pay upfront</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-purple">2 Payments</h4>
                <p className="text-sm text-gray-600 mt-2">50% now, 50% in 30 days</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-purple">3 Payments</h4>
                <p className="text-sm text-gray-600 mt-2">Split into 3 monthly payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // FAQ Section
  const FAQSection = () => {
    const faqs = [
      {
        question: "Who is this retreat for?",
        answer: "This retreat is designed for women leaders aged 40+ across Africa who are ready to release what no longer serves them and step into their full radiance. If you're feeling called to transformation and renewal, this space is for you. Whether you're a business leader, entrepreneur, professional, or someone seeking personal growth, this retreat welcomes all women ready for profound change."
      },
      {
        question: "What's included in the retreat package?",
        answer: "Your investment includes accommodation (based on your selected package), all meals (breakfast, lunch, dinner, and refreshments), all workshops and meditation sessions, guided activities including the tea plantation walk, retreat materials and journal, access to all facilities at Hotel Brackenhurst, and a welcome gift. Premium and VIP packages include additional spa treatments, private coaching sessions, and special amenities."
      },
      {
        question: "How do I get to the venue?",
        answer: "Hotel Brackenhurst is located in Limuru, approximately 30 minutes from Nairobi. We can arrange group transportation from designated pickup points in Nairobi for an additional fee. You can also drive yourself - detailed directions and parking information will be provided upon registration. VIP package includes complimentary airport transfers from Jomo Kenyatta International Airport."
      },
      {
        question: "What should I bring?",
        answer: "We recommend bringing comfortable clothing for workshops and meditation sessions, walking shoes for the tea plantation tour, a journal (though one will be provided), water bottle, personal toiletries, any medications you require, and an open heart ready for transformation. A detailed packing list with specific recommendations will be sent to you upon registration confirmation."
      },
      {
        question: "What is the accommodation like?",
        answer: "Hotel Brackenhurst offers beautiful, comfortable accommodations set in a serene environment. Standard package includes shared rooms (2 per room) with modern amenities. Premium package offers private rooms, and VIP package includes luxury suites with additional space and premium amenities. All rooms have en-suite bathrooms, comfortable bedding, and access to the hotel's facilities."
      },
      {
        question: "Can I get a refund if I need to cancel?",
        answer: "We offer full refunds up to 30 days before the retreat start date, 50% refund up to 14 days before, and no refunds within 14 days of the retreat. However, you may transfer your spot to another woman at any time, or apply your payment to a future retreat (subject to availability). We understand that circumstances change, and we're here to work with you."
      },
      {
        question: "Is there a payment plan available?",
        answer: "Yes! We offer flexible payment plans to make this investment accessible. You can choose to pay in full (and save 5%), split into 2 payments (50% at registration, 50% within 30 days), or 3 monthly payments. All payment plans must be completed before the retreat start date. Contact us for more details on payment arrangements."
      },
      {
        question: "What if I have dietary restrictions?",
        answer: "Hotel Brackenhurst can accommodate various dietary requirements including vegetarian, vegan, gluten-free, halal, and other specific needs. Please inform us of any dietary restrictions or allergies when you register, and we'll ensure your meals are prepared accordingly. The hotel's kitchen is experienced in handling special dietary requirements."
      },
      {
        question: "Will I have time for personal reflection?",
        answer: "Absolutely! While the retreat includes structured workshops and activities, we've intentionally built in quiet time for personal reflection, journaling, and rest. The schedule balances group activities with individual time, allowing you to process your experience and integrate the insights you're gaining."
      },
      {
        question: "What happens after the retreat?",
        answer: "Your transformation journey continues beyond the retreat! All participants receive access to a private online community, follow-up resources, and optional post-retreat coaching sessions. We also offer quarterly virtual check-ins and opportunities to reconnect with your retreat sisters. The connections and insights you gain will continue to support your growth."
      },
      {
        question: "How many women will be at the retreat?",
        answer: "We intentionally keep the retreat intimate to ensure a powerful, personal experience. The retreat is limited to 20-25 participants, allowing for deep connections, personalized attention, and meaningful group interactions. This size creates a safe, supportive container for transformation while maintaining the energy of a group experience."
      },
      {
        question: "What if I'm new to meditation or personal development work?",
        answer: "This retreat is perfect for beginners! All activities are designed to be accessible regardless of your experience level. Our facilitator, Laimani Bidali, is skilled at meeting each participant where they are and creating a safe, non-judgmental space. You'll receive guidance and support throughout, and there's no pressure to participate in any activity that doesn't feel right for you."
      }
    ];

    return (
      <section id="faq" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveAccordion(activeAccordion === index ? null : index);
                      // Re-render icons after state change
                      setTimeout(() => {
                        if (window.lucide && typeof window.lucide.createIcons === 'function') {
                          window.lucide.createIcons();
                        }
                      }, 100);
                    }}
                    className="w-full text-left flex justify-between items-center p-6 hover:bg-purple/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-purple pr-4">{faq.question}</h3>
                    <i
                      data-lucide="chevron-down"
                      className={`text-gold w-6 h-6 transition-transform duration-300 flex-shrink-0 ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 pb-6 animate-slideDown">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Registration Section
  const RegistrationSection = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Form submitted:', formData);
      alert('Thank you for your registration! We will contact you shortly.');
      return false;
    };

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <section id="register" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Reserve Your Spot</h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-gray-700 mb-8">
              Take the first step towards your transformation. Spaces are limited to ensure an intimate, 
              powerful experience for all participants.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="renewingself@alabastron.org"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="+254 719 504 104 or +254 715 966 700"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="accommodation" className="form-label">Accommodation Type *</label>
                  <select
                    id="accommodation"
                    name="accommodation"
                    value={formData.accommodation}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="standard">Standard (Shared)</option>
                    <option value="premium">Premium (Private)</option>
                    <option value="vip">VIP (Luxury Suite)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="paymentPlan" className="form-label">Payment Plan *</label>
                <select
                  id="paymentPlan"
                  name="paymentPlan"
                  value={formData.paymentPlan}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                >
                  <option value="full">Pay in Full (Save 5%)</option>
                  <option value="two">2 Payments</option>
                  <option value="three">3 Monthly Payments</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Tell us what you're hoping to achieve (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="form-input"
                  placeholder="Share what's calling you to this retreat..."
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <button type="submit" className="btn-gold flex-1">
                  Complete Registration
                  <i data-lucide="arrow-right" className="ml-2 inline w-5 h-5" />
                </button>
                <a 
                  href="mailto:renewingself@alabastron.org?subject=Discovery Call - Magnificent Retreat&body=Hello, I would like to book a discovery call about the Magnificent Retreat."
                  className="btn-outline purple-outline flex-1 text-center inline-flex items-center justify-center"
                >
                  Book a Discovery Call First
                </a>
              </div>

              <p className="text-sm text-gray-600 text-center">
                By registering, you agree to our terms and conditions. 
                Your information will be kept confidential and used only for retreat communication.
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  };

  // Newsletter Section
  const NewsletterSection = () => (
    <section className="py-16 bg-purple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
          <p className="mb-8">
            Join our community of magnificent women. Receive inspiration, 
            updates, and exclusive offers for future retreats.
          </p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const email = e.target.querySelector('input[type="email"]').value;
              if (email) {
                alert('Thank you for subscribing!');
                e.target.querySelector('input[type="email"]').value = '';
              }
              return false;
            }} 
            className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button type="submit" className="btn-gold">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-bold text-gold mb-4">MAGNIFICENT</h4>
            <p className="text-gray-400">
              The Ultimate Renewal Retreat for Women
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><button type="button" onClick={(e) => scrollToSection('about', e)} className="text-gray-400 hover:text-gold transition-colors">About</button></li>
              <li><button type="button" onClick={(e) => scrollToSection('facilitator', e)} className="text-gray-400 hover:text-gold transition-colors">Facilitator</button></li>
              <li><button type="button" onClick={(e) => scrollToSection('agenda', e)} className="text-gray-400 hover:text-gold transition-colors">Agenda</button></li>
              <li><button type="button" onClick={(e) => scrollToSection('pricing', e)} className="text-gray-400 hover:text-gold transition-colors">Pricing</button></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Contact</h5>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <i data-lucide="mail" className="text-gold w-4 h-4" />
                <span className="text-gray-400">info@magnificent-retreat.com</span>
              </li>
              <li className="flex items-center gap-2">
                <i data-lucide="phone" className="text-gold w-4 h-4" />
                <span className="text-gray-400">+254 xxx xxx xxx</span>
              </li>
              <li className="flex items-center gap-2">
                <i data-lucide="map-pin" className="text-gold w-4 h-4" />
                <span className="text-gray-400">Limuru, Kenya</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Follow Us</h5>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/alabastronnetwork" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
                title="Follow us on Facebook"
                aria-label="Facebook"
              >
                <i data-lucide="facebook" className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/alabastronnetwork" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
                title="Follow us on Instagram"
                aria-label="Instagram"
              >
                <i data-lucide="instagram" className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/alabastronnetwork" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
                title="Follow us on Twitter"
                aria-label="Twitter"
              >
                <i data-lucide="twitter" className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/alabastron-network" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
                title="Follow us on LinkedIn"
                aria-label="LinkedIn"
              >
                <i data-lucide="linkedin" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Magnificent Retreat. All rights reserved. | 
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                alert('Privacy Policy coming soon!');
              }}
              className="text-gold hover:underline ml-2 bg-transparent border-none cursor-pointer"
            >
              Privacy Policy
            </button> | 
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                alert('Terms & Conditions coming soon!');
              }}
              className="text-gold hover:underline ml-2 bg-transparent border-none cursor-pointer"
            >
              Terms & Conditions
            </button>
          </p>
        </div>
      </div>

      {/* Extra styling block (same as before, but works fine in browser) */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --gold: #c49356;
          --purple: #46215f;
          --red: #8b1d1d;
          --gold-light: #dbb889;
          --purple-light: #6b3a8a;
        }

        body {
          font-family: 'Open Sans', sans-serif;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
        }

        .text-gold { color: var(--gold); }
        .text-purple { color: var(--purple); }
        .text-red { color: var(--red); }
        .bg-gold { background-color: var(--gold); }
        .bg-purple { background-color: var(--purple); }

        .logo-icon-small {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-link {
          color: var(--purple);
          transition: color 0.3s;
          font-weight: 600;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .nav-link:hover {
          color: var(--gold);
        }

        .nav-link-hero {
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .nav-link-hero:hover {
          color: var(--gold);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .btn-primary {
          background-color: var(--purple);
          color: white;
          padding: 14px 32px;
          border-radius: 4px;
          font-weight: 600;
          transition: all 0.3s;
          display: inline-block;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }
        
        .btn-primary:hover {
          background-color: var(--purple-light);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(70, 33, 95, 0.3);
        }

        .btn-primary-nav {
          background-color: var(--gold);
          color: white;
          padding: 10px 24px;
          border-radius: 4px;
          font-weight: 600;
          transition: all 0.3s;
          display: inline-block;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 0.85rem;
        }

        .btn-primary-nav:hover {
          background-color: var(--gold-light);
          transform: translateY(-1px);
        }

        .btn-primary-nav-hero {
          background-color: rgba(196, 147, 86, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .btn-primary-nav-hero:hover {
          background-color: rgba(219, 184, 137, 0.95);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
        }

        .btn-gold {
          background: var(--gold);
          color: white;
          padding: 14px 32px;
          border-radius: 4px;
          font-weight: 600;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }
        
        .btn-gold:hover {
          background: var(--gold-light);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(196, 147, 86, 0.3);
        }

        .btn-outline {
          border: 2px solid white;
          color: white;
          padding: 12px 30px;
          border-radius: 4px;
          font-weight: 600;
          transition: all 0.3s;
          display: inline-block;
          background: transparent;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
          cursor: pointer;
        }
        
        .btn-outline:hover {
          background-color: white;
          color: var(--purple);
          text-decoration: none;
        }

        /* Purple outline variant for non-hero sections */
        .btn-outline.purple-outline {
          border: 2px solid var(--purple);
          color: var(--purple);
          background: transparent;
        }

        .btn-outline.purple-outline:hover {
          background-color: var(--purple);
          color: white;
        }

        .hero-section {
          height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-image-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
        }

        .logo-placeholder {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 50%;
          border: 2px solid var(--gold);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--purple);
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: var(--gold);
        }

        .bg-gradient-soft {
          background: #f8f9fa;
        }

        .facilitator-image-container {
          width: 100%;
          height: 400px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(70, 33, 95, 0.2);
          position: relative;
        }

        .facilitator-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.3s ease;
        }

        .facilitator-image-container:hover .facilitator-image {
          transform: scale(1.05);
        }

        .agenda-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          border-left: 4px solid var(--gold);
        }

        .agenda-day {
          width: 60px;
          height: 60px;
          background: var(--gold);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .agenda-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0;
        }

        .pricing-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          position: relative;
          transition: transform 0.3s, box-shadow 0.3s;
          border-top: 4px solid transparent;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        .price-display {
          transition: all 0.3s ease-in-out;
        }

        .pricing-card.featured {
          border-top-color: var(--gold);
          transform: scale(1.02);
        }

        .badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--gold);
          color: white;
          padding: 5px 20px;
          border-radius: 4px;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .price-display {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.5rem;
        }

        .faq-item {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          border-left: 3px solid transparent;
          transition: border-color 0.3s;
        }

        .faq-item:hover {
          border-left-color: var(--gold);
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-weight: 600;
          color: #333;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-input {
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.3s, box-shadow 0.3s;
          background: white;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(196, 147, 86, 0.1);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { max-height: 0; opacity: 0; }
          to { max-height: 500px; opacity: 1; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 100vh;
            padding: 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          .pricing-card.featured {
            transform: scale(1);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </footer>
  );

  return (
    <div className="magnificent-retreat">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FacilitatorSection />
      <AgendaSection />
      <PricingSection />
      <FAQSection />
      <RegistrationSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
