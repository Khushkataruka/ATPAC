import React from "react";

const resources = [
  {
    title: "Resume Template",
    description: "Download a professional resume template to prepare for placements.",
    link: "https://example.com/resume-template.pdf",
  },
  {
    title: "Aptitude Preparation",
    description: "Practice aptitude questions and mock tests for placement exams.",
    link: "https://example.com/aptitude.pdf",
  },
  {
    title: "Interview Preparation Guide",
    description: "Tips and tricks for technical and HR interviews.",
    link: "https://example.com/interview-guide.pdf",
  },
  {
    title: "Mock Projects & Case Studies",
    description: "Sample projects and case studies to showcase your skills.",
    link: "https://example.com/case-studies.pdf",
  },
];

const Resources: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Student Resources
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
              </div>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline mt-auto"
              >
                📥 Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
