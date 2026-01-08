"use client";
import PageBanner from "./../components/PageBanner";

const packages = [
  { room: "Non-AC Standard", plan: "Day Picnic", price: "990" },
  { room: "AC Deluxe", plan: "Day Picnic", price: "1,200" },
  { room: "AC Standard", plan: "Overnight (24 Hours)", price: "2,500" },
  { room: "AC Super Deluxe", plan: "Overnight (Twin Sharing)", price: "3,100" },
];

export default function TariffPage() {
  return (
    <>
     <PageBanner 
        title="Tariff & Packages" 
        subtitle="Affordable Luxury at Kelva Beach" 
        bgImage="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070" 
        />
    <section className="py-[80px] px-[8%]">
      <div className="overflow-x-auto rounded-[10px] shadow-lg mb-[50px]">
        <table className="w-full text-left border-collapse bg-white">
          <thead className="bg-[#002147] text-white">
            <tr>
              <th className="p-[20px]">Room Category</th>
              <th className="p-[20px]">Plan</th>
              <th className="p-[20px]">Price (Per Person)</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-[20px] font-semibold">{pkg.room}</td>
                <td className="p-[20px]">{pkg.plan}</td>
                <td className="p-[20px] text-[#FF5F1F] font-bold text-xl">₹{pkg.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-[30px]">
        <div className="bg-[#f8f9fa] p-[40px] rounded-[10px] border-l-4 border-[#FF5F1F]">
          <h3 className="font-serif text-[24px] mb-6 text-[#002147] flex items-center gap-3">
            <i className="fas fa-concierge-bell text-[#FF5F1F]"></i> Package Inclusions
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><i className="fas fa-check text-green-500"></i> Breakfast, Lunch & Dinner</li>
            <li className="flex items-center gap-3"><i className="fas fa-check text-green-500"></i> Access to Swimming Pool</li>
            <li className="flex items-center gap-3"><i className="fas fa-check text-green-500"></i> Rain Dance & Music</li>
          </ul>
        </div>
        <div className="bg-[#f8f9fa] p-[40px] rounded-[10px] border-l-4 border-[#002147]">
          <h3 className="font-serif text-[24px] mb-6 text-[#002147] flex items-center gap-3">
            <i className="fas fa-info-circle text-[#002147]"></i> Important Info
          </h3>
          <ul className="space-y-4">
            <li><i className="fas fa-clock mr-2"></i> Check-in: 11:00 AM</li>
            <li><i className="fas fa-clock mr-2"></i> Check-out: 10:00 AM</li>
            <li><i className="fas fa-id-card mr-2"></i> Valid ID proof required</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}