import React from 'react';

const Assessments = () => {
  const assessmentsData = [
    {
      title: "HTML & CSS Assessment",
      date: "Date",
      score: "85%",
      notes: "Above average.",
    },
    {
      title: "JavaScript Assessment",
      date: "Date",
      score: "90%",
      notes: "Excellent understanding of basics.",
    },
    {
      title: "React Native",
      date: "Date",
      score: "N/A",
      notes: "Completed an external course.",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              Describe your growth, strengths, and areas for improvement during the program.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessments;