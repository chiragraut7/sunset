"use client";
import PageBanner from "./../components/PageBanner";

export default function ContactPage() {
  return (
    <>
    <PageBanner 
  title="Contact Us" 
  subtitle="Plan Your Visit to Paradise" 
  bgImage="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000" 
/>
    <div className="bg-white">

      {/* Main Content Grid */}
      <section className="py-[50px] px-[8%] grid grid-cols-1 lg:grid-cols-2 gap-[50px] bg-[#f8f9fa]">
        
        {/* Contact Information Card matching your footer style */}
        <div className="bg-[#002147] text-white p-[40px] rounded-[10px] shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-[28px] text-[#FF5F1F] mb-[30px]">Get In Touch</h3>
            
            <div className="space-y-[25px]">
              <div className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-[#FF5F1F] text-[20px] mt-1"></i>
                <div>
                  <h4 className="font-bold text-[16px]">Location</h4>
                  <p className="text-gray-300 text-[14px]">Near Shitaladevi Temple, Kelva Beach, Palghar, Maharashtra - 401401</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-phone text-[#FF5F1F] text-[20px] mt-1"></i>
                <div>
                  <h4 className="font-bold text-[16px]">Call / WhatsApp</h4>
                  <p className="text-gray-300 text-[14px]">+91 86239 60506</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-clock text-[#FF5F1F] text-[20px] mt-1"></i>
                <div>
                  <h4 className="font-bold text-[16px]">Check-in / Check-out</h4>
                  <p className="text-gray-300 text-[14px]">Check-in: 11:00 AM | Check-out: 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Placeholder/Embed */}
          <div className="mt-[40px] rounded-[10px] overflow-hidden h-[200px] bg-gray-700">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.241560378457!2d72.7235!3d19.6202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDM3JzEyLjciTiA3MsKwNDMnMjQuNiJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 opacity-80" 
                allowFullScreen={true} 
                loading="lazy">
             </iframe>
          </div>
        </div>

        {/* Inquiry Form matching your .feature-card background */}
        <div className="bg-white p-[40px] rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
          <h3 className="font-serif text-[24px] text-[#002147] mb-[25px]">Send an Inquiry</h3>
          <form className="space-y-[20px]">
            <div>
              <label className="block text-[12px] font-bold uppercase mb-2 text-gray-500">Full Name</label>
              <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-[5px] focus:outline-none focus:border-[#FF5F1F]" placeholder="Your Name" />
            </div>
            
            <div>
              <label className="block text-[12px] font-bold uppercase mb-2 text-gray-500">Phone Number</label>
              <input type="tel" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-[5px] focus:outline-none focus:border-[#FF5F1F]" placeholder="Mobile Number" />
            </div>

            <div>
              <label className="block text-[12px] font-bold uppercase mb-2 text-gray-500">Subject</label>
              <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-[5px] focus:outline-none focus:border-[#FF5F1F]">
                <option>Room Booking Inquiry</option>
                <option>Day Picnic Inquiry</option>
                <option>Group / Corporate Booking</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-[12px] font-bold uppercase mb-2 text-gray-500">Message</label>
              <textarea className="w-full p-3 bg-gray-50 border border-gray-200 rounded-[5px] focus:outline-none focus:border-[#FF5F1F] h-[120px]" placeholder="How can we help you?"></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-[#FF5F1F] text-white font-bold rounded-[5px] uppercase tracking-wider hover:bg-[#e04e18] transition-colors">
              Submit Inquiry
            </button>
          </form>
        </div>

      </section>
    </div>
    </>
  );
}