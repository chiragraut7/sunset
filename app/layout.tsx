import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

// Configure fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat" 
});

export const metadata: Metadata = {
  title: "SunSet Residency | Best Resort at Kelva Beach, Palghar",
  description: "Experience luxury stay, authentic food, and a private pool at SunSet Residency, just 5 minutes from Kelva Beach.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${montserrat.variable}`}>
      <head>
        {/* Required for FontAwesome icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body className="font-sans antialiased">
        {/* WhatsApp Float - Fixed Positioning */}
        <a 
          href="https://wa.me/918623960506" 
          className="fixed bottom-[30px] right-[30px] bg-[#25d366] text-white w-[60px] h-[60px] rounded-full flex justify-center items-center text-[30px] shadow-[2px_2px_10px_rgba(0,0,0,0.2)] z-[1000] transition-transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}