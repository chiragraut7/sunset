"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-[10px] px-[8%] bg-white sticky top-0 z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
      <Link href="/" className="flex items-center">
        <Image 
          src="/images/logo.png"    // Path starts from the 'public' folder
          alt="SunSet Residency Logo"
          width={180}                // Adjust width to match your design
          height={60}                // Adjust height to match your design
          priority                   // Ensures the logo loads instantly
          className="object-contain" // Keeps the logo from stretching
        />
      </Link>

      <ul className="hidden md:flex list-none m-0 p-0">
        <li className="ml-[25px]">
          <Link href="/" className="no-underline text-[#002147] font-semibold text-[14px] hover:text-[#FF5F1F] transition-colors">Home</Link>
        </li>
        <li className="ml-[25px]">
          <Link href="/gallery" className="no-underline text-[#002147] font-semibold text-[14px] hover:text-[#FF5F1F] transition-colors">Gallery</Link>
        </li>
        <li className="ml-[25px]">
          <Link href="/tariff" className="no-underline text-[#002147] font-semibold text-[14px] hover:text-[#FF5F1F] transition-colors">Tariff</Link>
        </li>
        <li className="ml-[25px]">
          <Link href="/sightseeing" className="no-underline text-[#002147] font-semibold text-[14px] hover:text-[#FF5F1F] transition-colors">Sightseen</Link>
        </li>
        <li className="ml-[25px]">
          <Link href="/reviews" className="no-underline text-[#002147] font-semibold text-[14px] hover:text-[#FF5F1F] transition-colors">Reviews</Link>
        </li>
        <li className="ml-[25px]">
          <Link href="/contact" className="no-underline text-[#002147] font-semibold text-[14px] hover:text-[#FF5F1F] transition-colors">Contact</Link>
        </li>
      </ul>

      <Link 
        href="/contact" 
        className="bg-[#FF5F1F] text-white py-[10px] px-[20px] no-underline rounded-[5px] font-semibold text-[12px] hover:bg-[#e04e18] transition-all"
      >
        BOOK NOW
      </Link>
    </nav>
  );
}