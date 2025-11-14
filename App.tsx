
import React from 'react';
import WhatsAppButton from './components/WhatsAppButton';
import { ClockIcon, MapPinIcon, PhoneIcon } from './components/Icons';

const Header: React.FC = () => (
  <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-amber-900">Tamales del Corazón</h1>
      <nav className="hidden md:flex space-x-8">
        <a href="#menu" className="text-gray-700 hover:text-amber-800 transition-colors">Menú</a>
        <a href="#locations" className="text-gray-700 hover:text-amber-800 transition-colors">Ubicaciones</a>
        <a href="#contact" className="text-gray-700 hover:text-amber-800 transition-colors">Contacto</a>
      </nav>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?food,mexican')" }}>
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">El Sabor Auténtico de la Tradición</h2>
      <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">Hechos con amor, como los de la abuela. Cada tamal cuenta una historia.</p>
    </div>
  </section>
);

const Menu: React.FC = () => {
  const menuItems = [
    { name: "Tamal Verde", description: "Pollo en salsa verde, un clásico que nunca falla.", price: "$25" },
    { name: "Tamal de Mole", description: "Pollo con nuestro mole especial de la casa.", price: "$28" },
    { name: "Tamal de Rajas", description: "Queso oaxaca con rajas de chile poblano.", price: "$25" },
    { name: "Tamal de Dulce", description: "Con pasas y un toque de piña.", price: "$23" },
    { name: "Champurrado", description: "Bebida caliente de masa y chocolate.", price: "$20" },
    { name: "Atole de Elote", description: "Dulce y cremoso, perfecto para acompañar.", price: "$20" },
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
        { name: "Sucursal Roma", address: "Av. de los Insurgentes Sur 123, Roma Nte.", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { name: "Sucursal Condesa", address: "Av. Amsterdam 456, Hipódromo", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { name: "Sucursal Coyoacán", address: "Jardín Centenario 789, Coyoacán", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ];

    return (
        <section id="locations" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-4">Visítanos y Vive la Experiencia</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    Contamos con tres sucursales para que disfrutes de nuestros deliciosos tamales donde quiera que estés. ¡Mira un poco de nuestro ambiente!
                </p>
                <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                    {locations.map((location, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden group">
                            <div className="aspect-w-16 aspect-h-9">
                                <video
                                    src={location.videoSrc}
                                    controls
                                    className="w-full h-full object-cover"
                                    aria-label={`Video de la sucursal ${location.name}`}
                                >
                                    Tu navegador no soporta el tag de video.
                                </video>
                            </div>
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
                    <span>Pedidos: +52 55 1234 5678</span>
                </div>
                <div className="flex items-center text-lg text-gray-700">
                    <ClockIcon className="w-6 h-6 mr-3 text-amber-800" />
                    <span>Lunes a Domingo: 8:00am - 9:00pm</span>
                </div>
            </div>
             <p className="mt-8 text-gray-600">¡Haz tu pedido por WhatsApp para recoger en tu sucursal más cercana!</p>
        </div>
    </section>
);


const Footer: React.FC = () => (
  <footer className="bg-amber-900 text-orange-50 py-8">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; {new Date().getFullYear()} Tamales del Corazón. Todos los derechos reservados.</p>
    </div>
  </footer>
);


export default function App() {
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
      <WhatsAppButton phoneNumber="+5215512345678" message="¡Hola! Quisiera hacer un pedido de tamales." />
    </div>
  );
}
