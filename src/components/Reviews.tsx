import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      name: "Anna Lindström",
      rating: 5,
      text: "Bästa pizzan i hela Stockholm! Deras Margherita är helt fantastisk och kebaben är så saftig. Personalen är alltid vänlig och servicen är snabb.",
      date: "2 veckor sedan"
    },
    {
      name: "Erik Johansson",
      rating: 5,
      text: "Familjeägd restaurang med äkta italiensk känsla. Kroppkärr Special är min favorit - perfekt kombination av pizza och kebab!",
      date: "1 månad sedan"
    },
    {
      name: "Maria Andersson",
      rating: 4,
      text: "Mysig atmosfär och god mat. Har ätit här många gånger och blir aldrig besviken. Rekommenderar starkt deras kebabrulle!",
      date: "3 veckor sedan"
    },
    {
      name: "Lars Nielsen",
      rating: 5,
      text: "Autentisk smak och generösa portioner. Stenugnen ger pizzorna den perfekta smaken. Kommer definitivt tillbaka!",
      date: "1 vecka sedan"
    },
    {
      name: "Sofia Berg",
      rating: 5,
      text: "Otroligt god mat och bra priser! Leveransen kom i tid och maten var fortfarande varm. Toppbetyg från hela familjen!",
      date: "4 dagar sedan"
    },
    {
      name: "Michael Ström",
      rating: 4,
      text: "Klassisk pizzeria med hög kvalitet. Deras falafel är också riktigt bra för oss vegetarianer. Trevlig personal!",
      date: "2 månader sedan"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="recensioner" className="py-20 bg-gradient-to-b from-red-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
            Vad Säger Våra Kunder?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Över 500+ nöjda kunder har delat sina upplevelser med oss
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-gray-700">4.8/5</span>
            <span className="text-gray-600">(523 recensioner)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white/90 hover:bg-white transition-all duration-300 hover:shadow-lg border-2 hover:border-red-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-1 mb-4">
                  <Quote className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 italic leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-red-800">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Har du provat vår mat? Dela din upplevelse!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="text-red-600 hover:text-red-700 underline transition-colors"
            >
              Lämna en recension på Google
            </a>
            <a 
              href="#" 
              className="text-red-600 hover:text-red-700 underline transition-colors"
            >
              Recensera på Tripadvisor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}