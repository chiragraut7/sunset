"use client";

interface BannerProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

export default function PageBanner({ title, bgImage, subtitle }: BannerProps) {
  return (
    <div 
      className="relative h-[30vh] md:h-[40vh] flex flex-col justify-center items-center text-center text-white px-5 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${bgImage}')`
      }}
    >
      <h1 className="font-serif text-[35px] md:text-[50px] font-bold leading-tight mb-3">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[16px] md:text-[18px] max-w-[700px] opacity-90 font-medium tracking-wide uppercase">
          {subtitle}
        </p>
      )}
      <div className="absolute bottom-0 w-[100px] h-[4px] bg-[#FF5F1F]"></div>
    </div>
  );
}