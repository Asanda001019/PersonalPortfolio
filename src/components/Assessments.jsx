import React from 'react';

const Assessments = () => {
  const assessmentsData = [
    {
      title: "React.js & CSS Assessment",
      date: "Date",
      score: "85%",
      notes: "Above average.",
    },
    {
      title: "React.js & Redux toolkit",
      date: "Date",
      score: "85%",
      notes: "Above average.",
    },
    {
      title: "Mongodb",
      date: "Date",
      score: "90%",
      notes: "Excellent understanding of basics.",
    },
    {
      title: "Node.js",
      date: "Date",
      score: "85%",
      notes: "Above average.",
    },
    {
      title: "React Native",
      date: "Date",
      score: "N/A",
      notes: "Above average.",
    },
    {
      title: "Figma",
      date: "Date",
      score: "85%",
      notes: "Above average.",
    },
  ];

  return (
    <section id='assessments' className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


      <div className="mb-14 text-center">
     <span className="py-1 px-4 bg-indigo-100 rounded-full text-md font-medium text-indigo-600 text-center">
         Tasks
       </span>
       </div>

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900 py-5">Assessments</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Assessment</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Score</th>
                <th className="py-2 px-4 border-b">Notes</th>
              </tr>
            </thead>
            <tbody>
              {assessmentsData.map((assessment, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{assessment.title}</td>
                  <td className="py-2 px-4 border-b">{assessment.date}</td>
                  <td className="py-2 px-4 border-b">{assessment.score}</td>
                  <td className="py-2 px-4 border-b">{assessment.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Feedback and Reflections</h3>
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800">Facilitator Feedback:</h4>
            <p className="text-gray-600">Insert feedback comments from CodeTribe facilitators.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Self-Reflection:</h4>
            <p className="text-gray-600">
            I quickly adapted to new technologies and frameworks, 
            <br></br>which allowed me to keep pace with the fast-moving curriculum. 
            <br></br>This adaptability also helped me embrace feedback and make necessary adjustments to my work. 
            <br></br>I am grateful for the opportunity to learn and grow as a developer, and I am excited to continue my journey in the tech industry.


            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessments;