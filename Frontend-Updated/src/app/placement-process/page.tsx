import React from "react";
import { Briefcase, FileText, Users, CheckCircle, ClipboardList } from "lucide-react";
import PlacementRoadmap from "@/components/PlacementRoadman";
import Resources from "@/components/Resources";
import FAQ from "@/components/FaqRoadmap";

const steps = [
  {
    id: 1,
    title: "STEP 1: Registration",
    description: "Students register for the placement drive through the portal by submitting their details and resumes.",
    icon: FileText,
  },
  {
    id: 2,
    title: "STEP 2: Pre-Placement Talk",
    description: "Companies conduct sessions to provide insights about job roles, growth opportunities, and selection process.",
    icon: Users,
  },
  {
    id: 3,
    title: "STEP 3: Aptitude & Technical Tests",
    description: "Students appear for online/offline assessments testing aptitude, coding, and domain knowledge.",
    icon: ClipboardList,
  },
  {
    id: 4,
    title: "STEP 4: Interviews",
    description: "Shortlisted students go through technical and HR interview rounds conducted by recruiters.",
    icon: Briefcase,
  },
  {
    id: 5,
    title: "STEP 5: Final Selection",
    description: "Offer letters are issued to selected candidates and placement results are shared.",
    icon: CheckCircle,
  },
];

// export default function PlacementProcess() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Heading */}
//         <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12 mt-10 ">
//           Placement Process
//         </h2>

//         {/* Timeline / Grid */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className="flex items-start gap-5 bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
//             >
//               {/* Icon */}
//               <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full">
//                 <step.icon className="w-8 h-8 text-blue-600" />
//               </div>

//               {/* Content */}
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-600 mt-2">{step.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Note */}
//         <p className="text-center text-gray-500 mt-12 text-sm">
//           The Training & Placement Cell ensures a smooth and transparent process for both students and recruiters.
//         </p>
//       </div>
//       <PlacementRoadmap />
//       <Resources />
//       <FAQ />
//     </section>
//   );
// }
export default function PlacementProcess() {
  return(
    <h1 className="min-h-screen text-black flex justify-center items-center text-9xl">
      Data coming soon...
    </h1>
  )
}
