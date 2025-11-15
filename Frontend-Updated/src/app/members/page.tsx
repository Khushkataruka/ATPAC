"use client";
import React from "react";

type Member = {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
};

const MemberCard: React.FC<Member> = ({ name, role, imageUrl, description }) => {
  return (
    <div className="group relative h-full">
      <div className="rounded-2xl h-full bg-white/80 dark:bg-gray-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-transform duration-300 ease-out hover:-translate-y-1">
        <div className="flex h-full flex-col items-center text-center p-6">
          <img
            src={imageUrl}
            alt={`${name} avatar`}
            className="h-24 w-24 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-800 mb-4 transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; members: Member[] }> = ({ title, members }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {members.map((m, idx) => (
          <div key={`${title}-${idx}`} className="h-full w-full sm:w-1/2 lg:w-1/4 max-w-sm">
            <MemberCard {...m} />
          </div>
        ))}
      </div>
    </section>
  );
};

const MembersPage: React.FC = () => {
  // Paste original photo URLs per member on the `imageUrl` lines below.
  // Each item includes a placeholder that you can replace.

  const secretary: Member[] = [
    { name: "Abhinav anand", role: "Secretary", imageUrl: "https://picsum.photos/200?random=1", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  const chiefAdvisors: Member[] = [
    { name: "Name Here", role: "Chief Advisor", imageUrl: "https://picsum.photos/200?random=2", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Advisor", imageUrl: "https://picsum.photos/200?random=3", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Advisor", imageUrl: "https://picsum.photos/200?random=4", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Advisor", imageUrl: "https://picsum.photos/200?random=5", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Advisor", imageUrl: "https://picsum.photos/200?random=6", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Advisor", imageUrl: "https://picsum.photos/200?random=7", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  const techManagers: Member[] = [
    { name: "Divyansh Kumar", role: "Tech Manager", imageUrl: "/dk.jpeg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Harshit Maurya ", role: "Tech Manager", imageUrl: "/harshit.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Khush kataruka", role: "Tech Manager", imageUrl: "https://picsum.photos/200?random=10", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Deepak sai challa", role: "Tech Manager", imageUrl: "/deepak.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  const jointSecretaries: Member[] = [
    { name: "Name Here", role: "Joint Secretary", imageUrl: "https://picsum.photos/200?random=12", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Joint Secretary", imageUrl: "https://picsum.photos/200?random=13", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Joint Secretary", imageUrl: "https://picsum.photos/200?random=14", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Joint Secretary", imageUrl: "https://picsum.photos/200?random=15", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  const chiefManagers: Member[] = [
    { name: "Name Here", role: "Chief Manager", imageUrl: "https://picsum.photos/200?random=16", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Manager", imageUrl: "https://picsum.photos/200?random=17", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Manager", imageUrl: "https://picsum.photos/200?random=18", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Manager", imageUrl: "https://picsum.photos/200?random=19", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Manager", imageUrl: "https://picsum.photos/200?random=20", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Manager", imageUrl: "https://picsum.photos/200?random=21", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Manager", imageUrl: "https://picsum.photos/200?random=22", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Manager", imageUrl: "https://picsum.photos/200?random=23", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Manager", imageUrl: "https://picsum.photos/200?random=24", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Chief Manager", imageUrl: "https://picsum.photos/200?random=25", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  const pgAffairsManagers: Member[] = [
    { name: "Name Here", role: "PG Affairs Manager", imageUrl: "https://picsum.photos/200?random=26", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "PG Affairs Manager", imageUrl: "https://picsum.photos/200?random=27", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "PG Affairs Manager", imageUrl: "https://picsum.photos/200?random=28", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "PG Affairs Manager", imageUrl: "https://picsum.photos/200?random=29", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "PG Affairs Manager", imageUrl: "https://picsum.photos/200?random=30", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "PG Affairs Manager", imageUrl: "https://picsum.photos/200?random=31", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  const corporateLeads: Member[] = [
    { name: "Name Here", role: "Corporate Lead (Her)", imageUrl: "https://picsum.photos/200?random=32", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Name Here", role: "Corporate Lead (Her)", imageUrl: "https://picsum.photos/200?random=33", /* Replace with real photo URL */ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-10">
          Meet the ATPAC Team
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Our members work tirelessly to bridge students with opportunities, organize events,
          and enhance career initiatives on campus.
        </p>
      </header>

      {/* Instagram Posts Section removed for a cleaner, more focused team page */}
      {/* Members Sections */}
      <div className="mt-16">
        <Section title="Secretary" members={secretary} />
        <Section title="Chief Advisors" members={chiefAdvisors} />
        <Section title="Tech Managers" members={techManagers} />
        <Section title="Joint Secretaries" members={jointSecretaries} />
        <Section title="Chief Managers" members={chiefManagers} />
        <Section title="PG Affairs Managers" members={pgAffairsManagers} />
        <Section title="Corporate Leads" members={corporateLeads} />
      </div>
    </section>
  );
};

export default MembersPage;
