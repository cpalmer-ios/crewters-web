"use client"
import React from "react";
import Image from "next/image";

import logo from "@/assets/fulllogo1.png"

const PrivacyPolicy = () => (
  <main className="max-w-3xl mx-auto py-12 px-4">
    <Image src={logo} alt="Crewters Logo" width={200} height={200} className="mb-6 mx-auto" />
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4">
      Crewters is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website, mobile application, and services.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
    <p className="mb-4">
      We may collect personal information such as your name, email address, profile photo, and usage data when you register or use Crewters.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
    <p className="mb-4">
      Your information is used to provide and improve our services, communicate with you, and personalize your experience.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing of Information</h2>
    <p className="mb-4">
      We do not sell your personal information. We may share data with trusted partners to help us operate the service, or as required by law.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Security</h2>
    <p className="mb-4">
      We implement reasonable security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Choices</h2>
    <p className="mb-4">
      You may update or delete your account information at any time. Contact us if you need assistance.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">6. Changes to This Policy</h2>
    <p className="mb-4">
      Crewters may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact</h2>
    <p>
      If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@crewters.com" className="text-white underline">support@crewters.com</a>.
    </p>
  </main>
);

export default PrivacyPolicy;