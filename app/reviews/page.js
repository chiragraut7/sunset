"use client";
import PageBanner from "./../components/PageBanner";

const reviews = [
  { name: "Amit Sharma, Mumbai", text: "The food is the highlight! Authentic Konkani flavors and very fresh fish. The pool area is perfect for kids." },
  { name: "Priya Singh, Pune", text: "Very peaceful location and just a 5 min walk to the beach. Clean rooms and very friendly staff. Highly recommended!" },
  { name: "Vaibhav Dalvi, Palghar", text: "Great place for a family picnic. The rain dance and pool are excellent. Value for money packages." }
];

export default function ReviewsPage() {
  return (
    <>
    <PageBanner 
  title="Guest Reviews" 
  subtitle="What our visitors say about us" 
  bgImage="https://images.unsplash.com/photo-1550966841-3ee5ad60d0d9?q=80&w=2000" 
/>
    <section className="py-[80px] px-[8%] text-center bg-gray-50">
      <div className="grid md:grid-cols-3 gap-[30px]">
        {reviews.map((rev, i) => (
          <div key={i} className="bg-white p-[50px] rounded-[20px] shadow-sm relative pt-[60px]">
            <i className="fas fa-quote-left absolute top-[30px] left-1/2 -translate-x-1/2 text-[40px] text-[#FF5F1F] opacity-20"></i>
            <div className="flex justify-center gap-1 mb-6 text-yellow-400">
              {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
            </div>
            <p className="italic text-gray-600 mb-6 leading-relaxed">"{rev.text}"</p>
            <div className="font-bold text-[#002147] text-sm uppercase tracking-widest">{rev.name}</div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}