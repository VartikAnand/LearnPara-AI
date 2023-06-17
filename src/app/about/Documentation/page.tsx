// pages/documentation.tsx

import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Documentation = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">LearnPara AI - Documentation</h1>

        <section>
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p>
            Welcome to LearnPara AI, an AI-powered platform to help you learn any subject or topic. Whether you're interested in Java, Python, C#, or any other topic, our intelligent system will generate the best topic modules for you to learn. This documentation will guide you through the various features and functionalities of our website.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <p>
            To get started, follow these steps:
          </p>

          <ol className="list-decimal list-inside mt-4">
            <li>Visit our website at <Link href="https://www.example.com" className='text-green-400 hover:text-green-500'>LearnPara</Link>.</li>
            <li>On the homepage, you will find the "LearnPara AI" section.</li>
            <li>Enter your desired subject or topic into the input field.</li>
            <li>Click the "Generate Modules" button.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Module Selection</h2>
          <p>
            Once you have generated the modules for your chosen topic, you will see a list of modules displayed on the screen. Each module represents a specific aspect or subtopic of the subject you entered.
          </p>
          <p>
            Click on any module to explore its subtopics. The subtopics will be displayed as a list. Click on a subtopic to view its detailed information.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Detailed Information</h2>
          <p>
            When you select a subtopic, you will be presented with a detailed explanation of that particular topic. You can click the "Detail" button to expand and get the detailed information.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Examples and Q&A</h2>
          <p>
            Below the detailed explanation, you will find five buttons: Detail, Simplify, Example, Q&A, and Quiz Test.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>
              <strong>Detail:</strong> Clicking this button will display the detailed explanation in a point-by-point format, making it easier to grasp the key concepts.
            </li>
            <li>
              <strong>Simplify:</strong> This button provides a simplified version of the topic's definition and explanation.
            </li>
            <li>
              <strong>Example:</strong> Click this button to access real-world examples related to the topic.
            </li>
            <li>
              <strong>Q&A:</strong> This button will generate questions and answers based on the subtopic's explanation. It's useful for exam preparation and interviews.
            </li>
            <li>
              <strong>Quiz Test:</strong> By clicking this button, you can test your knowledge by taking a quiz based on the subtopic. It helps you evaluate your understanding and retention of the topic.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p>
            Congratulations! You now have an overview of the features and functionality provided by LearnPara AI. Start exploring various subjects and topics, learn from detailed explanations, access simplified versions, review examples, practice with quizzes, and prepare for exams and interviews with our AI-powered platform.
          </p>
        </section>

        <div className="flex mt-4">
          <Link href="https://github.com/devpler">
            <p rel="noopener noreferrer" className="mr-4">
              <FaGithub className="text-2xl text-gray-600 hover:text-gray-800 transition-colors duration-300" />
            </p>
          </Link>
          <Link href="https://www.linkedin.com/in/devpler">
            <p rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-gray-600 hover:text-gray-800 transition-colors duration-300" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
