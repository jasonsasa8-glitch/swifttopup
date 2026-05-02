import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  Globe2, 
  Zap, 
  ShieldCheck, 
  CreditCard, 
  HeartHandshake, 
  Smartphone, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  Wifi,
  PhoneCall,
  Clock,
  Star
} from 'lucide-react';

const AFFILIATE_LINK = "https://afflat3d3.com/trk/lnk/446B6D27-38B2-4F35-B066-BC0DEAAB8D0B/?o=31905&c=918277&a=712263&k=85AB92BDF146359312AD32225E442700&l=37785";

function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode, className?: string, href?: string }) {
  const isLink = props.href !== undefined;
  
  if (isLink) {
    return (
      <a 
        {...props}
        className={`inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 active:scale-95 ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      {...props as any}
      className={`inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      question: "How fast is delivery?",
      answer: "In most cases, the mobile recharge is delivered instantly. Occasionally, it may take a few minutes depending on the local carrier network."
    },
    {
      question: "Which countries are supported?",
      answer: "We support over 150 countries worldwide, connecting you with major mobile networks in Latin America, Africa, Asia, and more."
    },
    {
      question: "Is it safe to send airtime?",
      answer: "Yes, absolutely. We use bank-level encryption to process all payments. Your personal and financial information is fully protected."
    },
    {
      question: "Can I send to any network?",
      answer: "We support hundreds of major carriers globally (like Claro, Movistar, MTN, Airtel, Digicel, and many more). Simply enter the number, and we'll automatically detect the network."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'bg-white/80 backdrop-blur-md border-neutral-200 shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <Zap size={20} className="fill-current" />
            </div>
            <span className="font-bold text-xl tracking-tight text-neutral-900">SwiftTopUp</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600">
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>
            <a href="#benefits" className="hover:text-blue-600 transition-colors">Benefits</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          </div>
          <Button 
            href={AFFILIATE_LINK}
            className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2.5 text-sm shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)]"
          >
            Send Airtime
          </Button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-emerald-50 blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                <Globe2 size={16} />
                <span>Supporting 150+ Countries Worldwide</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-6">
                Send Airtime Worldwide in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Seconds</span>
              </h1>
              <p className="text-lg text-neutral-600 mb-8 max-w-lg leading-relaxed">
                The fastest, most reliable way to top up mobile phones globally. Keep your family and friends connected, no matter where they are.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button 
                  href={AFFILIATE_LINK}
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-base shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] w-full sm:w-auto"
                >
                  Send Airtime Now
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <div className="flex items-center justify-center sm:justify-start gap-4 text-sm text-neutral-500 px-4">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User user" />
                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="User user" />
                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" alt="User user" />
                  </div>
                  <span>Trusted by 1M+</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={20} className="text-emerald-500" />
                  <span className="text-sm font-medium text-neutral-600">Secure Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={20} className="text-amber-500" />
                  <span className="text-sm font-medium text-neutral-600">Instant Delivery</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mx-auto lg:ml-auto w-full max-w-sm"
            >
              {/* Phone Mockup Container */}
              <div className="relative bg-neutral-900 rounded-[3rem] p-3 shadow-2xl border-4 border-neutral-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 inset-x-0 h-6 bg-neutral-900 rounded-t-[3rem]"></div>
                {/* Screen */}
                <div className="bg-white rounded-[2.25rem] overflow-hidden pt-8 pb-4 px-4 h-[550px] relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-3xl z-20"></div>
                  
                  {/* Fake UI Inside Screen */}
                  <div className="h-full flex flex-col pt-4">
                    <h3 className="font-bold text-xl mb-6 text-center">Where are you sending?</h3>
                    <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                      <div className="flex-shrink-0 flex flex-col items-center gap-1">
                        <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center border border-red-100">🇲🇽</div>
                        <span className="text-xs font-medium">Mexico</span>
                      </div>
                      <div className="flex-shrink-0 flex flex-col items-center gap-1">
                        <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">🇵🇭</div>
                        <span className="text-xs font-medium">Philippines</span>
                      </div>
                      <div className="flex-shrink-0 flex flex-col items-center gap-1">
                        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center border border-green-100">🇳🇬</div>
                        <span className="text-xs font-medium">Nigeria</span>
                      </div>
                      <div className="flex-shrink-0 flex flex-col items-center gap-1">
                        <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center border border-yellow-100">🇮🇳</div>
                        <span className="text-xs font-medium">India</span>
                      </div>
                    </div>
                    
                    <div className="bg-neutral-50 rounded-2xl p-4 mb-4 border border-neutral-100">
                      <p className="text-xs text-neutral-500 font-medium mb-1">Mobile Number</p>
                      <div className="flex items-center gap-2">
                        <span className="text-neutral-900 font-medium">+52</span>
                        <div className="h-6 w-px bg-neutral-300"></div>
                        <span className="text-neutral-400 text-sm">Enter mobile number</span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="w-full bg-blue-600 text-white rounded-xl py-3 text-center font-medium text-sm shadow-lg mb-2">
                        Continue
                      </div>
                    </div>
                  </div>

                  {/* Success Popup Overlay simulation */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute bottom-16 left-4 right-4 bg-white/90 backdrop-blur border border-neutral-100 rounded-2xl p-4 shadow-xl text-center"
                  >
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle2 size={24} />
                    </div>
                    <p className="font-bold text-sm text-neutral-900">Recharge Sent!</p>
                    <p className="text-xs text-neutral-500">Delivered in 2 seconds</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. EMOTIONAL CONNECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-[2.5rem] overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center relative z-10">
                <HeartHandshake className="text-blue-400 w-12 h-12 mb-6" />
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
                  Because a quick conversation means everything.
                </h2>
                <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                  Birthdays, emergencies, or just calling to say "I miss you." Don't let distance or a zero balance stop you from being there for the people who matter most. Send a smile across the globe instantly.
                </p>
                <div>
                  <Button 
                    href={AFFILIATE_LINK}
                    className="bg-white text-neutral-900 hover:bg-neutral-100 px-6 py-3 shadow-sm inline-flex items-center"
                  >
                    Send Airtime Now
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[300px] md:min-h-full">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80" 
                  alt="Mother and daughter video calling" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/40 to-transparent md:bg-gradient-to-r"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase mb-2">Simple Process</h2>
            <h3 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">Send top-up in 3 easy steps</h3>
            <p className="mt-4 text-lg text-neutral-600">No account required to get started. Just enter the number and send.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-neutral-200" style={{ width: '66%', left: '16%' }}></div>

            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-white border-2 border-neutral-100 rounded-2xl shadow-sm flex items-center justify-center mb-6 relative z-10 transition-transform hover:-translate-y-1">
                <Smartphone size={32} className="text-blue-600" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm border-2 border-white">1</div>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">Enter the number</h4>
              <p className="text-neutral-600">Select the country and type the phone number you want to recharge.</p>
            </div>

            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-white border-2 border-neutral-100 rounded-2xl shadow-sm flex items-center justify-center mb-6 relative z-10 transition-transform hover:-translate-y-1">
                <Globe2 size={32} className="text-blue-600" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm border-2 border-white">2</div>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">Choose amount</h4>
              <p className="text-neutral-600">Select from available airtime or data packages for that specific network.</p>
            </div>

            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-white border-2 border-neutral-100 rounded-2xl shadow-sm flex items-center justify-center mb-6 relative z-10 transition-transform hover:-translate-y-1">
                <CreditCard size={32} className="text-blue-600" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm border-2 border-white">3</div>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">Pay securely</h4>
              <p className="text-neutral-600">Checkout safely with your preferred payment method. Delivered instantly.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              href={AFFILIATE_LINK}
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-base shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)]"
            >
              Start Your First Transfer
            </Button>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS SECTION */}
      <section id="benefits" className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-100">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-4">
                    <Zap size={24} />
                  </div>
                  <h4 className="font-bold text-neutral-900 mb-2">Instant Delivery</h4>
                  <p className="text-sm text-neutral-600">Top-ups are applied in seconds, 24/7/365.</p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-100">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="font-bold text-neutral-900 mb-2">Secure Payments</h4>
                  <p className="text-sm text-neutral-600">Bank-level encryption protects your transactions.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-100">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <Globe2 size={24} />
                  </div>
                  <h4 className="font-bold text-neutral-900 mb-2">150+ Countries</h4>
                  <p className="text-sm text-neutral-600">Reach loved ones almost anywhere in the world.</p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-100">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                    <PhoneCall size={24} />
                  </div>
                  <h4 className="font-bold text-neutral-900 mb-2">All Major Carriers</h4>
                  <p className="text-sm text-neutral-600">Automatically detects network provider for easiest flow.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold text-neutral-900 tracking-tight sm:text-4xl mb-6">
                Why thousands choose us every day
              </h3>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                When you're trying to reach someone across borders, every second counts. We removed the friction, hidden fees, and complex setups so you can send credit directly to their phone, instantly.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-neutral-600 font-medium">No hidden fees at checkout</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-neutral-600 font-medium">Dedicated 24/7 customer support</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-neutral-600 font-medium">Supports credit cards, PayPal, and Apple Pay</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. USE CASES */}
      <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Built for every situation</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 backdrop-blur border border-neutral-700/50 p-8 rounded-3xl">
              <HeartHandshake className="w-10 h-10 text-rose-400 mb-5" />
              <h3 className="text-xl font-bold mb-3">Supporting Family</h3>
              <p className="text-neutral-400 leading-relaxed">Help parents, siblings, or children back home stay connected with recurring data and airtime packages.</p>
            </div>
            
            <div className="bg-neutral-800/50 backdrop-blur border border-neutral-700/50 p-8 rounded-3xl">
              <Wifi className="w-10 h-10 text-blue-400 mb-5" />
              <h3 className="text-xl font-bold mb-3">Travel & Diaspora</h3>
              <p className="text-neutral-400 leading-relaxed">Top up your own local SIM card when traveling, or ensure your home country SIM stays active.</p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur border border-neutral-700/50 p-8 rounded-3xl">
              <Clock className="w-10 h-10 text-amber-400 mb-5" />
              <h3 className="text-xl font-bold mb-3">Quick Emergencies</h3>
              <p className="text-neutral-400 leading-relaxed">When someone runs out of balance in an emergency situation, send them credit in under 3 seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUST & SOCIAL PROOF */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-4">Real praise from real people</h2>
            <div className="flex items-center justify-center gap-1 text-amber-400">
              <Star className="fill-current" size={24} />
              <Star className="fill-current" size={24} />
              <Star className="fill-current" size={24} />
              <Star className="fill-current" size={24} />
              <Star className="fill-current" size={24} />
            </div>
            <p className="mt-2 text-neutral-600 font-medium">Rated 4.8/5 by thousands of senders</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 font-bold flex items-center justify-center rounded-full text-lg">M</div>
                <div>
                  <h4 className="font-bold text-neutral-900">Maria T.</h4>
                  <p className="text-xs text-neutral-500">Sends to Mexico</p>
                </div>
              </div>
              <p className="text-neutral-600 italic">"I usually buy cards at the store to call my mom. I tried this once when it was raining, and the balance arrived before I even closed the app. Never going back."</p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center rounded-full text-lg">D</div>
                <div>
                  <h4 className="font-bold text-neutral-900">David O.</h4>
                  <p className="text-xs text-neutral-500">Sends to Nigeria</p>
                </div>
              </div>
              <p className="text-neutral-600 italic">"Very straightforward. I use it to send MTN data to my sister for her university classes. The payment is secure and I've never had an issue with delivery."</p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center rounded-full text-lg">J</div>
                <div>
                  <h4 className="font-bold text-neutral-900">Jessica L.</h4>
                  <p className="text-xs text-neutral-500">Sends to Philippines</p>
                </div>
              </div>
              <p className="text-neutral-600 italic">"Life saver. My parents ran out of load during a storm and couldn't leave the house. I was able to send them credit from overseas in seconds so we could keep talking."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section id="faq" className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-neutral-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-semibold text-neutral-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-200 ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className="px-6 text-neutral-600 overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ 
                    maxHeight: activeFaq === index ? '200px' : '0px',
                    paddingBottom: activeFaq === index ? '20px' : '0px'
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8/9. FINAL CTA SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-blue-600 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                Ready to send a smile?
              </h2>
              <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Join thousands of people who trust us to keep them connected with family and friends abroad. Fast, secure, and hassle-free.
              </p>
              <Button 
                href={AFFILIATE_LINK}
                className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 text-lg shadow-xl inline-flex items-center"
              >
                Send Airtime Now
              </Button>
              <p className="mt-6 text-sm text-blue-200">No account required to start. Safe & secure payment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-neutral-400 py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Zap size={20} className="text-neutral-500" />
            <span className="font-bold text-lg tracking-tight text-white">SwiftTopUp</span>
          </div>
          <div className="text-sm">
            <p> 2026 SwiftTopUp. All rights reserved.</p>
            <p className="mt-1 text-xs text-neutral-600">This is an informational page promoting international mobile recharge services.</p>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-neutral-200 z-50 transform translate-y-0 transition-transform duration-300 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <Button 
          href={AFFILIATE_LINK}
          className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3.5 text-base shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]"
        >
          Send Airtime Now
        </Button>
      </div>

    </div>
  );
}
