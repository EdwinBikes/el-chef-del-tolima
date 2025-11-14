
import React, { useState, useEffect } from 'react';
import WhatsAppButton from './components/WhatsAppButton';
import { ClockIcon, MapPinIcon, PhoneIcon } from './components/Icons';
import Loader from './components/Loader';

const Header: React.FC = () => (
  <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-amber-900">El Chef del Tolima</h1>
      <nav className="hidden md:flex space-x-8">
        <a href="#menu" className="text-gray-700 hover:text-amber-800 transition-colors">Menú</a>
        <a href="#locations" className="text-gray-700 hover:text-amber-800 transition-colors">Ubicaciones</a>
        <a href="#contact" className="text-gray-700 hover:text-amber-800 transition-colors">Contacto</a>
      </nav>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1920&auto=format&fit=crop')" }}>
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">El Sabor Auténtico de la Tradición</h2>
      <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">Hechos con amor, con los sabores de la abuela. Cada tamal cuenta una historia.</p>
    </div>
  </section>
);

const Menu: React.FC = () => {
  const menuItems = [
    { name: "Tamal pequeño", description: "Un clásico que nunca falla.", price: "$6k" },
    { name: "Tamal mediano", description: "El tamaño perfecto para todos.", price: "$7k" },
    { name: "Tamal grande", description: "Si tienes mucha hambre esta es tu mejor opción.", price: "$8k" },
    { name: "Tamal con lechona", description: "El mejor acompañante y el mejor sabor", price: "$15k" },
    { name: "Chocolate", description: "Bebida caliente y espumoso chocolate.", price: "$2k" },
    { name: "Jugo de naranja", description: "Dulce y fresco, perfecto para acompañar.", price: "$4k y 7k" },
  ];
  return (
    <section id="menu" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">Nuestro Menú</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-bold text-amber-800">{item.name}</h3>
                <p className="text-lg font-semibold text-green-700">{item.price}</p>
              </div>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
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
        <section id="locations" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-4">Visítanos y Vive la Experiencia</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
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
                                <h3 className="text-2xl font-bold text-amber-900">{location.name}</h3>
                                <p className="text-gray-700 mt-2 flex items-center">
                                    <MapPinIcon className="w-5 h-5 mr-2 text-amber-700" />
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
    <section id="contact" className="py-16 md:py-24 bg-orange-50">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">Contáctanos</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="flex items-center text-lg text-gray-700">
                    <PhoneIcon className="w-6 h-6 mr-3 text-amber-800" />
                    <span>Pedidos: 3102800939</span>
                </div>
                <div className="flex items-center text-lg text-gray-700">
                    <ClockIcon className="w-6 h-6 mr-3 text-amber-800" />
                    <span>Todos los días de: 7:00am - 2:00pm</span>
                </div>
            </div>
             <p className="mt-8 text-gray-600">¡Pedidos de Tamales al por mayor por WhatsApp!</p>
        </div>
    </section>
);


const Footer: React.FC = () => (
  <footer className="bg-amber-900 text-orange-50 py-8">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; {new Date().getFullYear()} El Chef del Tolima. Todos los derechos reservados.</p>
    </div>
  </footer>
);


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      <Header />
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