import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Pizza, UtensilsCrossed } from "lucide-react";
import { OrderModal } from "./OrderModal";

export function Menu() {
  const pizzas = [
    {
      name: "Margherita",
      description: "Tomatsås, mozzarella, färsk basilika, olivolja",
      price: "139 kr",
      popular: true
    },
    {
      name: "Pepperoni",
      description: "Tomatsås, mozzarella, pepperoni, oregano",
      price: "159 kr",
      popular: true
    },
    {
      name: "Quattro Stagioni",
      description: "Tomatsås, mozzarella, skinka, champinjoner, kronärtskocka, oliver",
      price: "179 kr",
      popular: false
    },
    {
      name: "Kroppkärr Special",
      description: "Tomatsås, mozzarella, kebabkött, rödlök, paprika, vitlökssås",
      price: "189 kr",
      popular: true
    }
  ];

  const kebabs = [
    {
      name: "Kebab Tallrik",
      description: "Kebabkött, pommes, sallad, tomater, gurka, vitlökssås",
      price: "149 kr",
      popular: true
    },
    {
      name: "Kebab i Bröd",
      description: "Pitabröd, kebabkött, sallad, tomater, gurka, vitlökssås",
      price: "119 kr",
      popular: false
    },
    {
      name: "Kebabrulle",
      description: "Tunnbröd, kebabkött, sallad, tomater, gurka, stark sås",
      price: "129 kr",
      popular: true
    },
    {
      name: "Falafel Tallrik",
      description: "Falafel, pommes, sallad, tomater, gurka, hummus",
      price: "139 kr",
      popular: false
    }
  ];

  return (
    <section id="meny" className="py-20 bg-gradient-to-b from-amber-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
            Vår Populära Meny
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Handgjorda pizzor och autentiska kebabspecialiteter tillagade med kärlek
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Pizza Section */}
          <div>
            <div className="flex items-center mb-8">
              <Pizza className="w-8 h-8 text-red-600 mr-3" />
              <h3 className="text-3xl font-bold text-red-800">Pizzor</h3>
            </div>
            <div className="space-y-6">
              {pizzas.map((pizza, index) => (
                <Card key={index} className="bg-white/80 hover:bg-white transition-colors duration-300 border-2 hover:border-red-200">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-red-800 flex items-center gap-2">
                        {pizza.name}
                        {pizza.popular && <Badge className="bg-yellow-500 text-red-800">Populär</Badge>}
                      </CardTitle>
                      <span className="text-2xl font-bold text-red-600">{pizza.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-base">
                      {pizza.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Kebab Section */}
          <div>
            <div className="flex items-center mb-8">
              <UtensilsCrossed className="w-8 h-8 text-red-600 mr-3" />
              <h3 className="text-3xl font-bold text-red-800">Kebab</h3>
            </div>
            <div className="space-y-6">
              {kebabs.map((kebab, index) => (
                <Card key={index} className="bg-white/80 hover:bg-white transition-colors duration-300 border-2 hover:border-red-200">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-red-800 flex items-center gap-2">
                        {kebab.name}
                        {kebab.popular && <Badge className="bg-yellow-500 text-red-800">Populär</Badge>}
                      </CardTitle>
                      <span className="text-2xl font-bold text-red-600">{kebab.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-base">
                      {kebab.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <OrderModal>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              Se Hela Menyn & Beställ
            </Button>
          </OrderModal>
        </div>
      </div>
    </section>
  );
}