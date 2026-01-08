import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#002147] text-white py-[50px] px-[8%] pb-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mb-[40px]">
        
        {/* Section 1: Brand */}
        <div className="footer-section">
          <h3 className="mb-[20px] text-[#FF5F1F] font-serif text-[24px] font-bold">SunSet Residency</h3>
          <p className="text-[14px] leading-relaxed opacity-90">
            Your home away from home at Kelva Beach. Relaxation guaranteed.
          </p>
        </div>

        {/* Section 2: Contact */}
        <div className="footer-section">
          <h3 className="mb-[20px] text-[#FF5F1F] font-serif text-[24px] font-bold">Contact Info</h3>
          <p className="text-[14px] mb-2">
            <i className="fas fa-map-marker-alt mr-2 text-[#FF5F1F]"></i> 
            Near Shitaladevi Temple, Kelva, Palghar
          </p>
          <p className="text-[14px]">
            <i className="fas fa-phone mr-2 text-[#FF5F1F]"></i> 
            +91 86239 60506
          </p>
        </div>

        {/* Section 3: Links */}
        <div className="footer-section">
          <h3 className="mb-[20px] text-[#FF5F1F] font-serif text-[24px] font-bold">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link href="/contact" className="text-white no-underline text-[14px] hover:text-[#FF5F1F]">Directions</Link>
            <Link href="/tariff" className="text-white no-underline text-[14px] hover:text-[#FF5F1F]">Room Rates</Link>
          </div>
        </div>
      </div>

      <hr className="border-0 border-t border-[#333] mb-[20px]" />
      
      <p className="text-center text-[12px] opacity-80">
        &copy; {currentYear} SunSet Residency. All Rights Reserved.
      </p>
    </footer>
  );
}