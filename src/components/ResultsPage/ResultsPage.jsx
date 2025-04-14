import React from "react";

import telegram from "../../assets/telegram.svg";

const ResultsPage = ({ answers }) => {
  if (!answers || answers.length === 0) {
    return (
      <p className="text-center text-gray-700">
        No results available. Please complete the quiz.
      </p>
    );
  }

  const userLevel = answers[0]?.title || "Beginner";

  return (
    <div className="bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Your English Express Plan: {userLevel} to Fluent in 30 Days!
      </h1>

      <div className="max-w-lg w-full flex flex-col gap-6">
        {/* Learning Plan */}
        <div className="bg-[#000080] text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Learning Plan 📘</h2>
          <p>Tailored courses based on your quiz results.</p>
        </div>

        {/* Practice Methods */}
        <div className="bg-teal-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Practice methods 🎯</h2>
          <p>exercises & real life conversations</p>
        </div>

        {/* Fast-Track */}
        <div className="bg-gray-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">
            Practical vocabulary and grammar 🚀
          </h2>
          <p>Вesigned for different real-life situations.</p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-8 bg-teal-500 text-white font-bold text-lg py-4 px-6 rounded-full hover:bg-teal-600 transition active:scale-95">
        Start Learning & Earning Now!
      </button>

      {/* Telegram Info */}
      <div className="mt-6 flex flex-col items-center">
        <img src={telegram} className="w-12 h-12 mb-2" alt="Telegram Logo" />
        <p className="text-gray-700 text-center">
          You need Telegram installed to enjoy our app
        </p>
      </div>
    </div>
  );
};

export default ResultsPage;
