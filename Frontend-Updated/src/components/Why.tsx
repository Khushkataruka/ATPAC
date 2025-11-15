import Image from "next/image";

const features = [
  {
    title: "Academics",
    description:
      "Providing a rigorous and world-class academic experience with the help of distinguished faculty, amazing peer groups and carefully designed coursework.",
    icon: "/logo.png",
  },
  {
    title: "Ranking",
    description:
      "SVNIT is ranked among the top engineering colleges in India by the National Institutional Ranking Framework (NIRF).",
    icon: "/nirf.png",
  },
  {
    title: "Alumni Network",
    description:
      "Our alumni have made their mark globally, occupying leading positions in corporate, academia & the government.",
    icon: "/aalogo.png",
  },
  {
    title: "Selection Process",
    description:
      "SVNIT is home to the brightest individuals in India who are accepted through rigorous entrance procedures like JEE and GATE.",
    icon: "/jee.png",
  },
  {
    title: "Research and Development",
    description:
      "Access to the latest and pioneering advances in technology with the aim of exposing students to innovation.",
    icon: "/logo.png",
  },
  {
    title: "All-Round Development",
    description:
      "Promoting overall development of students through cultural, sports activities, fests, competitions and clubs.",
    icon: "/logo.png",
  },
];

export default function Why() {
  return (
    <section className="why-section">
      {/* Header */}
      <div className="why-header">
        <h2 className="why-title">Why Choose SVNIT?</h2>
        <p className="why-subtitle">
          Discover what makes us one of the top engineering institutes in India.
        </p>
      </div>

      {/* Grid */}
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.title} className="feature-card">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={80}
              height={80}
              className="feature-icon"
            />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
