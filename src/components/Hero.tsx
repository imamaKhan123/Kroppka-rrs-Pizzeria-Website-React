import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { OrderModal } from "./OrderModal";

export function Hero() {
  return (
    <section id="hem" className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-red-800 leading-tight">
              Äkta Italiensk
              <span className="block text-yellow-600">Pizza & Kebab</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Välkommen till Kroppkärrs Pizzeria! Vi serverar handgjorda pizzor med färska ingredienser och saftiga kebabspecialiteter i en mysig atmosfär.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <OrderModal>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                  Beställ Online
                </Button>
              </OrderModal>
              <OrderModal>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 text-lg">
                  Se Menyn
                </Button>
              </OrderModal>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Öppet nu</span>
              </div>
              <div>Leverans 30-45 min</div>
              <div>Gratis frakt över 200kr</div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwaXp6YSUyMG1hcmdoZXJpdGElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1OTA3MDk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Delicious Margherita Pizza"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 z-0 w-full h-96 bg-gradient-to-br from-red-200 to-yellow-200 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}