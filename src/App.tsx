import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FoodGallery } from "./components/FoodGallery";
import { Menu } from "./components/Menu";
import { Reviews } from "./components/Reviews";
import { Footer } from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <FoodGallery />
        <Menu />
        <Reviews />
        <Footer />
        <Toaster />
      </div>
    </CartProvider>
  );
}