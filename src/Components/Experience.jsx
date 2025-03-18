import React from "react";

const experiences = [

  {
    id: 1,
    role: "Frontend Developer",
    company: "TechCorp",
    duration: "Jan 2025 - Present",
    description: "Developed interactive UI components using React.js and Tailwind CSS.",
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "Startup XYZ",
    duration: "Jun 2023 - Dec 2024",
    description: "Built REST APIs and optimized database queries for better performance.",
  },
  {
    id: 3,
    role: "React - Front End Intern",
    company: "Startup ABC",
    duration: "Jun 2021 - Dec 2022",
    description: "Developed interactive UI components using React.js and Tailwind CSS.",
  }
];

const Experience = () => {

  return (

    <div className="p-6">

      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div className="space-y-6">

        {experiences.map((exp) => (

          <div key={exp.id} className="bg-white shadow-lg p-4 rounded-lg border-l-4 border-blue-500">

            <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
            
            <p className="text-gray-600">{exp.duration}</p>

            <p className="mt-2">{exp.description}</p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Experience;
