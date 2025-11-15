import React from "react";

interface Member {
  name: string;
  role: string;
  photo: string;
}

const council = {
  ATPAS: {
    name: "Abhinav Anand",
    role: "Alumni Training and Placement Secretary (ATPAS)",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  JointATPAS: [
    { name: "Nitin Kumar", role: "Joint Secretary", photo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Ranu Raj", role: "Joint Secretary", photo: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "Abhishek Arya", role: "Joint Secretary", photo: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "Akshat Seth", role: "Joint Secretary", photo: "https://randomuser.me/api/portraits/women/5.jpg" },
  ],
  ChiefManagers: [
    { name: "Ritik Sharma", role: "Chief Manager", photo: "https://randomuser.me/api/portraits/men/6.jpg" },
    { name: "Aman Saran", role: "Chief Manager", photo: "https://randomuser.me/api/portraits/women/7.jpg" },
  ],
};

const MemberCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="bg-white w-full rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition">
    <img
      src={member.photo}
      alt={member.name}
      className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 mb-3"
    />
    <h3 className="font-semibold text-gray-800">{member.name}</h3>
    <p className="text-gray-500 text-sm">{member.role}</p>
  </div>
);

const CouncilPage: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-12 text-black">Training & Placement Council</h1>

        {/* ATPAS */}
        <div className="flex justify-center mb-12">
          <MemberCard member={council.ATPAS} />
        </div>

        {/* Joint ATPAS */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Joint Secretary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {council.JointATPAS.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Chief Managers */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Chief Managers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {council.ChiefManagers.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Council Members */}
      </div>
    </section>
  );
};

export default CouncilPage;
