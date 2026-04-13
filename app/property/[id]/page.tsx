import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { properties } from "@/data/properties";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScheduleVisitForm from "@/components/property/ScheduleVisitForm";
import { 
  MapPin, 
  Check, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Image as ImageIcon, 
  History, 
  Flag, 
  Star, 
  Shield, 
  Droplet,
  Zap,
  Briefcase,
  Map,
  Plane,
  Train,
  School,
  Building,
  Dumbbell
} from "lucide-react";
export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}
interface Props {
  params: { id: string };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) {
    return {
      title: "Property Not Found",
    };
  }
  return {
    title: `${property.title} | ${property.city} | EleganceEstate`,
    description: property.description,
    keywords: [`${property.category} in ${property.city}`, property.location, "Luxury Home India"],
    openGraph: {
      title: property.title,
      description: property.description,
      images: [property.image],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: property.title,
      description: property.description,
      images: [property.image],
    },
  };
}
const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  const icons: Record<string, typeof ImageIcon> = {
    "pi-image": ImageIcon,
    "pi-lock": ShieldCheck,
    "pi-history": History,
    "pi-flag": Flag,
    "pi-star": Star,
    "pi-check": Check,
    "pi-shield": Shield,
    "pi-bolt": Zap,
    "pi-map-marker": MapPin,
    "pi-briefcase": Briefcase,
    "pi-map": Map,
    "pi-plane": Plane,
    "pi-train": Train,
    "pi-building": Building,
    "pi-school": School,
    "pi-dumbbell": Dumbbell,
    "pi-droplet": Droplet,
  };
  const IconComponent = icons[name] || Check;
  return <IconComponent className={className || "w-4 h-4"} />;
};
export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) {
    notFound();
  }
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    'name': property.title,
    'description': property.description,
    'url': `https://elegance-estate.vercel.app/property/${property.id}`,
    'image': property.image,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': property.city,
      'streetAddress': property.location,
      'addressCountry': 'IN'
    },
    'offers': {
      '@type': 'Offer',
      'price': property.price,
      'priceCurrency': 'INR'
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-architect-pattern font-outfit">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-grow">
        <section className="relative h-[400px] w-full overflow-hidden bg-zinc-100">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
          <div className="absolute bottom-12 left-0 w-full px-6">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-lg">
                  {property.category}
                </span>
                <span className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider border border-white/20">
                  {property.city}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                {property.title}
              </h1>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400 w-5 h-5" />
                <p className="text-lg md:text-xl text-white/80 font-medium">
                  {property.location}, {property.city}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-12 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                  <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider block mb-2">Price</span>
                  <p className="text-2xl font-bold text-blue-600">
                    ₹{(property.price / 10000000).toFixed(2)} Cr
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                  <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider block mb-2">Configuration</span>
                  <p className="text-2xl font-bold text-zinc-900">{property.rooms} BHK</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                  <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider block mb-2">Bathrooms</span>
                  <p className="text-2xl font-bold text-zinc-900">{property.bathrooms}</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                  <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider block mb-2">Built-up Area</span>
                  <p className="text-2xl font-bold text-zinc-900">{property.area} sqft</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
                <h2 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                  Property Overview
                </h2>
                <p className="text-lg leading-relaxed text-zinc-600 font-normal italic mb-8">
                  "{property.description}"
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="relative h-64 w-full rounded-lg overflow-hidden border border-zinc-100 shadow-sm group">
                      <Image src={property.image} alt="Gallery" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                   </div>
                   <div className="relative h-64 w-full rounded-lg overflow-hidden border border-zinc-100 shadow-sm group">
                      <Image src={property.image} alt="Gallery" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                   </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
                <h2 className="text-xl font-bold text-zinc-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100 shadow-sm">
                      <IconMapper name={feature.icon} className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-semibold text-zinc-700">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
                <h2 className="text-xl font-bold text-zinc-900 mb-8">Premium Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex flex-col items-start gap-3">
                      <div className="h-10 w-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-zinc-600 uppercase tracking-tight">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
                <h2 className="text-xl font-bold text-zinc-900 mb-8">Nearby Connectivity</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.nearby.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 bg-zinc-50/50">
                      <div className="flex items-center gap-3">
                        <IconMapper name={item.icon} className="w-4 h-4 text-zinc-400" />
                        <span className="text-sm font-bold text-zinc-800">{item.place}</span>
                      </div>
                      <span className="text-[10px] font-bold text-blue-600 bg-white border border-blue-100 px-2.5 py-1 rounded-md">
                        {item.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-2 rounded-2xl border border-zinc-200 shadow-xl overflow-hidden">
                <div className="p-6">
                   <h2 className="text-xl font-bold text-zinc-900 mb-1 flex items-center gap-2">
                     Location Insight
                   </h2>
                   <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6">Explore the neighborhood of {property.city}</p>
                </div>
                <div className="relative h-[400px] w-full bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy" 
                    allowFullScreen 
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(property.location + ', ' + property.city)}&output=embed`}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 space-y-8">
              <ScheduleVisitForm />
              <div className="bg-zinc-900 p-8 rounded-xl text-white shadow-xl relative overflow-hidden">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                   Contact Specialist
                </h3>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-16 w-16 rounded-xl overflow-hidden relative border border-white/10">
                    <Image 
                      src={property.contact.agentImage} 
                      alt={property.contact.agentName} 
                      fill 
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base font-bold">{property.contact.agentName}</p>
                    <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Listing Partner</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <a href={`tel:${property.contact.agentPhone}`} className="flex items-center justify-center gap-2 w-full py-4 rounded-lg bg-white/10 text-white font-bold text-[11px] uppercase tracking-widest border border-white/5 hover:bg-white/20 transition-all duration-300">
                    <Phone className="w-3.5 h-3.5" />
                    Call Now
                  </a>
                  <a href={`mailto:${property.contact.agentEmail}`} className="flex items-center justify-center gap-2 w-full py-4 rounded-lg bg-white/10 text-white font-bold text-[11px] uppercase tracking-widest border border-white/5 hover:bg-white/20 transition-all duration-300">
                    <Mail className="w-3.5 h-3.5" />
                    Email Agent
                  </a>
                </div>
                <p className="mt-8 text-[9px] text-zinc-500 uppercase tracking-widest font-bold text-center">
                   Verified By Elegance Estate Team
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
