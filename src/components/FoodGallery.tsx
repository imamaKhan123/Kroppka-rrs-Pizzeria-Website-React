import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FoodGallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1630443876697-e0d2faac7b51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMG92ZW4lMjBmaXJlJTIwY29va2luZ3xlbnwxfHx8fDE3NTkwNzA5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Pizza Oven Fire",
      title: "Stenugn"
    },
    {
      src: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODk2NjE3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Pepperoni Pizza Slice",
      title: "Pepperoni"
    },
    {
      src: "https://images.unsplash.com/photo-1577367997065-fdd8fd94fb3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWJhYiUyMHNrZXdlciUyMGdyaWxsZWQlMjBtZWF0fGVufDF8fHx8MTc1OTA3MDk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Grilled Kebab",
      title: "Kebab"
    },
    {
      src: "https://images.unsplash.com/photo-1563273941-b3d0e0129ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBpenphJTIwaW5ncmVkaWVudHMlMjBiYXNpbCUyMHRvbWF0b3xlbnwxfHx8fDE3NTkwNzA5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Fresh Pizza Ingredients",
      title: "Färska Ingredienser"
    },
    {
      src: "https://images.unsplash.com/photo-1706380469091-3bd9b7865b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBjb3p5JTIwZGluaW5nfGVufDF8fHx8MTc1OTAyNTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Cozy Restaurant Interior",
      title: "Mysig Atmosfär"
    },
    {
      src: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwaXp6YSUyMG1hcmdoZXJpdGElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1OTA3MDk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Margherita Pizza",
      title: "Margherita"
    }
  ];

  return (
    <section id="galleri" className="py-20 bg-gradient-to-b from-red-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
            Mat som Får Munnvattnet att Rinna
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Upptäck våra kulinariska mästerverk - från krispiga pizzor till saftiga kebabspecialiteter
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-xl">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}