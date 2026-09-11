import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HomeHero } from "@/components/HomeHero";
import { HomeOverview } from "@/components/HomeOverview";
import { HomeServices } from "@/components/HomeServices";
import { HomeImpact } from "@/components/HomeImpact";
import { HomeFAQ } from "@/components/HomeFAQ";
import { HomeClosingCTA } from "@/components/HomeClosingCTA";
import { KnowledgeBaseChat } from "@/components/KnowledgeBaseChat";


const createGalleryItem = (filename: string, title: string) => ({
  filename,
  src: `/gallery/${encodeURIComponent(filename)}`,
  alt: title,
  caption: title,
});

const galleryImages = [
  createGalleryItem("Brooder 7.jpeg", "Chicken coop disposal tray in place."),
  createGalleryItem("PCB Board 3D Side view.jpeg", "PCB board 3D side view."),
  createGalleryItem("PCb Board top view.jpeg", "PCB board top view."),
  createGalleryItem("WhatsApp Image 2026-02-02 at 10.56.34.jpeg", "Prototype enclosure prepared for internal hardware."),
  createGalleryItem("WhatsApp Image 2026-02-02 at 10.56.54.jpeg", "Prototype enclosure housing."),
  createGalleryItem("WhatsApp Image 2026-02-02 at 10.58.00.jpeg", "Display module for on-device monitoring."),
  createGalleryItem("WhatsApp Image 2026-02-02 at 10.58.45.jpeg", "Antenna modules for connectivity testing."),
  createGalleryItem("WhatsApp Image 2026-02-02 at 11.00.12.jpeg", "Water level sensor."),
  createGalleryItem("WhatsApp Image 2026-02-02 at 11.02.17.jpeg", "Temperature and humidity sensors ready for integration."),
  createGalleryItem("WhatsApp Image 2026-02-02 at 11.07.54.jpeg", "Physical control buttons and switches."),
  createGalleryItem("WhatsApp Image 2026-02-02 at 11.08.22.jpeg", "Cable glands for sealed enclosures."),
  createGalleryItem("WhatsApp Image 2026-02-02 at 11.10.05.jpeg", "Control board components staged for assembly."),
  createGalleryItem("WhatsApp Image 2026-02-02 at 11.10.28.jpeg", "Custom PCB with Agriflock 360 branding."),
  createGalleryItem("WhatsApp Image 2026-02-02 at 11.12.12.jpeg", "Controller board connected during testing."),
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HomeHero />

      <HomeOverview />

      <HomeServices />

      {/*
      Work In Progress gallery is hidden until patent protection is secured.
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-block">
              <Badge className="text-sm px-4 py-1.5">Gallery</Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Work <span className="text-gradient">In Progress</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A look at our hardware builds, testing, and field-ready prototypes.
            </p>
          </div>

          <div className="relative">
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryImages.map((image) => (
                  <CarouselItem
                    key={image.src}
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="overflow-hidden border-2 border-primary/10 hover:border-primary/40 transition-colors">
                      <div className="aspect-[3/4] bg-muted">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">{image.caption}</p>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Swipe or use the arrows to explore the gallery.
          </p>
        </div>
      </section>
      */}

      <HomeImpact />

      <HomeFAQ />

      <HomeClosingCTA />
      <KnowledgeBaseChat />
    </div>
  );
};

export default Home;
