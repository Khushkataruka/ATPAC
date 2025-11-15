import React from "react";

const roadmaps = [
  {
    sector: "Information Technology (IT)",
    description: "Guidelines and roadmap for software, product, and IT services placements.",
    driveLink: "https://drive.google.com/your-it-roadmap-link",
  },
  {
    sector: "Core Engineering",
    description: "Roadmap for placements in mechanical, electrical, civil, chemical, and related fields.",
    driveLink: "https://drive.google.com/your-core-roadmap-link",
  },
  {
    sector: "Consulting",
    description: "Placement preparation roadmap for consulting and business analyst roles.",
    driveLink: "https://drive.google.com/your-consulting-roadmap-link",
  },
  {
    sector: "Finance & Analytics",
    description: "Detailed roadmap for finance, banking, investment, and analytics roles.",
    driveLink: "https://drive.google.com/your-finance-roadmap-link",
  },
  {
    sector: "Research & Higher Studies",
    description: "Step-by-step roadmap for research internships, PhD, and higher education pathways.",
    driveLink: "https://drive.google.com/your-research-roadmap-link",
  },
];

const PlacementRoadmap = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Placement Roadmaps
        </h2>

        {/* Grid layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roadmaps.map((roadmap, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {roadmap.sector}
                </h3>
                <p className="text-gray-600 mb-4">{roadmap.description}</p>
              </div>
              <a
                href={roadmap.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline mt-auto"
              >
                📂 View Roadmap
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementRoadmap;
