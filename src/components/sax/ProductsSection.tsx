
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

const ProductsSection = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Altius",
      category: "Aerial Systems",
      description: "Advanced long-endurance autonomous drone with multi-spectral sensing and tactical response capabilities.",
      image: "/lovable-uploads/37df501d-6473-4dfe-b5cc-32c1bc6f66a2.png",
      featured: true
    },
    {
      id: 2,
      name: "Anvil",
      category: "Counter-UAS",
      description: "Kinetic drone interceptor with autonomous targeting and neutralization capabilities.",
      image: "/lovable-uploads/67f80cc0-462f-4018-ad60-ee5cbc3fc929.png"
    },
    {
      id: 3,
      name: "Barracuda",
      category: "Maritime Systems",
      description: "Submersible autonomous vessel for underwater threat detection and neutralization.",
      image: "/lovable-uploads/d10acc26-8c2c-49c8-a933-902aa18ecdfd.png",
      featured: true
    },
    {
      id: 4,
      name: "Bolt",
      category: "Tactical Systems",
      description: "Man-portable tactical drone launcher with integrated battlefield awareness.",
      image: "/lovable-uploads/90b3bab2-c8dd-46e8-9711-5aefff72972d.png"
    },
    {
      id: 5,
      name: "Copperhead",
      category: "Surveillance Systems",
      description: "Persistent aerial surveillance platform with AI-enhanced visual intelligence.",
      image: "/lovable-uploads/278a2427-ff80-4600-ad9f-512342c5a1b5.png"
    },
    {
      id: 6,
      name: "Dive-LD",
      category: "Maritime Systems",
      description: "Long-duration autonomous underwater vehicle for extended maritime operations.",
      image: "/lovable-uploads/ae98c665-d6eb-4aea-a154-166a3cc33f58.png"
    },
    {
      id: 7,
      name: "Fury",
      category: "Weapons Systems",
      description: "Precision strike loitering munition with advanced target acquisition.",
      image: "/lovable-uploads/506562e7-d9c2-4a34-bc2b-976ade00acb6.png",
      featured: true
    },
    {
      id: 8,
      name: "Ghost",
      category: "Stealth Systems",
      description: "Low-observable reconnaissance drone with silent propulsion system.",
      image: "/lovable-uploads/74dea0d6-de3c-4510-9bc5-ca04cced7710.png"
    },
    {
      id: 9,
      name: "Iris",
      category: "Sensor Systems",
      description: "Advanced multi-spectral imaging system with AI target recognition.",
      image: "/lovable-uploads/81db5763-0764-4f56-b0ff-94d1ed111fe0.png"
    },
    {
      id: 10,
      name: "Menace",
      category: "Electronic Warfare",
      description: "Directional electromagnetic pulse generator for electronic system neutralization.",
      image: "/lovable-uploads/bb6363e7-519a-4dfa-a5b7-797abf33ec32.png"
    },
    {
      id: 11,
      name: "Sentry",
      category: "Perimeter Defense",
      description: "Autonomous security tower with integrated sensing and defense capabilities.",
      image: "/lovable-uploads/e4bb0faf-3e81-44dd-bd8a-625195520f26.png",
      featured: true
    }
  ];

  const featuredProducts = products.filter(product => product.featured);
  const standardProducts = products.filter(product => !product.featured);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Badge className="mb-6 mx-auto block w-fit bg-military-red">Advanced Systems</Badge>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center eagle-title mb-16">
          Next-Generation Defense Products
        </h2>
        
        {/* Featured Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200 flex flex-col md:flex-row">
              <div className="md:w-2/5 h-64 md:h-auto">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6 flex flex-col">
                <div>
                  <Badge className="mb-2">{product.category}</Badge>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </div>
                <div className="mt-auto">
                  <Button className="w-full bg-military-navy hover:bg-military-navy/90">
                    View Specifications
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Standard Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <Badge className="w-fit mb-1">{product.category}</Badge>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-military-red hover:bg-military-red/90 text-white px-8 py-6 text-lg">
            Request Product Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
