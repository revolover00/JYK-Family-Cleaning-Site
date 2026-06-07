import { useState, useEffect } from 'react';
import { 
  motion, 
  AnimatePresence 
} from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Sparkles, 
  Home, 
  Shield, 
  DollarSign, 
  Calendar, 
  CheckCircle2, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight, 
  Brush, 
  Construction, 
  Building, 
  Layers, 
  Grid, 
  HeartHandshake
} from 'lucide-react';

// Static business info
const BUSINESS_NAME = "JYK Cleaning Services";
const LEGAL_NAME = "JYK Cleaning Services LLC";
const PHONE_1 = "(602) 614-6815";
const PHONE_2 = "(480) 462-8093";
const EMAIL = "jykcleaningservices@email.com";
const ADDRESS = "16001 N 25th St, Suite 219, Phoenix, AZ 85032";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Monitor scroll for nav change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services list
  const services = [
    {
      id: 'regular',
      icon: <Home className="w-6 h-6 text-secondary-accent" />,
      title: "Regular Home Cleaning",
      desc: "Weekly, bi-weekly, or monthly visits keeping your home consistently pristine.",
      features: ["Dusting & wiping surfaces", "Vacuuming & mopping", "Kitchen & bathroom sanitization", "Trash emptying"]
    },
    {
      id: 'deep',
      icon: <Sparkles className="w-6 h-6 text-secondary-accent" />,
      title: "Deep Cleaning",
      desc: "An intensive top-to-bottom scrub designed to reset your living space entirely.",
      features: ["Baseboard hand-wiping", "Under-Furniture cleaning", "Detail vent & light fixture polishing", "Deep soap scum extraction"]
    },
    {
      id: 'moveout',
      icon: <Layers className="w-6 h-6 text-secondary-accent" />,
      title: "Move-In / Move-Out Cleaning",
      desc: "Comprehensive cleaning to secure your deposit or prep your new place for living.",
      features: ["Inside cabinets & drawers", "Oven & refrigerator interiors", "Thorough wall spot wiping", "Debris sweep & sanitizing"]
    },
    {
      id: 'construction',
      icon: <Construction className="w-6 h-6 text-secondary-accent" />,
      title: "Post-Construction Cleaning",
      desc: "Surgical removal of heavy drywall dust, debris, paint splatters, and residue.",
      features: ["Drywall dust filtration", "Hardware detail polishing", "Window frames & tracks vacuumed", "Hard-floor scratchless buffing"]
    },
    {
      id: 'commercial',
      icon: <Building className="w-6 h-6 text-secondary-accent" />,
      title: "Office & Commercial Cleaning",
      desc: "Maintaining hyper-clean, hygienic workspace settings supporting your daily business.",
      features: ["Sanitized boardrooms/kitchens", "Hi-traffic vacuum protocols", "Keyboard & desk disinfection", "Trash & recycling management"]
    },
    {
      id: 'windows',
      icon: <Brush className="w-6 h-6 text-secondary-accent" />,
      title: "Window Cleaning",
      desc: "Streak-free, crystal-clear interior and exterior glass washings.",
      features: ["Glass wash & squeegee finish", "Track wiping & residue removal", "Screen vacuuming/dusting", "Streak-free guarantee"]
    },
    {
      id: 'organized',
      icon: <Grid className="w-6 h-6 text-secondary-accent" />,
      title: "Organized Decluttering & Tidying",
      desc: "Reclaiming your square footage with logical organization and decluttering patterns.",
      features: ["Cabinet & pantry sorting", "Closet folding structures", "Toy and home-office system arrays", "Sensible space management"]
    },
    {
      id: 'onetime',
      icon: <Clock className="w-6 h-6 text-secondary-accent" />,
      title: "One-Time Emergency Cleaning",
      desc: "Rapid scheduling for pre-party hosting preparation or post-event recovery.",
      features: ["Ultra-fast turnarounds", "Focused living zone cleanup", "Comprehensive surface reset", "Hospitality-level presentation"]
    }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary overflow-x-hidden selection:bg-primary-accent selection:text-white">
      
      {/* Dynamic Header */}
      <nav id="header-nav" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/[0.04] ${
        scrolled ? 'bg-secondary-bg/95 backdrop-blur-md py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-condensed text-3xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent select-none">
              JYK CLEANING
            </span>
            <span className="hidden sm:inline-block border-l border-white/10 pl-3 py-1 text-xs text-text-secondary select-none">
              Phoenix, AZ
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-condensed tracking-wide uppercase text-sm">
            <a href="#story" className="text-text-secondary hover:text-text-primary transition-colors">Our Story</a>
            <a href="#why-us" className="text-text-secondary hover:text-text-primary transition-colors">Why Choose Us</a>
            <a href="#services" className="text-text-secondary hover:text-text-primary transition-colors">Services</a>
            <a href="#testimonials" className="text-text-secondary hover:text-text-primary transition-colors">Reviews</a>
            <a href="#hours-location" className="text-text-secondary hover:text-text-primary transition-colors">Hours</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] text-text-secondary uppercase tracking-widest">Call the Saenz crew</p>
              <a href={`tel:${PHONE_1}`} className="text-text-primary font-condensed font-bold text-lg hover:text-secondary-accent transition-colors">
                {PHONE_1}
              </a>
            </div>
            <a 
              href={`tel:${PHONE_1}`} 
              className="px-5 py-2.5 bg-primary-accent hover:bg-primary-accent/90 border border-white/10 rounded font-condensed font-bold uppercase transition-all shadow-[0_4px_20px_rgba(0,119,255,0.3)] hover:scale-[1.02]"
              id="nav-call-btn"
            >
              Get Free Quote
            </a>
          </div>

          {/* Hamburger Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-text-primary hover:text-secondary-accent focus:outline-none"
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-secondary-bg/98 border-t border-white/[0.05] overflow-hidden"
              id="mobile-nav-menu"
            >
              <div className="px-6 py-8 flex flex-col gap-5 font-condensed uppercase tracking-wider text-lg">
                <a 
                  href="#story" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-secondary hover:text-text-primary py-2 border-b border-white/[0.03]"
                >
                  Our Story
                </a>
                <a 
                  href="#why-us" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-secondary hover:text-text-primary py-2 border-b border-white/[0.03]"
                >
                  Why Choose Us
                </a>
                <a 
                  href="#services" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-secondary hover:text-text-primary py-2 border-b border-white/[0.03]"
                >
                  Services
                </a>
                <a 
                  href="#testimonials" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-secondary hover:text-text-primary py-2 border-b border-white/[0.03]"
                >
                  Reviews
                </a>
                <a 
                  href="#hours-location" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-secondary hover:text-text-primary py-2 border-b border-white/[0.03]"
                >
                  Hours & Map
                </a>

                <div className="mt-4 pt-4 border-t border-white/[0.05]" id="mobile-menu-contacts">
                  <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">Direct Booking Lines (Call/Text)</p>
                  <div className="flex flex-col gap-3">
                    <a href={`tel:${PHONE_1}`} className="flex items-center gap-3 text-text-primary text-xl font-bold font-condensed">
                      <Phone className="w-5 h-5 text-primary-accent" />
                      {PHONE_1} <span className="text-xs bg-primary-accent/20 text-primary-accent px-2 py-0.5 rounded font-normal">Primary</span>
                    </a>
                    <a href={`tel:${PHONE_2}`} className="flex items-center gap-3 text-text-primary text-xl font-bold font-condensed">
                      <Phone className="w-5 h-5 text-primary-accent" />
                      {PHONE_2} <span className="text-xs bg-white/5 text-text-secondary px-2 py-0.5 rounded font-normal">Alt Line</span>
                    </a>
                  </div>
                  
                  <a 
                    href={`tel:${PHONE_1}`}
                    className="mt-6 w-full py-4 bg-gradient-to-r from-primary-accent to-secondary-accent rounded font-bold font-condensed text-center uppercase shadow-lg shadow-primary-accent/20 block"
                    id="mobile-drawer-call-btn"
                  >
                    Call Now For Free Estimate
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 bg-primary-bg overflow-hidden border-b border-white/[0.02]">
        
        {/* Massive Brand Watermark - Behind everything */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
          <span className="font-condensed font-black text-[32vw] leading-none text-primary-accent tracking-tighter opacity-[0.053]">
            JYK
          </span>
        </div>

        {/* Ambient Glowing Highlights */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-primary-accent/10 blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-secondary-accent/5 blur-[100px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col items-start pt-8 lg:pt-0">
            
            {/* Proud family badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-accent/10 rounded border border-primary-accent/30 mb-6"
              id="hero-family-badge"
            >
              <Sparkles className="w-4 h-4 text-secondary-accent animate-pulse" />
              <span className="text-secondary-accent font-condensed font-bold tracking-widest uppercase text-xs">
                From our family to yours
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-condensed font-black tracking-tight uppercase text-5xl sm:text-7xl lg:text-8xl leading-[0.9] text-text-primary mb-6 text-left"
              id="hero-headline"
            >
              Hard Work.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent bg-300% animate-gradient">Honest Prices.</span><br />
              A Family You Can Trust.
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed font-sans text-left"
              id="hero-subtext"
            >
              Serving Phoenix and surrounding areas since 2017. Family-owned and operated by the Saenz family. Detail-obsessed, highly organized, and always respecting your schedule with early 6:00 AM appointments.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              id="hero-ctas"
            >
              <a 
                href={`tel:${PHONE_1}`}
                className="px-8 py-4 bg-primary-accent hover:bg-primary-accent/90 text-white font-condensed font-bold uppercase rounded-sm border border-white/15 shadow-[0_12px_40px_rgba(0,119,255,0.4)] flex items-center justify-center gap-3 tracking-wide text-lg hover:scale-[1.03] transition-all"
                id="hero-cta-call"
              >
                <Phone className="w-5 h-5 text-white" />
                Call Us Now: {PHONE_1}
              </a>
              <a 
                href="#services"
                className="px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] text-text-primary border border-white/10 font-condensed font-bold uppercase rounded-sm tracking-wide text-lg flex items-center justify-center gap-2 hover:scale-[1.03] transition-all"
                id="hero-cta-services"
              >
                Explore Services
                <ChevronRight className="w-5 h-5 text-text-secondary" />
              </a>
            </motion.div>

            {/* Small Quick-Facts Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-8 py-4 border-t border-white/[0.04] w-full max-w-xl text-left"
              id="hero-facts"
            >
              <div>
                <p className="font-condensed font-black uppercase text-2xl text-secondary-accent tracking-tighter">SINCE 2017</p>
                <p className="text-xs text-text-secondary tracking-wide font-sans uppercase">Phoenix Standard</p>
              </div>
              <div className="border-l border-white/10 pl-6">
                <p className="font-condensed font-black uppercase text-2xl text-secondary-accent tracking-tighter">12+ YEARS</p>
                <p className="text-xs text-text-secondary tracking-wide font-sans uppercase">Combined Experience</p>
              </div>
              <div className="border-l border-white/10 pl-6">
                <p className="font-condensed font-black uppercase text-2xl text-secondary-accent tracking-tighter">6 AM START</p>
                <p className="text-xs text-text-secondary tracking-wide font-sans uppercase">Early Bird Service</p>
              </div>
            </motion.div>

          </div>

          {/* Quick interactive floating estimation ticket on the right (Desktop only) */}
          <div className="lg:col-span-4 hidden lg:block relative">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-card-bg/95 backdrop-blur-md p-6 rounded border border-primary-accent/30 shadow-2xl relative"
              id="hero-sidebar-card"
            >
              {/* Background accent block */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-transparent to-primary-accent/20 rounded-tr rounded-bl filter blur-lg pointer-events-none" />
              
              <div className="flex gap-2 items-center text-xs font-condensed font-bold tracking-widest text-primary-accent uppercase mb-3">
                <HeartHandshake className="w-4 h-4 text-secondary-accent" />
                <span>NO BIG CORPORATE GIMMICKS</span>
              </div>
              
              <h3 className="font-condensed text-2xl font-black text-text-primary tracking-tight uppercase leading-none mb-3">
                REAL FAMILY. REAL GRIT.
              </h3>
              
              <p className="text-text-secondary text-sm font-sans mb-5 leading-relaxed">
                We are a dedicated local family of 8, with 6 energetic kids who motivate us every single day. We don't dispatch random sub-contractors. We do the work ourselves, bringing the exact same care we put into our own home.
              </p>

              <div className="bg-primary-bg/75 p-4 rounded border border-white/[0.03] space-y-3 mb-5 text-sm">
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 text-secondary-accent mt-0.5 shrink-0" />
                  <p className="text-text-primary font-sans">
                    <span className="font-bold">Affordable Packages:</span> Best rates in the Phoenix Valley.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 text-secondary-accent mt-0.5 shrink-0" />
                  <p className="text-text-primary font-sans">
                    <span className="font-bold">Honest Scheduling:</span> Flexible hours starting at 6:00 AM.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <a 
                  href={`tel:${PHONE_1}`}
                  className="w-full py-3 bg-gradient-to-r from-primary-accent to-secondary-accent hover:from-primary-accent/90 hover:to-secondary-accent/90 text-white rounded font-condensed font-bold uppercase text-center block tracking-widest text-sm hover:scale-[1.01] transition-transform shadow-lg shadow-primary-accent/25"
                  id="hero-sidebar-call-btn"
                >
                  CALL DIRECT: {PHONE_1}
                </a>
                <p className="text-center text-[10px] text-text-secondary tracking-widest uppercase py-1">
                  Or text us at {PHONE_2}
                </p>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity z-10 pointer-events-none">
          <span className="text-[9px] uppercase tracking-widest font-condensed font-bold">Scroll to learn more</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-secondary-accent rounded-full mb-1"
          />
        </div>

      </section>

      {/* 2. The JYK Story Section */}
      <section id="story" className="py-24 bg-secondary-bg border-b border-white/[0.02] relative scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="flex items-center gap-3 mb-1">
                <span className="h-[2px] w-8 bg-primary-accent"></span>
                <span className="text-secondary-accent font-condensed font-bold uppercase tracking-widest text-xs">Since 2017</span>
              </div>
              
              <h2 className="font-condensed font-extrabold tracking-tight uppercase text-4xl sm:text-5xl text-text-primary mb-2 text-left" id="story-heading">
                THE JYK STORY
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mb-8"></div>
              
              <p className="text-xl font-condensed font-bold text-secondary-accent tracking-wide uppercase mb-6 text-left">
                "JYK isn't just a random corporate acronym. It stands for the initials of our beautiful kids."
              </p>

              <div className="space-y-6 text-text-secondary text-base sm:text-lg font-sans leading-relaxed text-left">
                <p>
                  We are the Saenz family. Running JYK is a full-family endeavor. We started this journey back in 2017 with a very basic, powerful goal: to bring the exact same care, pride, and clean integrity we put into our own home directly into yours. 
                </p>
                <p>
                  With over <span className="text-text-primary font-bold border-b border-primary-accent/40">12+ years of combined hands-on experience</span> within our crew, we aren't a massive nationwide directory franchise that sends automated contractors to your door. We are a tightly knit, local squad that works exceptionally hard, respects every dollar you pay us, and makes absolute sure your home is spotless.
                </p>
                <p>
                  Because we are deep-rooted Phoenicians, we know exactly how local dust, storms, and dry AZ weather affect home upkeep. We arrive fully equipped, on time, and focused entirely on the details. 
                </p>
              </div>

              {/* Dynamic stats row inside story */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 w-full pt-8 border-t border-white/[0.04]">
                <div>
                  <p className="font-condensed font-black text-4xl text-primary-accent">2017</p>
                  <p className="text-xs text-text-secondary uppercase tracking-widest font-sans mt-1">Founded in Phoenix</p>
                </div>
                <div>
                  <p className="font-condensed font-black text-4xl text-primary-accent">6 KIDS</p>
                  <p className="text-xs text-text-secondary uppercase tracking-widest font-sans mt-1">Our Motivation</p>
                </div>
                <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 sm:border-l border-white/5 pt-4 sm:pt-0 sm:pl-6">
                  <p className="font-condensed font-black text-4xl text-primary-accent">100%</p>
                  <p className="text-xs text-text-secondary uppercase tracking-widest font-sans mt-1">Guaranteed Satisfaction</p>
                </div>
              </div>

            </div>

            {/* Custom Interactive Graphical Initialism Card */}
            <div className="lg:col-span-5 relative" id="story-family-block">
              <div className="absolute inset-0 bg-primary-accent/5 rounded-lg blur-2xl pointer-events-none" />
              
              <div className="relative bg-card-bg/60 border border-white/[0.05] p-6 rounded shadow-xl hover:border-primary-accent/30 transition-all duration-300">
                <div className="p-4 bg-primary-bg rounded border border-white/[0.03] mb-6">
                  <h4 className="font-condensed font-bold uppercase tracking-wider text-sm text-text-secondary mb-4 text-center">
                    WHY JYK? OUR LIVING COMPASS
                  </h4>
                  <div className="space-y-4">
                    {/* Character J */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded bg-primary-accent/15 border border-primary-accent/30 flex items-center justify-center font-condensed font-black text-2xl text-secondary-accent shrink-0">
                        J
                      </div>
                      <div>
                        <p className="font-condensed font-bold text-base text-text-primary uppercase tracking-wide leading-tight">Juliet & Joseph</p>
                        <p className="text-xs text-text-secondary font-sans leading-none">Joy & Justice in every clean</p>
                      </div>
                    </div>
                    {/* Character Y */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded bg-primary-accent/15 border border-primary-accent/30 flex items-center justify-center font-condensed font-black text-2xl text-secondary-accent shrink-0">
                        Y
                      </div>
                      <div>
                        <p className="font-condensed font-bold text-base text-text-primary uppercase tracking-wide leading-tight">Yosef & Yaritza</p>
                        <p className="text-xs text-text-secondary font-sans leading-none">Yielding absolute detail obsession</p>
                      </div>
                    </div>
                    {/* Character K */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded bg-primary-accent/15 border border-primary-accent/30 flex items-center justify-center font-condensed font-black text-2xl text-secondary-accent shrink-0">
                        K
                      </div>
                      <div>
                        <p className="font-condensed font-bold text-base text-text-primary uppercase tracking-wide leading-tight">Kevin & Karyme</p>
                        <p className="text-xs text-text-secondary font-sans leading-none">Keeping our standard of honesty high</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center gap-1.5 justify-center text-star mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-star" />
                    ))}
                  </div>
                  <h5 className="font-condensed font-extrabold uppercase text-lg text-text-primary leading-tight">
                    "From Our Family To Yours"
                  </h5>
                  <p className="text-xs text-text-secondary font-sans mt-2">
                    Every service is backed by honest family pride. If you are not completely satisfied, we will come back and fix it for free.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Why JYK? (4 icon blocks) */}
      <section id="why-us" className="py-24 bg-primary-bg scroll-mt-12 relative border-b border-white/[0.02]">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-primary-accent/[0.02] filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="max-w-3xl mb-16 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-1">
              <span className="h-[2px] w-8 bg-primary-accent"></span>
              <span className="text-secondary-accent font-condensed font-bold uppercase tracking-widest text-xs">Our Core Standards</span>
            </div>
            <h2 className="font-condensed font-extrabold tracking-tight uppercase text-4xl sm:text-5xl text-text-primary mb-2 text-left" id="why-heading">
              WHY CHOOSE JYK CLEANING?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Block 1: Family Owned */}
            <div className="bg-card-bg/40 hover:bg-card-bg/60 border border-white/[0.03] hover:border-primary-accent/35 p-6 rounded transition-all duration-300" id="why-block-1">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center shadow-lg shadow-primary-accent/20 mb-6">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-condensed text-2xl font-black uppercase text-secondary-accent tracking-wide mb-3 text-left">
                Family-Owned & Operated
              </h3>
              <p className="text-text-secondary text-sm font-sans leading-relaxed text-left">
                Not a detached corporate franchise. We are a tight-knit family of 8, treating your physical house, rooms, and belongings with premium personal respect.
              </p>
            </div>

            {/* Block 2: Affordable Pricing */}
            <div className="bg-card-bg/40 hover:bg-card-bg/60 border border-white/[0.03] hover:border-primary-accent/35 p-6 rounded transition-all duration-300" id="why-block-2">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center shadow-lg shadow-primary-accent/20 mb-6">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-condensed text-2xl font-black uppercase text-secondary-accent tracking-wide mb-3 text-left">
                Affordable & Competitive
              </h3>
              <p className="text-text-secondary text-sm font-sans leading-relaxed text-left">
                Hard working family, honest prices and no hidden administrative fee add-ons. We offer high-tier cleaning that fits comfortably into standard household budgets.
              </p>
            </div>

            {/* Block 3: Early start */}
            <div className="bg-card-bg/40 hover:bg-card-bg/60 border border-white/[0.03] hover:border-primary-accent/35 p-6 rounded transition-all duration-300" id="why-block-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center shadow-lg shadow-primary-accent/20 mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-condensed text-2xl font-black uppercase text-secondary-accent tracking-wide mb-3 text-left">
                Early Starts — 6 AM
              </h3>
              <p className="text-text-secondary text-sm font-sans leading-relaxed text-left">
                We respect your active schedule. Offering slots starting as early as 6:00 AM so we can get your home spotless before your workday even begins.
              </p>
            </div>

            {/* Block 4: Detail Oriented */}
            <div className="bg-card-bg/40 hover:bg-card-bg/60 border border-white/[0.03] hover:border-primary-accent/35 p-6 rounded transition-all duration-300" id="why-block-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center shadow-lg shadow-primary-accent/20 mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-condensed text-2xl font-black uppercase text-secondary-accent tracking-wide mb-3 text-left">
                Reliable & Detail-Oriented
              </h3>
              <p className="text-text-secondary text-sm font-sans leading-relaxed text-left">
                We are incredibly organized and reliable. We pay close attention to baseboards, dusting nodes, shelf corners, and spots other general cleaners skip.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* 4. Services Section */}
      <section id="services" className="py-24 bg-secondary-bg border-b border-white/[0.02] scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-1">
                <span className="h-[2px] w-8 bg-primary-accent"></span>
                <span className="text-secondary-accent font-condensed font-bold uppercase tracking-widest text-xs">Pragmatic & Precise Options</span>
              </div>
              <h2 className="font-condensed font-extrabold tracking-tight uppercase text-4xl sm:text-5xl text-text-primary mb-2 text-left" id="services-heading">
                OUR SPECIFIC SERVICES
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent"></div>
            </div>

            <div className="flex flex-wrap gap-2 uppercase font-condensed tracking-wider ml-0 sm:ml-auto">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs font-bold rounded border ${
                  activeTab === 'all' 
                    ? 'bg-primary-accent border-primary-accent text-white' 
                    : 'bg-card-bg/30 border-white/10 text-text-secondary hover:text-text-primary hover:bg-card-bg/50'
                } transition-all`}
              >
                All Services
              </button>
              <button 
                onClick={() => setActiveTab('residential')}
                className={`px-4 py-2 text-xs font-bold rounded border ${
                  activeTab === 'residential' 
                    ? 'bg-primary-accent border-primary-accent text-white' 
                    : 'bg-card-bg/30 border-white/10 text-text-secondary hover:text-text-primary hover:bg-card-bg/50'
                } transition-all`}
              >
                Residential
              </button>
              <button 
                onClick={() => setActiveTab('specialty')}
                className={`px-4 py-2 text-xs font-bold rounded border ${
                  activeTab === 'specialty' 
                    ? 'bg-primary-accent border-primary-accent text-white' 
                    : 'bg-card-bg/30 border-white/10 text-text-secondary hover:text-text-primary hover:bg-card-bg/50'
                } transition-all`}
              >
                Specialty & Commercial
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-grid">
            {services
              .filter(s => {
                if (activeTab === 'all') return true;
                if (activeTab === 'residential') return ['regular', 'deep', 'moveout', 'organized'].includes(s.id);
                if (activeTab === 'specialty') return ['construction', 'commercial', 'windows', 'onetime'].includes(s.id);
                return true;
              })
              .map((service) => (
                <div 
                  key={service.id}
                  className="bg-card-bg flex flex-col justify-between border-l-4 border-l-primary-accent border border-y-white/[0.02] border-r-white/[0.02] hover:border-y-primary-accent/[0.15] hover:border-r-primary-accent/[0.15] p-6 rounded-sm shadow-lg hover:shadow-primary-accent/10 hover:-translate-y-1.5 transition-all duration-300"
                  id={`service-card-${service.id}`}
                >
                  <div>
                    <div className="mb-4 flex justify-between items-start">
                      <div className="p-2.5 bg-primary-bg rounded border border-white/[0.05]">
                        {service.icon}
                      </div>
                      <span className="text-[10px] font-mono opacity-25 uppercase tracking-widest bg-white/[0.04] px-2 py-1 rounded">JYK Code #{service.id.substring(0, 3)}</span>
                    </div>

                    <h3 className="font-condensed font-black uppercase text-xl text-text-primary tracking-wide text-left mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-text-secondary text-xs sm:text-sm font-sans text-left leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.04] space-y-2">
                    {service.features.map((feat, index) => (
                      <div key={index} className="flex gap-2 items-start text-[11px] text-text-secondary font-sans leading-none">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-accent shrink-0" />
                        <span className="text-left">{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>
            ))}
          </div>

        </div>
      </section>



      {/* 5. How It Works Section */}
      <section className="py-24 bg-secondary-bg border-b border-white/[0.02] relative" id="how-it-works">
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mb-20 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-1">
              <span className="h-[2px] w-8 bg-primary-accent"></span>
              <span className="text-secondary-accent font-condensed font-bold uppercase tracking-widest text-xs">A Fast, Three-Step Flow</span>
            </div>
            <h2 className="font-condensed font-extrabold tracking-tight uppercase text-4xl sm:text-5xl text-text-primary mb-2 text-left" id="works-heading">
              HOW IT WORKS
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Step 1 */}
            <div className="relative group flex flex-col items-start" id="step-card-01">
              {/* Massive watermarked large number */}
              <div className="absolute top-[-30px] left-0 font-condensed font-black text-8xl text-primary-accent opacity-15 select-none pointer-events-none group-hover:scale-110 transition-transform duration-300">
                01
              </div>
              
              <div className="relative pt-12 text-left">
                <h3 className="font-condensed text-2xl font-black uppercase text-text-primary tracking-wide mb-3">
                  1. Reach Out For a Quote
                </h3>
                <p className="text-text-secondary text-sm sm:text-base font-sans leading-relaxed">
                  Call or text us with details about your space. You can utilize our online pricing dial or direct line. We provide a completely free, fast estimate within minutes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group flex flex-col items-start" id="step-card-02">
              <div className="absolute top-[-30px] left-0 font-condensed font-black text-8xl text-primary-accent opacity-15 select-none pointer-events-none group-hover:scale-110 transition-transform duration-300">
                02
              </div>
              
              <div className="relative pt-12 text-left">
                <h3 className="font-condensed text-2xl font-black uppercase text-text-primary tracking-wide mb-3">
                  2. We Show Up On Time
                </h3>
                <p className="text-text-secondary text-sm sm:text-base font-sans leading-relaxed">
                  We load our cleaning supplies, sanitizers, and gear, and show up on schedule. Our family arrives energetic, clear on direction, and strictly focused.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group flex flex-col items-start" id="step-card-03">
              <div className="absolute top-[-30px] left-0 font-condensed font-black text-8xl text-primary-accent opacity-15 select-none pointer-events-none group-hover:scale-110 transition-transform duration-300">
                03
              </div>
              
              <div className="relative pt-12 text-left">
                <h3 className="font-condensed text-2xl font-black uppercase text-text-primary tracking-wide mb-3">
                  3. Clean Home — Guaranteed
                </h3>
                <p className="text-text-secondary text-sm sm:text-base font-sans leading-relaxed">
                  We perform our detail checklist, polishing deep areas and resetting your house. You inspect the work. If anything isn't spotless, we rectify it instantly.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* 6. Reviews Section (3 testimonials in Phoenix-style) */}
      <section id="testimonials" className="py-24 bg-primary-bg border-b border-white/[0.02] scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mb-16 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-1">
              <span className="h-[2px] w-8 bg-primary-accent"></span>
              <span className="text-secondary-accent font-condensed font-bold uppercase tracking-widest text-xs">Real Client Feedback</span>
            </div>
            <h2 className="font-condensed font-extrabold tracking-tight uppercase text-4xl sm:text-5xl text-text-primary mb-2 text-left" id="reviews-heading">
              TESTIMONIALS
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-card-bg border border-white/[0.05] hover:border-primary-accent/30 p-6 rounded flex flex-col justify-between transition-all duration-300" id="review-card-1">
              <div>
                <div className="flex items-center gap-1.5 text-star mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-star" />
                  ))}
                </div>
                <p className="text-text-primary text-base font-sans italic leading-relaxed text-left mb-6">
                  "JYK always shows up on time and gets the job done right. My house looks amazing after every visit. Extremely professional family crew. Highly recommend!"
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.04] pt-4">
                <div>
                  <h4 className="font-condensed font-black text-secondary-accent uppercase tracking-wide">Sandra M.</h4>
                  <p className="text-[10px] text-text-secondary font-sans uppercase">Phoenix Resident</p>
                </div>
                <span className="text-[10px] font-mono opacity-30">Verified ✓</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-card-bg border border-white/[0.05] hover:border-primary-accent/30 p-6 rounded flex flex-col justify-between transition-all duration-300" id="review-card-2">
              <div>
                <div className="flex items-center gap-1.5 text-star mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-star" />
                  ))}
                </div>
                <p className="text-text-primary text-base font-sans italic leading-relaxed text-left mb-6">
                  "Affordable, thorough, and incredibly friendly. They treated my home like their own, polishing baseboards I hadn't cleaned in years. Will definitely book again."
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.04] pt-4">
                <div>
                  <h4 className="font-condensed font-black text-secondary-accent uppercase tracking-wide">Mike T.</h4>
                  <p className="text-[10px] text-text-secondary font-sans uppercase">Scottsdale Client</p>
                </div>
                <span className="text-[10px] font-mono opacity-30">Verified ✓</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-card-bg border border-white/[0.05] hover:border-primary-accent/30 p-6 rounded flex flex-col justify-between transition-all duration-300" id="review-card-3">
              <div>
                <div className="flex items-center gap-1.5 text-star mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-star" />
                  ))}
                </div>
                <p className="text-text-primary text-base font-sans italic leading-relaxed text-left mb-6">
                  "Best cleaning crew in Phoenix. Post-construction cleanup of our newly renovated home was perfect — not a single speck of dust left anywhere. Absolute professionals."
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.04] pt-4">
                <div>
                  <h4 className="font-condensed font-black text-secondary-accent uppercase tracking-wide">Rosa G.</h4>
                  <p className="text-[10px] text-text-secondary font-sans uppercase">Tempe Customer</p>
                </div>
                <span className="text-[10px] font-mono opacity-30">Verified ✓</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Hours & Location (Two-column layout) */}
      <section id="hours-location" className="py-24 bg-secondary-bg border-b border-white/[0.02] scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="hours-grid">
            
            {/* Hours Side */}
            <div className="lg:col-span-5 flex flex-col justify-between items-start">
              
              <div className="w-full text-left">
                <div className="flex items-center gap-3 mb-1">
                  <span className="h-[2px] w-8 bg-primary-accent"></span>
                  <span className="text-secondary-accent font-condensed font-bold uppercase tracking-widest text-xs">Availability & Schedule</span>
                </div>
                
                <h2 className="font-condensed font-extrabold tracking-tight uppercase text-4xl sm:text-5xl text-text-primary mb-2">
                  HOURS & ADDRESS
                </h2>
                
                <div className="w-16 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mb-8"></div>
                
                <p className="text-text-secondary text-base mb-8 leading-relaxed">
                  We accommodate both residential and commercial clients across the entire Phoenix Metropolitan area, starting early in the morning so you lose zero active time.
                </p>

                {/* Structured Hours List */}
                <div className="bg-card-bg/60 border border-white/[0.04] p-4 rounded mb-8" id="hours-table">
                  <div className="space-y-3.5 text-sm">
                    
                    <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                      <span className="font-bold text-text-primary">Monday</span>
                      <span className="font-mono text-secondary-accent uppercase">6:00 AM – 5:00 PM</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                      <span className="font-bold text-text-primary">Tuesday</span>
                      <span className="font-mono text-secondary-accent uppercase">6:00 AM – 5:00 PM</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                      <span className="font-bold text-text-primary">Wednesday</span>
                      <span className="font-mono text-secondary-accent uppercase">6:00 AM – 5:00 PM</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                      <span className="font-bold text-text-primary">Thursday</span>
                      <span className="font-mono text-secondary-accent uppercase">6:00 AM – 5:00 PM</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                      <span className="font-bold text-text-primary">Friday</span>
                      <span className="font-mono text-secondary-accent uppercase">6:00 AM – 5:00 PM</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                      <span className="font-bold text-text-primary">Saturday</span>
                      <span className="font-mono text-secondary-accent uppercase">6:00 AM – 5:00 PM</span>
                    </div>

                    <div className="flex justify-between items-center py-2 text-text-secondary opacity-60">
                      <span>Sunday</span>
                      <span className="font-serif">CLOSED</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Physical Address Block */}
              <div className="flex gap-4 items-start p-4 bg-primary-bg/70 border border-white/[0.03] rounded w-full text-left">
                <MapPin className="w-5 h-5 text-primary-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-condensed font-bold uppercase tracking-wider text-xs text-text-secondary">Office Location</h4>
                  <p className="text-sm font-sans font-medium text-text-primary mt-1">
                    {ADDRESS}
                  </p>
                  <p className="text-[10px] text-text-secondary mt-1">
                    Serving Phoenix, Scottsdale, Tempe, Glendale, and surrounding areas.
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map Iframe Right */}
            <div className="lg:col-span-7 h-96 lg:h-auto min-h-[350px] relative" id="map-holder">
              <div className="absolute inset-0 border border-white/[0.08] rounded overflow-hidden shadow-2xl">
                <iframe
                  title="JYK Cleaning Services Location Map"
                  src="https://maps.google.com/maps?q=33.6320737,-112.0271021&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale opacity-80 contrast-[1.1] invert-[0.92]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. CTA Section ("Ready to Book?") */}
      <section id="cta" className="py-24 bg-primary-bg relative overflow-hidden border-b border-white/[0.02]">
        
        {/* Glow block behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-accent/15 filter blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-accent/10 rounded border border-primary-accent/20 mb-6">
            <HeartHandshake className="w-4 h-4 text-secondary-accent" />
            <span className="text-secondary-accent font-condensed font-bold uppercase text-[10px] tracking-widest">
              Simple, transparent booking
            </span>
          </div>

          <h2 className="font-condensed font-black tracking-tight uppercase text-5xl sm:text-6xl text-text-primary mb-6" id="final-cta-title">
            READY TO BOOK YOUR CLEANING?
          </h2>

          <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto mb-10 font-sans leading-relaxed">
            Get an instant free estimate by dialing the family team today. We have no complex contracts, no administrative fees, and offer total booking flexibility to support your needs.
          </p>

          <div className="flex flex-col items-center gap-2 mb-8">
            <p className="text-xs uppercase font-condensed tracking-widest text-text-secondary font-bold">PRIMARY DIRECT BOOKING LINE</p>
            <a 
              href={`tel:${PHONE_1}`} 
              className="font-condensed font-black text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent bg-300% hover:scale-105 transition-transform inline-block select-all animate-gradient px-4 border-b-2 border-dashed border-primary-accent/30 py-1"
              id="final-call-link"
            >
              {PHONE_1}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto" id="cta-buttons">
            <a 
              href={`tel:${PHONE_1}`}
              className="w-full sm:w-auto px-8 py-4 bg-primary-accent hover:bg-primary-accent/90 text-white font-condensed font-black tracking-wider uppercase rounded border border-white/10 shadow-xl shadow-primary-accent/30 transition-transform hover:scale-[1.02]"
              id="final-cta-btn-1"
            >
              Call Us Now
            </a>
            <a 
              href={`tel:${PHONE_2}`}
              className="w-full sm:w-auto px-8 py-4 bg-white/[0.03] hover:bg-white/[0.06] text-text-primary font-condensed font-black tracking-wider uppercase rounded border border-white/5 transition-transform hover:scale-[1.02]"
              id="final-cta-btn-2"
            >
              Alt Line / Text: {PHONE_2}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 pt-6 border-t border-white/[0.04] text-xs text-text-secondary uppercase font-condensed font-bold tracking-widest" id="cta-notes-bar">
            <span>✓ FREE ESTIMATES</span>
            <span className="opacity-30">•</span>
            <span>✓ ZERO CONTRACT BOUNDS</span>
            <span className="opacity-30">•</span>
            <span>✓ FLEXIBLE SCHEDULING Slot options</span>
          </div>

        </div>
      </section>

      {/* 9. Premium Footer */}
      <footer className="bg-secondary-bg py-16 border-t border-white/[0.03] text-sm text-text-secondary font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          <div className="md:col-span-5 text-left">
            <span className="font-condensed text-2xl font-black tracking-tighter text-text-primary block mb-3 uppercase">
              {BUSINESS_NAME}
            </span>
            <p className="text-text-secondary text-xs sm:text-sm max-w-sm leading-relaxed mb-6">
              Hard Work. Honest Prices. A Family You Can Trust. We clean homes, windows, workspaces, and post-construction sites across Phoenix, AZ. Established 2017.
            </p>
            <div className="space-y-1">
              <p className="text-xs text-text-primary font-bold">{LEGAL_NAME}</p>
              <p className="text-[11px] font-mono opacity-55">Licensed & Fully Bonded — Phoenix Valley Standard</p>
            </div>
          </div>

          <div className="md:col-span-3 text-left">
            <h4 className="font-condensed font-bold uppercase text-text-primary tracking-widest text-xs mb-4">Direct Contact</h4>
            <div className="space-y-4 text-xs font-mono">
              <div className="space-y-1">
                <p className="text-text-secondary">Primary Call Line:</p>
                <a href={`tel:${PHONE_1}`} className="text-text-primary font-bold hover:text-secondary-accent text-sm block">
                  {PHONE_1}
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-text-secondary">Alt / Messaging Line:</p>
                <a href={`tel:${PHONE_2}`} className="text-text-primary font-bold hover:text-secondary-accent text-sm block">
                  {PHONE_2}
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 text-left">
            <h4 className="font-condensed font-bold uppercase text-text-primary tracking-widest text-xs mb-4">Coverage & Hours</h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <p>
                <span className="font-bold text-text-primary">Central Hub:</span> {ADDRESS}
              </p>
              <div className="pt-2 border-t border-white/[0.03] space-y-1">
                <p className="text-[11px]">
                  <span className="font-bold text-text-primary block">Active Schedule:</span>
                  Monday–Saturday: 6:00 AM – 5:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Footnote Area */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[11px] opacity-60">
            © 2026 {BUSINESS_NAME}. All Rights Reserved. Fully Licensed, Bonded, and Insured in the State of Arizona.
          </p>
          <div className="flex gap-4 text-[11px] font-condensed font-bold tracking-wider uppercase">
            <a href="#story" className="hover:text-text-primary transition-colors">Our Roots</a>
            <span className="opacity-30">|</span>
            <a href="#services" className="hover:text-text-primary transition-colors">Specifics</a>
            <span className="opacity-30">|</span>
            <a href="#estimator" className="hover:text-text-primary transition-colors">Estimated Ranges</a>
          </div>
        </div>

      </footer>

    </div>
  );
}
