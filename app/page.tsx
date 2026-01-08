"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <a 
        href="#" 
        className="fixed bottom-[30px] right-[30px] bg-[#25d366] text-white w-[60px] h-[60px] rounded-full flex justify-center items-center text-[30px] shadow-[2px_2px_10px_rgba(0,0,0,0.2)] z-[1000] transition-transform hover:scale-110"
        
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Hero Section */}
      <header 
        className="relative h-[80vh] flex flex-col justify-center items-center text-center text-white px-5 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/banner_new.png')`
        }}
      >
        <h1 className="font-serif text-[40px] md:text-[60px] leading-tight mb-5 font-bold">
          Escape to Serenity
        </h1>
        <p className="text-[18px] mb-[30px] max-w-[600px] leading-relaxed">
          Your perfect weekend getaway at Kelva Beach. Experience authentic hospitality, 
          delicious Konkani cuisine, and breathtaking sunsets.
        </p>
        <Link href="/tariff" className="bg-[#FF5F1F] text-white py-[15px] px-[35px] rounded-[5px] font-semibold transition-all hover:bg-[#e04e18] hover:-translate-y-0.5 shadow-md">
          View Packages
        </Link>
      </header>

      {/* Welcome Section */}
      <section className="py-[80px] px-[8%] md:px-[15%] text-center">
        <h2 className="font-serif text-[36px] mb-5 text-[#002147] font-bold">
          Experience SunSet Residency
        </h2>
        <p className="text-[16px] leading-[1.6] text-[#1a1a1a]">
          Located just a stone's throw away from the pristine Kelva Beach, SunSet Residency 
          offers a peaceful haven for families, couples, and groups. With lush greenery, 
          a sparkling swimming pool, and cozy rooms, we make your holidays unforgettable.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-[#f8f9fa] py-[50px] px-[8%] grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {/* Luxury Pool */}
        <div className="bg-white p-[40px] rounded-[10px] text-center transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] group">
          <i className="fas fa-swimming-pool text-[40px] text-[#FF5F1F] mb-5 block"></i>
          <h3 className="font-serif text-[24px] font-bold mb-3 text-[#1a1a1a]">Luxury Pool</h3>
          <p className="text-[#1a1a1a] opacity-80">Clean and well-maintained pool with a separate section for kids.</p>
        </div>

        {/* Authentic Food */}
        <div className="bg-white p-[40px] rounded-[10px] text-center transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] group">
          <i className="fas fa-utensils text-[40px] text-[#FF5F1F] mb-5 block"></i>
          <h3 className="font-serif text-[24px] font-bold mb-3 text-[#1a1a1a]">Authentic Food</h3>
          <p className="text-[#1a1a1a] opacity-80">Delicious Veg and Non-Veg Thalis prepared with local spices.</p>
        </div>

        {/* Beach Access */}
        <div className="bg-white p-[40px] rounded-[10px] text-center transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] group">
          <i className="fas fa-umbrella-beach text-[40px] text-[#FF5F1F] mb-5 block"></i>
          <h3 className="font-serif text-[24px] font-bold mb-3 text-[#1a1a1a]">Beach Access</h3>
          <p className="text-[#1a1a1a] opacity-80">Only a 5-minute walk to the beautiful and quiet Kelva Beach.</p>
        </div>
      </section>
    </div>
  );
}