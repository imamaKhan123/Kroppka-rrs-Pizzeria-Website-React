import { Button } from "./ui/button";
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from "lucide-react";
import { OrderModal } from "./OrderModal";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-red-800 to-red-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-300">Kroppkärrs Pizzeria</h3>
            <p className="text-red-100 leading-relaxed">
              Familjeägd pizzeria som serverar autentisk italiensk pizza och läckra kebabspecialiteter sedan 2010.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-red-200 hover:text-yellow-300 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-red-200 hover:text-yellow-300 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-yellow-300">Kontakt</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-200" />
                <span className="text-red-100">08-123 456 78</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-200" />
                <span className="text-red-100">info@kroppkarrspizza.se</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-200 mt-1 flex-shrink-0" />
                <span className="text-red-100">
                  Kroppkärrsvägen 15<br />
                  123 45 Kroppkärr, Stockholm
                </span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-yellow-300">Öppettider</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-red-200" />
                <div className="text-red-100">
                  <div>Mån-Tor: 11:00-22:00</div>
                  <div>Fre-Lör: 11:00-23:00</div>
                  <div>Sön: 12:00-21:00</div>
                </div>
              </div>
            </div>
            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm inline-block">
              Öppet nu
            </div>
          </div>

          {/* Quick Order */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-yellow-300">Snabbbeställning</h4>
            <p className="text-red-100 text-sm">
              Ring oss eller beställ online för snabb leverans eller avhämtning
            </p>
            <div className="space-y-3">
              <OrderModal>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-red-800 font-bold">
                  Beställ Online
                </Button>
              </OrderModal>
              <Button variant="outline" className="w-full border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-red-800">
                Ring & Beställ
              </Button>
            </div>
            <div className="text-xs text-red-200">
              Gratis leverans över 200kr inom Kroppkärr
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-red-200 text-sm">
              © 2024 Kroppkärrs Pizzeria. Alla rättigheter förbehållna.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-red-200 hover:text-yellow-300 transition-colors">Integritetspolicy</a>
              <a href="#" className="text-red-200 hover:text-yellow-300 transition-colors">Villkor</a>
              <a href="#" className="text-red-200 hover:text-yellow-300 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}