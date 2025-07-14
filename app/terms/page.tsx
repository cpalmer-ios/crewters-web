"use client"
import React from "react";
import Image from "next/image";

import logo from "@/assets/fulllogo1.png"

const TermsOfService = () => (
  <main className="max-w-3xl mx-auto py-12 px-4">
    <Image src={logo} alt="Crewters Logo" width={200} height={200} className="mb-6 mx-auto" />
    <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
    <p className="mb-4">
      Welcome to Crewters! By accessing or using our website, mobile application, or services, you agree to be bound by these Terms of Service. Please read them carefully.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">1. Acceptance of Terms</h2>
    <p className="mb-4">
      By using Crewters, you agree to comply with and be legally bound by these terms. If you do not agree, please do not use our services.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">2. User Accounts</h2>
    <p className="mb-4">
      You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">3. Prohibited Conduct</h2>
    <p className="mb-4">
      You agree not to use Crewters for any unlawful purpose or in violation of any applicable laws. You must not harass, abuse, or harm other users.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">4. Content Ownership</h2>
    <p className="mb-4">
      You retain ownership of any content you submit, but grant Crewters a license to use, display, and distribute your content as part of the service.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">5. Termination</h2>
    <p className="mb-4">
      We reserve the right to suspend or terminate your account at our discretion, without notice, for conduct that violates these terms.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">6. Changes to Terms</h2>
    <p className="mb-4">
      Crewters may update these Terms of Service at any time. Continued use of the service constitutes acceptance of the new terms.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact</h2>
    <p>
      If you have any questions about these Terms, please contact us at <a href="mailto:support@crewters.com" className="text-white underline">support@crewters.com</a>.
    </p>
  </main>
);

export default TermsOfService;