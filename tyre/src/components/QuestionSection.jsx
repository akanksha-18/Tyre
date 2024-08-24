import React from 'react';
import "./QuestionSection.css"
import question from "../assets/question.png"

const QuestionSection = () => {
  return (
    <div className="mt-6 bg-yellow-100 rounded-md p-6">
      <div className="flex items-center justify-between">
        <div className="flex-grow pr-4">
          <h2 className="text-xl font-bold text-gray-800">Have a question about Tyres?</h2>
          <p className="text-gray-600 mt-1">Get an answer in 24 hours from our experts.</p>
          <div className="mt-4 relative">
          <input
              type="text"
              placeholder="Ask or search your question"
              className="w-full p-3 pr-10 rounded-full border border-gray-300 
                         shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 
                         focus:border-transparent bg-white
                         glossy-input"
            />
            <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={question} alt="Question mark" className="w-16 h-16 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;