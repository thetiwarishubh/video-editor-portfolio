"use client";

import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const lastUpdated = "January 10, 2026";

  return (
    <section className="relative min-h-screen bg-background text-foreground py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {lastUpdated}
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <p>
              RahulMotion ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [yourwebsite.com], contact us for freelance video editing services, or engage with our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12">1. Information We Collect</h2>
            <p>We may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, project details, and payment information you provide when inquiring about or booking services.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent, and other analytics collected via cookies and similar technologies.</li>
              <li><strong>Project Files:</strong> Raw footage, scripts, or other materials you share for editing purposes (treated confidentially).</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12">2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage freelance video editing services</li>
              <li>Communicate with you about projects, quotes, and updates</li>
              <li>Process payments and invoicing</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12">3. Sharing of Information</h2>
            <p>We do not sell your personal information. We may share it with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trusted service providers (e.g., payment gateways, cloud storage) under strict confidentiality</li>
              <li>Legal authorities if required by law</li>
              <li>In case of business transfer (merger, acquisition)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12">4. Cookies and Tracking</h2>
            <p>We use essential cookies for site functionality and analytics cookies (e.g., Google Analytics) to understand usage. You can manage preferences via your browser settings.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12">5. Data Security</h2>
            <p>We implement reasonable security measures, but no method is 100% secure. We cannot guarantee absolute protection.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12">6. Your Rights</h2>
            <p>You may have rights to access, correct, delete, or restrict your data (depending on applicable laws like DPDP Act in India). Contact us to exercise these rights.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12">7. Children's Privacy</h2>
            <p>Our services are not intended for individuals under 18. We do not knowingly collect data from children.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12">8. Changes to This Policy</h2>
            <p>We may update this policy. Changes will be posted here with the updated date. Review periodically.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12">9. Contact Us</h2>
            <p>For any questions, reach out at:</p>
            <p className="mt-2">
              Email: rahulkumardas400m@gmail.com<br />
              Website: https://rahulmotion.vercel.app/contact
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;