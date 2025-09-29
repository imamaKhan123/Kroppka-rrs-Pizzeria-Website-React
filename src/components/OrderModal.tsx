import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { useCart, MenuItem } from './CartContext';
import { ShoppingCart, Plus, Minus, Trash2, Pizza, UtensilsCrossed } from 'lucide-react';
import { toast } from "sonner@2.0.3";

interface OrderModalProps {
  children: React.ReactNode;
}

export function OrderModal({ children }: OrderModalProps) {
  const { items, addToCart, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('menu');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  const menuItems: MenuItem[] = [
    {
      id: 'margherita',
      name: 'Margherita',
      description: 'Tomatsås, mozzarella, färsk basilika, olivolja',
      price: 139,
      category: 'pizza',
      popular: true
    },
    {
      id: 'pepperoni',
      name: 'Pepperoni',
      description: 'Tomatsås, mozzarella, pepperoni, oregano',
      price: 159,
      category: 'pizza',
      popular: true
    },
    {
      id: 'quattro-stagioni',
      name: 'Quattro Stagioni',
      description: 'Tomatsås, mozzarella, skinka, champinjoner, kronärtskocka, oliver',
      price: 179,
      category: 'pizza'
    },
    {
      id: 'kroppkarr-special',
      name: 'Kroppkärr Special',
      description: 'Tomatsås, mozzarella, kebabkött, rödlök, paprika, vitlökssås',
      price: 189,
      category: 'pizza',
      popular: true
    },
    {
      id: 'capricciosa',
      name: 'Capricciosa',
      description: 'Tomatsås, mozzarella, skinka, champinjoner, kronärtskocka',
      price: 169,
      category: 'pizza'
    },
    {
      id: 'hawaii',
      name: 'Hawaii',
      description: 'Tomatsås, mozzarella, skinka, ananas',
      price: 159,
      category: 'pizza'
    },
    {
      id: 'kebab-tallrik',
      name: 'Kebab Tallrik',
      description: 'Kebabkött, pommes, sallad, tomater, gurka, vitlökssås',
      price: 149,
      category: 'kebab',
      popular: true
    },
    {
      id: 'kebab-bread',
      name: 'Kebab i Bröd',
      description: 'Pitabröd, kebabkött, sallad, tomater, gurka, vitlökssås',
      price: 119,
      category: 'kebab'
    },
    {
      id: 'kebabrulle',
      name: 'Kebabrulle',
      description: 'Tunnbröd, kebabkött, sallad, tomater, gurka, stark sås',
      price: 129,
      category: 'kebab',
      popular: true
    },
    {
      id: 'falafel-tallrik',
      name: 'Falafel Tallrik',
      description: 'Falafel, pommes, sallad, tomater, gurka, hummus',
      price: 139,
      category: 'kebab'
    }
  ];

  const pizzas = menuItems.filter(item => item.category === 'pizza');
  const kebabs = menuItems.filter(item => item.category === 'kebab');

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    toast.success(`${item.name} tillagd i varukorgen!`);
  };

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      toast.error('Din varukorg är tom!');
      return;
    }

    if (!customerInfo.name || !customerInfo.phone) {
      toast.error('Vänligen fyll i namn och telefonnummer.');
      return;
    }

    // Simulate order placement
    toast.success('Beställning skickad! Vi kontaktar dig inom kort.');
    clearCart();
    setCustomerInfo({
      name: '',
      phone: '',
      email: '',
      address: '',
      notes: ''
    });
    setIsOpen(false);
    setActiveTab('menu');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl text-red-800 flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            Beställ från Kroppkärrs Pizzeria
            {getTotalItems() > 0 && (
              <Badge className="bg-red-600 text-white ml-2">
                {getTotalItems()} {getTotalItems() === 1 ? 'vara' : 'varor'}
              </Badge>
            )}
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="menu">Meny</TabsTrigger>
            <TabsTrigger value="cart" className="relative">
              Varukorg
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="checkout">Kassa</TabsTrigger>
          </TabsList>

          <TabsContent value="menu" className="mt-4">
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-8">
                {/* Pizzas */}
                <div>
                  <div className="flex items-center mb-4">
                    <Pizza className="w-6 h-6 text-red-600 mr-2" />
                    <h3 className="text-2xl font-bold text-red-800">Pizzor</h3>
                  </div>
                  <div className="grid gap-4">
                    {pizzas.map((pizza) => (
                      <Card key={pizza.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-red-800">{pizza.name}</h4>
                                {pizza.popular && <Badge className="bg-yellow-500 text-red-800 text-xs">Populär</Badge>}
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{pizza.description}</p>
                              <p className="font-bold text-red-600">{pizza.price} kr</p>
                            </div>
                            <Button 
                              onClick={() => handleAddToCart(pizza)}
                              className="bg-red-600 hover:bg-red-700 text-white"
                            >
                              <Plus className="w-4 h-4 mr-1" />
                              Lägg till
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Kebabs */}
                <div>
                  <div className="flex items-center mb-4">
                    <UtensilsCrossed className="w-6 h-6 text-red-600 mr-2" />
                    <h3 className="text-2xl font-bold text-red-800">Kebab</h3>
                  </div>
                  <div className="grid gap-4">
                    {kebabs.map((kebab) => (
                      <Card key={kebab.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-red-800">{kebab.name}</h4>
                                {kebab.popular && <Badge className="bg-yellow-500 text-red-800 text-xs">Populär</Badge>}
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{kebab.description}</p>
                              <p className="font-bold text-red-600">{kebab.price} kr</p>
                            </div>
                            <Button 
                              onClick={() => handleAddToCart(kebab)}
                              className="bg-red-600 hover:bg-red-700 text-white"
                            >
                              <Plus className="w-4 h-4 mr-1" />
                              Lägg till
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="cart" className="mt-4">
            <ScrollArea className="h-[500px] pr-4">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Din varukorg är tom</p>
                  <Button 
                    onClick={() => setActiveTab('menu')}
                    className="mt-4 bg-red-600 hover:bg-red-700 text-white"
                  >
                    Börja handla
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-red-800">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <p className="font-bold text-red-600 mt-1">{item.price} kr</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="ml-2"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-right mt-2">
                          <span className="font-bold">Summa: {item.price * item.quantity} kr</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  <Separator />
                  
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-red-800">Total:</span>
                        <span className="text-2xl font-bold text-red-600">{getTotalPrice()} kr</span>
                      </div>
                      {getTotalPrice() < 200 && (
                        <p className="text-sm text-gray-600 mt-2">
                          Lägg till för {200 - getTotalPrice()} kr till för gratis leverans!
                        </p>
                      )}
                    </CardContent>
                  </Card>

                  <Button 
                    onClick={() => setActiveTab('checkout')}
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    disabled={items.length === 0}
                  >
                    Gå till kassan
                  </Button>
                </div>
              )}
            </ScrollArea>
          </TabsContent>

          <TabsContent value="checkout" className="mt-4">
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-800">Kontaktuppgifter</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="name">Namn *</Label>
                      <Input
                        id="name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Ditt fullständiga namn"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefonnummer *</Label>
                      <Input
                        id="phone"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="070-123 45 67"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-post</Label>
                      <Input
                        id="email"
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="din@email.se"
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Leveransadress</Label>
                      <Input
                        id="address"
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                        placeholder="Gata, postnummer, stad (lämna tom för avhämtning)"
                      />
                    </div>
                    <div>
                      <Label htmlFor="notes">Särskilda önskemål</Label>
                      <Textarea
                        id="notes"
                        value={customerInfo.notes}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, notes: e.target.value }))}
                        placeholder="T.ex. allergier, extra instruktioner..."
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-800">Ordersammanfattning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <span>{item.quantity}x {item.name}</span>
                          <span>{item.price * item.quantity} kr</span>
                        </div>
                      ))}
                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>{getTotalPrice()} kr</span>
                      </div>
                      {getTotalPrice() >= 200 && (
                        <p className="text-sm text-green-600">✓ Gratis leverans inkluderad!</p>
                      )}
                      {getTotalPrice() < 200 && customerInfo.address && (
                        <p className="text-sm text-gray-600">+ 30 kr leveransavgift</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  onClick={handlePlaceOrder}
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3"
                  disabled={items.length === 0}
                >
                  Lägg beställning - {getTotalPrice() + (getTotalPrice() < 200 && customerInfo.address ? 30 : 0)} kr
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Genom att lägga beställning godkänner du våra villkor. 
                  Vi kontaktar dig för bekräftelse inom 10 minuter.
                </p>
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}