"use client";
import PageBanner from "./../components/PageBanner";

const sights = [
  {
    title: "Kelva Beach",
    desc: "A vast 7km stretch of clean sand and Suru trees. Enjoy horse-cart rides, camel rides, and the famous 'black sand' experience.",
    badge: "Must Visit",
    dist: "0.4 km",
    img: "https://images.unsplash.com/photo-1711189765300-50d0bd3a2e00?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
 {
    title: "Shitladevi Temple",
    desc: "An ancient, highly revered temple over 300 years old. Restored by Devi Ahilyabai Holkar, it is a spiritual heart of Kelva.",
    badge: "Spiritual",
    dist: "0.2 km",
    img: "https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Kelva Pankot (Sea Fort)",
    desc: "A unique fort surrounded by water on all sides. It offers enchanting views during high tide and is accessible by boat.",
    badge: "Adventure",
    dist: "1.0 km",
    img: "https://images.unsplash.com/photo-1711189764038-87ba4ca9def3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Kelva Dam & Lake",
    desc: "A calm freshwater spot that becomes a lush green paradise during monsoons. Perfect for bird watching and photography.",
    badge: "Nature",
    dist: "3.0 km",
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  },
  {
    title: "Shirgaon Fort",
    desc: "A majestic fort once won by Marathas under Chimaji Appa. It features a rare multi-branched palm tree and scenic ocean views.",
    badge: "Historic",
    dist: "7.0 km",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
  },
  {
    title: "Ashapuri Devi Temple",
    desc: "Built on a rock in the sea at Edwan. Accessible only during low tide, offering a unique spiritual adventure.",
    badge: "Unique",
    dist: "11.0 km",
    img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3"
  }
];

export default function SightseeingPage() {
  return (
    <>
      <PageBanner 
    title="Explore Kelva" 
    subtitle="From ancient Portuguese forts to hidden island temples, discover the rich heritage 
          of the Konkan coast just minutes from our resort." 
    bgImage="https://images.unsplash.com/photo-1711189765300-50d0bd3a2e00?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  />
    <section className="py-[80px] px-[8%] bg-white">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px]">
        {sights.map((sight, i) => (
          <div key={i} className="bg-white rounded-[15px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.08)] hover:-translate-y-[10px] transition-all duration-300 group border border-gray-100">
            <div className="relative h-[240px] overflow-hidden">
              <span className="absolute top-4 left-4 bg-[#FF5F1F] text-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-full z-10 shadow-md">
                {sight.badge}
              </span>
              <img 
                src={sight.img} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={sight.title} 
              />
            </div>
            <div className="p-[30px]">
              <h3 className="font-serif text-[24px] mb-3 text-[#002147] font-bold">{sight.title}</h3>
              <p className="text-gray-500 text-[15px] mb-6 leading-relaxed h-[75px] overflow-hidden">
                {sight.desc}
              </p>
              <div className="flex justify-between items-center text-sm border-t border-gray-50 pt-5">
                <span className="text-[#FF5F1F] font-bold flex items-center gap-2">
                  <i className="fas fa-location-arrow"></i> Travel Distance
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded text-[#002147] font-semibold">{sight.dist}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}