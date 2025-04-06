
import { Badge } from "@/components/ui/badge";

const MindBridgeGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/67f80cc0-462f-4018-ad60-ee5cbc3fc929.png",
      alt: "Neural Network Visualization",
      caption: "Advanced neural network architecture for battlefield coordination"
    },
    {
      src: "/lovable-uploads/81db5763-0764-4f56-b0ff-94d1ed111fe0.png",
      alt: "HoloLens Military Integration",
      caption: "Military-grade HoloLens integration for tactical awareness"
    },
    {
      src: "/lovable-uploads/ae98c665-d6eb-4aea-a154-166a3cc33f58.png",
      alt: "EEG Neural Interface",
      caption: "High-resolution EEG interface for thought-based communication"
    },
    {
      src: "/lovable-uploads/506562e7-d9c2-4a34-bc2b-976ade00acb6.png",
      alt: "Combat Tactical Interface",
      caption: "Field-tested tactical interface for combat operations"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Badge className="mb-4 mx-auto block w-fit bg-military-red">Revolutionary Technology</Badge>
        <h2 className="text-3xl font-bold text-center mb-12 eagle-title">
          Mind Bridge in Action
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="font-bold mb-2">{image.alt}</h3>
                <p className="text-gray-600 text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MindBridgeGallery;
