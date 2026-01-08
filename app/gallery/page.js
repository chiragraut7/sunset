"use client";
import PageBanner from "./../components/PageBanner";

const images = [
  { title: "Resort Pool", size: "wide", src: "https://images.unsplash.com/photo-1540541338287-41700207dee6" },
  { title: "AC Deluxe Room", size: "tall", src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39" },
  { title: "Kelva Beach", size: "small", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { title: "Authentic Dining", size: "small", src: "https://images.unsplash.com/photo-1550966841-3ee5ad60d0d9" }
];

export default function GalleryPage() {
  return (
    <>
    <PageBanner 
  title="Resort Gallery" 
  subtitle="A Visual Tour of SunSet Residency" 
  bgImage="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000" 
/>
    <section className="py-[80px] px-[8%] bg-white">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] auto-rows-[250px]">
        {images.map((img, i) => (
          <div key={i} className={`relative overflow-hidden group rounded-[10px] 
            ${img.size === 'wide' ? 'md:col-span-2' : ''} 
            ${img.size === 'tall' ? 'md:row-span-2' : ''}`}>
            <img src={img.src} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" alt={img.title} />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <h4 className="text-white font-serif text-xl border-b-2 border-[#FF5F1F] pb-1">{img.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}