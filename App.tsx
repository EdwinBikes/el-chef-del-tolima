
import React, { useState, useEffect, useRef } from 'react';
import WhatsAppButton from './components/WhatsAppButton';
import { ClockIcon, MapPinIcon, PhoneIcon } from './components/Icons';
import Loader from './components/Loader';

const Header: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => (
  <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isScrolled ? 'text-[#4A2E1A]' : 'text-white drop-shadow-sm'}`}>El Chef del Tolima</h1>
      <nav className="hidden md:flex space-x-8">
        <a href="#menu" className={`font-medium transition-colors duration-300 drop-shadow-sm ${isScrolled ? 'text-[#333333] hover:text-[#345E3B]' : 'text-white hover:text-gray-200'}`}>Menú</a>
        <a href="#locations" className={`font-medium transition-colors duration-300 drop-shadow-sm ${isScrolled ? 'text-[#333333] hover:text-[#345E3B]' : 'text-white hover:text-gray-200'}`}>Ubicaciones</a>
        <a href="#contact" className={`font-medium transition-colors duration-300 drop-shadow-sm ${isScrolled ? 'text-[#333333] hover:text-[#345E3B]' : 'text-white hover:text-gray-200'}`}>Contacto</a>
      </nav>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1920&auto=format&fit=crop')" }}>
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">El Sabor Auténtico de la Tradición</h2>
      <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">Hechos con amor, con los sabores de la abuela. Cada tamal cuenta una historia.</p>
    </div>
  </section>
);

const menuItems = [
    { name: "Tamal pequeño", description: "Un clásico que nunca falla.", price: "$6k", imageUrl: "https://images.unsplash.com/photo-1629819124328-9359a5180631?q=80&w=800&auto=format&fit=crop" },
    { name: "Tamal mediano", description: "El tamaño perfecto para todos.", price: "$7k", imageUrl: "https://images.unsplash.com/photo-1599975494720-4628b0a02095?q=80&w=800&auto=format&fit=crop" },
    { name: "Tamal grande", description: "Si tienes mucha hambre esta es tu mejor opción.", price: "$8k", imageUrl: "https://images.unsplash.com/photo-1629819124434-3168b4380a90?q=80&w=800&auto=format&fit=crop" },
    { name: "Tamal con lechona", description: "El mejor acompañante y el mejor sabor", price: "$15k", imageUrl: "https://media.istockphoto.com/id/1191599348/es/foto/delicioso-tamal-colombiano-con-fuente-de-prote%C3%ADna.jpg?s=612x612&w=0&k=20&c=w5T-7BTjxi9eG982RjC-NlO_q-zHAcT0u38z5pW_wDs=" },
    { name: "Chocolate", description: "Bebida caliente y espumoso chocolate.", price: "$2k", imageUrl: "https://images.unsplash.com/photo-1542326521-4658f4b0c13f?q=80&w=800&auto=format&fit=crop" },
    { name: "Jugo de naranja", description: "Dulce y fresco, perfecto para acompañar.", price: "$4k y 7k", imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=800&auto=format&fit=crop" },
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
            style={{ transitionDelay: `${index * 100}ms` }}
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
    <section id="menu" className="py-16 md:py-24 bg-[#FDFBF5]">
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
    const locations = [
        { name: "Sede Bosa centro", address: "Cra. 78c #71 c 46 sur", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { name: "Sede Fontibon", address: "AK 97 #23H - 06 LC 1", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { name: "Sede San Cristobal Sur", address: "Carrera 4e #28 86 sur", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ];

    return (
        <section id="locations" className="py-16 md:py-24 bg-[#FDFBF5]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A2E1A] mb-4">Visítanos y Vive la Experiencia</h2>
                <p className="text-center text-[#6B6B6B] max-w-2xl mx-auto mb-12">
                    Contamos con tres sedes para que disfrutes de nuestros deliciosos tamales donde quiera que estés. ¡Mira un poco de nuestro ambiente!
                </p>
                <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                    {locations.map((location, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden group">
                            <video
                                src={location.videoSrc}
                                controls
                                className="w-full aspect-video object-cover"
                                aria-label={`Video de la sucursal ${location.name}`}
                            >
                                Tu navegador no soporta el tag de video.
                            </video>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#4A2E1A]">{location.name}</h3>
                                <p className="text-[#333333] mt-2 flex items-center">
                                    <MapPinIcon className="w-5 h-5 mr-2 text-[#345E3B]" />
                                    {location.address}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const Contact: React.FC = () => (
    <section id="contact" className="py-16 md:py-24 bg-[#FDFBF5]">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A2E1A] mb-8">Contáctanos</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="flex items-center text-lg text-[#333333]">
                    <PhoneIcon className="w-6 h-6 mr-3 text-[#345E3B]" />
                    <span>Pedidos: 3102800939</span>
                </div>
                <div className="flex items-center text-lg text-[#333333]">
                    <ClockIcon className="w-6 h-6 mr-3 text-[#345E3B]" />
                    <span>Todos los días de: 7:00am - 2:00pm</span>
                </div>
            </div>
             <p className="mt-8 text-[#6B6B6B]">¡Pedidos de Tamales al por mayor por WhatsApp!</p>
        </div>
    </section>
);


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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#FDFBF5] min-h-screen">
      <Header isScrolled={isScrolled} />
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
