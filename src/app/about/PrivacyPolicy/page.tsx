// pages/privacy-policy.tsx

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className=" min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">LearnPara AI - Privacy & Policy</h1>

        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p>
            At LearnPara AI, we understand the importance of privacy and are committed to protecting your personal information. When you use our website, we may collect the following basic details:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Contact number</li>
            <li>Profile picture (optional)</li>
            <li>College or school name</li>
            <li>Location</li>
            <li>Age</li>
            <li>Gender</li>
          </ul>
          <p>
            We collect this information to enhance your learning experience and provide personalized content and recommendations. Rest assured that we treat your information with utmost confidentiality and do not share it with any third parties without your consent.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Data Usage</h2>
          <p>
            The data we collect is used for the following purposes:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Personalizing your learning journey</li>
            <li>Providing relevant content and recommendations</li>
            <li>Improving our website's functionality and user experience</li>
            <li>Communicating with you regarding updates and new features</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p>
            We have implemented strict security measures to safeguard your personal information from unauthorized access, disclosure, alteration, or destruction. Your data is stored securely and only accessible to authorized personnel who require it to perform their duties.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Cookies</h2>
          <p>
            LearnPara AI may use cookies to enhance your browsing experience and collect non-personally identifiable information for analytics purposes. You have the option to disable cookies in your browser settings, but please note that certain features of the website may not function properly without cookies enabled.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services. Please note that we are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of those websites before providing any personal information.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Changes to Privacy Policy</h2>
          <p>
            We reserve the right to update or modify this Privacy & Policy at any time. Any changes will be effective immediately upon posting on the website. We encourage you to review this page periodically to stay informed about our data practices.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns regarding our Privacy & Policy, please contact us at learnpara@proton.me.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
