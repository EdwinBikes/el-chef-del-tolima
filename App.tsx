
import React, { useState, useEffect, useRef } from 'react';
import WhatsAppButton from './components/WhatsAppButton';
import { ClockIcon, MapPinIcon, PhoneIcon, MenuIcon, XIcon, TiktokIcon, InstagramIcon, FacebookIcon } from './components/Icons';
import Loader from './components/Loader';

const Header: React.FC<{ isScrolled: boolean; activeSection: string | null }> = ({ isScrolled, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const headerIsActive = isScrolled || isMenuOpen;

  const getNavLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    let classes = 'font-medium transition-colors duration-300';

    if (headerIsActive) {
      classes += isActive 
        ? ' text-[#345E3B] font-semibold' 
        : ' text-[#333333] hover:text-[#345E3B]';
    } else {
      classes += ' drop-shadow-sm';
      classes += isActive 
        ? ' text-white font-semibold underline decoration-2 underline-offset-4' 
        : ' text-white hover:text-gray-200';
    }
    return classes;
  };

  const getMobileNavLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `text-lg transition-colors ${isActive ? 'text-[#345E3B] font-bold' : 'text-[#4A2E1A] font-semibold hover:text-[#345E3B]'}`;
  };
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${headerIsActive ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? 'py-2' : 'py-4'}`}>
        <h1 className={`font-bold transition-all duration-300 ease-in-out ${isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} ${headerIsActive ? 'text-[#4A2E1A]' : 'text-white drop-shadow-sm'}`}>El Chef del Tolima</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#menu" className={getNavLinkClasses('menu')}>Menú</a>
          <a href="#locations" className={getNavLinkClasses('locations')}>Ubicaciones</a>
          <a href="#contact" className={getNavLinkClasses('contact')}>Contacto</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            aria-label="Toggle menu" 
            className={`transition-colors duration-300 z-20 relative ${headerIsActive ? 'text-[#4A2E1A]' : 'text-white'}`}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
         <nav className="flex flex-col items-center space-y-4 py-4 border-t border-gray-200/80">
            <a href="#menu" onClick={toggleMenu} className={getMobileNavLinkClasses('menu')}>Menú</a>
            <a href="#locations" onClick={toggleMenu} className={getMobileNavLinkClasses('locations')}>Ubicaciones</a>
            <a href="#contact" onClick={toggleMenu} className={getMobileNavLinkClasses('contact')}>Contacto</a>
          </nav>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-[2500ms] ease-out transform ${isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} 
        style={{ backgroundImage: "url('https://i.postimg.cc/mrqmRC43/hero_background.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg transition-all duration-1000 ease-out delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          El Sabor Auténtico de la Tradición
        </h2>
        <p className={`text-lg md:text-2xl max-w-2xl drop-shadow-md transition-all duration-1000 ease-out delay-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          Hechos con amor, con los sabores de la abuela.<br />Cada tamal cuenta una historia.
        </p>
      </div>
    </section>
  );
};

const menuItems = [
    { name: "Tamal pequeño", description: "Un clásico que nunca falla, ideal para acompañar con pan y chocolate.", price: "$5.5k", imageUrl: "https://i.postimg.cc/XvWdshGB/imagen-editada-(8).png" },
    { name: "Tamal mediano", description: "El tamaño perfecto para todos, servido para una experiencia completa.", price: "$6.5k", imageUrl: "https://i.postimg.cc/8C3ZDMGm/tamal_mediano.jpg" },
    { name: "Tamal grande", description: "Nuestra porción más generosa para satisfacer los paladares más exigentes.", price: "$7.5k", imageUrl: "https://i.postimg.cc/Kvw8cMx0/imagen-editada.png" },
    { name: "Tamal picante", description: "El mejor y mas delicioso tamal picante de la ciudad.", price: "$9k", imageUrl: "https://i.postimg.cc/k5ZT9KCy/tamal_pequeno.jpg" },
    { name: "Tamal con lechona", description: "La combinación perfecta del Tolima: tamal y nuestra crujiente lechona por un adicional de.", price: "$8k", imageUrl: "https://i.postimg.cc/wBPwHLzD/tamal_con_lechona.jpg" },
    { name: "Chocolate", description: "Bebida caliente y espumoso chocolate, el complemento ideal.", price: "$3k", imageUrl: "https://i.postimg.cc/sghbYBSt/chocolate2.jpg" },
    { name: "Jugo de naranja", description: "Jugo 100% natural, recien preparado para acompañar tu tamal.", price: "$4k y 7k", imageUrl: "https://i.postimg.cc/tgfByWbh/jugo_naranja.jpg" },
  ];

interface MenuItem {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}

const MenuItemCard: React.FC<{ item: MenuItem; index: number }> = ({ item, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        const currentRef = cardRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${index * 200}ms` }}
        >
            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-bold text-[#A35738]">{item.name}</h3>
                    <p className="text-lg font-semibold text-[#345E3B]">{item.price}</p>
                </div>
                <p className="text-[#6B6B6B] mt-2 flex-grow">{item.description}</p>
            </div>
        </div>
    );
};

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-16 md:py-24 bg-[#FDFBF5] scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A2E1A] mb-12">Nuestro Menú</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuItemCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoLocations: React.FC = () => {
    const [animationStage, setAnimationStage] = useState(0); // 0: hidden, 1: icon visible, 2: content visible
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger animation when the section is at least 30% visible
                if (entry.isIntersecting && animationStage === 0) {
                    setAnimationStage(1);
                    
                    // After 1.2 seconds of showing the icon, switch to showing the content
                    setTimeout(() => {
                        setAnimationStage(2);
                    }, 1200);
                }
            },
            {
                threshold: 0.3
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, [animationStage]);

    const locations = [
        { name: "Sede Bosa centro", address: "Cra. 78c #71 c 46 sur", videoSrc: "https://www.youtube.com/embed/dRS1N8nBHA4", mapUrl: "https://maps.app.goo.gl/CLp4LWyGJkz5QoN9A" },
        { name: "Sede Fontibón", address: "AK 97 #23H - 06 LC 1", videoSrc: "https://www.youtube.com/shorts/9Z8scAIiGMA", mapUrl: "https://maps.app.goo.gl/ikbzx6LG99bxPr7m7" },
        { name: "Sede San Cristóbal Sur", address: "Carrera 4e #28 86 sur", videoSrc: "https://www.youtube.com/shorts/sjemcl9Io4I", mapUrl: "https://maps.app.goo.gl/XUYDGZMWJUhuH5FR7" },
    ];

    return (
        <section id="locations" ref={sectionRef} className="py-16 md:py-24 bg-[#FDFBF5] scroll-mt-20 min-h-[60vh] relative overflow-hidden">
            {/* Animated Icon Overlay */}
            <div className={`absolute inset-0 flex justify-center items-start pt-24 z-20 pointer-events-none transition-all duration-700 ease-in-out ${animationStage === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-125'}`}>
                <div className="bg-[#345E3B]/10 p-8 rounded-full animate-bounce-slow">
                     <MapPinIcon className="w-32 h-32 md:w-48 md:h-48 text-[#345E3B]" />
                </div>
            </div>

            {/* Main Content */}
            <div className={`container mx-auto px-6 transition-all duration-1000 ease-out transform ${animationStage === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A2E1A] mb-4">Visítanos y Vive la Experiencia</h2>
                <p className="text-center text-[#6B6B6B] max-w-2xl mx-auto mb-12">
                    Contamos con tres sedes para que disfrutes de nuestros deliciosos tamales donde quiera que estés. ¡Mira un poco de nuestro ambiente!
                </p>
                <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                    {locations.map((location, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden group">
                            <iframe 
                                src={location.videoSrc} 
                                title={`Video de la sucursal ${location.name}`}
                                className="w-full aspect-video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            ></iframe>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#4A2E1A]">{location.name}</h3>
                                <a 
                                    href={location.mapUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-[#333333] mt-2 flex items-center hover:underline hover:text-[#345E3B] transition-colors"
                                >
                                    <MapPinIcon className="w-5 h-5 mr-2 text-[#345E3B]" />
                                    <span>{location.address}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const Contact: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-[#FDFBF5] scroll-mt-20 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <h2 
                    className={`text-3xl md:text-4xl font-bold text-[#4A2E1A] mb-8 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
                >
                    Contáctanos
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    <div 
                        className={`flex items-center text-lg text-[#333333] transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
                    >
                        <PhoneIcon className="w-6 h-6 mr-3 text-[#345E3B]" />
                        <span>Pedidos: 3102800939</span>
                    </div>
                    <div 
                        className={`flex items-center text-lg text-[#333333] transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                    >
                        <ClockIcon className="w-6 h-6 mr-3 text-[#345E3B]" />
                        <span>Todos los días de: 7:00am - 2:00pm</span>
                    </div>
                </div>
                 <p 
                    className={`mt-8 text-[#6B6B6B] transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                 >
                    ¡Pedidos de Tamales al por mayor por WhatsApp!
                 </p>
                 
                 <div className={`mt-12 transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl font-semibold text-[#4A2E1A] mb-6">Síguenos en nuestras redes</h3>
                    <div className="flex justify-center items-center gap-8">
                        <a href="https://www.tiktok.com/@el.chef.del.tolima" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-black hover:scale-110 transition-transform duration-300">
                            <TiktokIcon className="w-8 h-8" />
                        </a>
                        <a href="https://instagram.com/elchefdeltolima" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#E1306C] hover:scale-110 transition-transform duration-300">
                            <InstagramIcon className="w-8 h-8" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61559401654367" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#1877F2] hover:scale-110 transition-transform duration-300">
                            <FacebookIcon className="w-8 h-8" />
                        </a>
                    </div>
                 </div>
            </div>
        </section>
    );
};


const Footer: React.FC = () => (
  <footer className="bg-[#345E3B] text-[#FDFBF5] py-8">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; {new Date().getFullYear()} El Chef del Tolima. Todos los derechos reservados.</p>
    </div>
  </footer>
);


export default function App() {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (loading) return;

    const sectionIds = ['menu', 'locations', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#FDFBF5] min-h-screen">
      <Header isScrolled={isScrolled} activeSection={activeSection} />
      <main>
        <Hero />
        <Menu />
        <VideoLocations />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
