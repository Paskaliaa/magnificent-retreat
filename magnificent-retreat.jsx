// magnificent-retreat.jsx
// This version is browser-compatible for use with <script type="text/babel">

function MagnificentRetreat() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeAccordion, setActiveAccordion] = React.useState(null);
  const [selectedPlan, setSelectedPlan] = React.useState('regular');
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

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <img
            src="https://raw.githubusercontent.com/Paskaliaa/magnificent-retreat/main/assets/Magnificent%20Logo-01.svg"
            alt="Magnificent Retreat Logo"
            className="h-10 w-auto"
            />

          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-purple"
          >
            {isMenuOpen ? (
              <i data-lucide="x" className="w-6 h-6" />
            ) : (
              <i data-lucide="menu" className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('facilitator')} className="nav-link">Facilitator</button>
            <button onClick={() => scrollToSection('agenda')} className="nav-link">Agenda</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="nav-link">FAQ</button>
            <button onClick={() => scrollToSection('register')} className="btn-primary-nav">Reserve Your Spot</button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-5 animate-slideDown">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-3 nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-3 nav-link">About</button>
            <button onClick={() => scrollToSection('facilitator')} className="block w-full text-left py-3 nav-link">Facilitator</button>
            <button onClick={() => scrollToSection('agenda')} className="block w-full text-left py-3 nav-link">Agenda</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-3 nav-link">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-3 nav-link">FAQ</button>
            <button onClick={() => scrollToSection('register')} className="btn-primary-nav w-full mt-3">Reserve Your Spot</button>
          </div>
        )}
      </div>
    </nav>
  );

  // Hero Section
  const HeroSection = () => (
    <section id="home" className="hero-section">
      <div className="hero-bg-image">
         style={{
          backgroundImage: 'url("assets/your-landscape-image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
         }}
      </div>

      <div className="hero-overlay"></div>
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white z-10 animate-fadeIn max-w-4xl">
          {/* Logo/Header Placeholder */}
          <div className="mb-8 inline-block">
            <img
                src="https://raw.githubusercontent.com/Paskaliaa/magnificent-retreat/main/assets/Magnificent%20Pics.jpg"
                alt="Radiant woman landscape"
                className="h-24 w-auto"
              />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight uppercase">
            Magnificent
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 font-light tracking-wide uppercase">
            The Ultimate Renewal Retreat for Women
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <button onClick={() => scrollToSection('register')} className="btn-gold">
              Reserve Your Spot
            </button>
            <a href="#" className="btn-outline">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i data-lucide="chevron-down" className="text-white/80 w-8 h-8" />
      </div>
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
              
              //<button className="btn-primary">
                //Learn More About Laimani
              //</button>
            </div>
            
            <div className="order-1 md:order-2">
              <img
              src="https://raw.githubusercontent.com/Paskaliaa/magnificent-retreat/main/assets/laimani-elendi.jpg" 
              alt="Laimani Bidali - Life Coach"
              className="w-full h-auto rounded-lg shadow-xl"
              />         
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
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button 
                onClick={() => setSelectedPlan('earlybird')}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedPlan === 'earlybird' ? 'bg-gold text-white' : 'text-gray-700'
                }`}
              >
                Early Bird
              </button>
              <button 
                onClick={() => setSelectedPlan('regular')}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedPlan === 'regular' ? 'bg-gold text-white' : 'text-gray-700'
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
                <span className="text-4xl font-bold text-gold">
                  ${selectedPlan === 'earlybird' ? '497' : '597'}
                </span>
                <span className="text-gray-600">/person</span>
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
              <button onClick={() => scrollToSection('register')} className="btn-primary w-full">
                Select Plan
              </button>
            </div>

            {/* Premium */}
            <div className="pricing-card featured">
              <div className="badge">Most Popular</div>
              <h3 className="text-2xl font-bold text-purple mb-4">Premium</h3>
              <div className="price-display mb-6">
                <span className="text-4xl font-bold text-gold">
                  ${selectedPlan === 'earlybird' ? '697' : '797'}
                </span>
                <span className="text-gray-600">/person</span>
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
              <button onClick={() => scrollToSection('register')} className="btn-gold w-full">
                Select Plan
              </button>
            </div>

            {/* VIP */}
            <div className="pricing-card">
              <h3 className="text-2xl font-bold text-purple mb-4">VIP Experience</h3>
              <div className="price-display mb-6">
                <span className="text-4xl font-bold text-gold">
                  ${selectedPlan === 'earlybird' ? '997' : '1197'}
                </span>
                <span className="text-gray-600">/person</span>
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
              <button onClick={() => scrollToSection('register')} className="btn-primary w-full">
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
        answer: "This retreat is designed for women leaders aged 40+ across Africa who are ready to release what no longer serves them and step into their full radiance. If you're feeling called to transformation and renewal, this space is for you."
      },
      {
        question: "What's included in the retreat package?",
        answer: "Your investment includes accommodation, all meals, workshops, meditation sessions, guided activities, retreat materials, and access to all facilities at Hotel Brackenhurst. Premium and VIP packages include additional spa treatments and coaching sessions."
      },
      {
        question: "How do I get to the venue?",
        answer: "Hotel Brackenhurst is located in Limuru, just 30 minutes from Nairobi. We can arrange group transportation from Nairobi, or you can drive yourself. VIP package includes airport transfers."
      },
      {
        question: "What should I bring?",
        answer: "We recommend comfortable clothing for workshops and meditation, walking shoes for the tea plantation tour, a journal, water bottle, and any personal items. A detailed packing list will be sent upon registration."
      },
      {
        question: "Can I get a refund if I need to cancel?",
        answer: "We offer full refunds up to 30 days before the retreat, 50% refund up to 14 days before, and no refunds within 14 days. However, you may transfer your spot to another woman or apply it to a future retreat."
      },
      {
        question: "Is there a payment plan available?",
        answer: "Yes! We offer flexible payment plans including 2-payment and 3-payment options. You can also save 5% when you pay in full at registration."
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
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="w-full text-left flex justify-between items-center p-6"
                  >
                    <h3 className="text-lg font-semibold text-purple pr-4">{faq.question}</h3>
                    <i
                      data-lucide="chevron-down"
                      className={`text-gold w-6 h-6 transition-transform ${
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
      console.log('Form submitted:', formData);
      alert('Thank you for your registration! We will contact you shortly.');
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
                    placeholder="your@email.com"
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
                    placeholder="+254 xxx xxx xxx"
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
                <a href="#" className="btn-outline flex-1 text-center">
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
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
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
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-gold transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('facilitator')} className="text-gray-400 hover:text-gold transition-colors">Facilitator</button></li>
              <li><button onClick={() => scrollToSection('agenda')} className="text-gray-400 hover:text-gold transition-colors">Agenda</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-gold transition-colors">Pricing</button></li>
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
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">FB</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">IG</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">TW</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">LI</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Magnificent Retreat. All rights reserved. | 
            <a href="#" className="text-gold hover:underline ml-2">Privacy Policy</a> | 
            <a href="#" className="text-gold hover:underline ml-2">Terms & Conditions</a>
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

        .nav-link {
          color: #333;
          transition: color 0.3s;
          font-weight: 500;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .nav-link:hover {
          color: var(--gold);
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
        }
        
        .btn-outline:hover {
          background-color: white;
          color: var(--purple);
        }

        .hero-section {
          height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-image-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('https://raw.githubusercontent.com/Paskaliaa/magnificent-retreat/main/assets/Magnificent%20Pics.jpg
');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-content {
          text-align: center;
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

        .facilitator-image-placeholder {
          background: linear-gradient(135deg, var(--purple), var(--purple-light));
          height: 400px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 40px rgba(70, 33, 95, 0.2);
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
