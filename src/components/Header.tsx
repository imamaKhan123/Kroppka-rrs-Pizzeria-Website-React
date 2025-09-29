import { Button } from "./ui/button";
import { Phone, MapPin } from "lucide-react";
import { OrderModal } from "./OrderModal";
import { useCart } from "./CartContext";
import { Badge } from "./ui/badge";

export function Header() {
  const { getTotalItems } = useCart();
  
  return (
    <header className="bg-gradient-to-r from-red-800 to-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold text-yellow-300">Kroppkärrs Pizzeria</h1>
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>08-123 456 78</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Kroppkärr, Stockholm</span>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#hem" className="hover:text-yellow-300 transition-colors">Hem</a>
            <a href="#meny" className="hover:text-yellow-300 transition-colors">Meny</a>
            <a href="#galleri" className="hover:text-yellow-300 transition-colors">Galleri</a>
            <a href="#recensioner" className="hover:text-yellow-300 transition-colors">Recensioner</a>
            <OrderModal>
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-red-800 font-bold relative">
                Beställ Nu
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </OrderModal>
          </nav>
        </div>
      </div>
    </header>
  );
}