import React from "react";
import Marquee from "react-fast-marquee"; // install: npm install react-fast-marquee

// import your recruiter logo
const Recruiters = () => {
  return (
    <section className="bg-white py-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        PROUD RECRUITERS
      </h2>

      {/* Scrolling Logo Marquee */}
      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        <div className="flex gap-16">
          <img src="/companies/apple.png" alt="VS" className="h-16 object-contain" />
          <img src="/companies/futureFirst.png" alt="Unilever" className="h-16 object-contain" />
          <img src="/companies/DEshaw.png" alt="Yahoo" className="h-16 object-contain" />
          <img src="/companies/Natwest.png" alt="InMobi" className="h-16 object-contain" />
          <img src="/companies/GEhealthcare.png" alt="ISRO" className="h-16 object-contain" />
          <img src="/companies/samsung.png" alt="Samsung" className="h-16 object-contain" />
          <img src="/companies/microsoft.png" alt="Samsung" className="h-16 object-contain" />
        </div>
      </Marquee>
    </section>
  );
};

export default Recruiters;
