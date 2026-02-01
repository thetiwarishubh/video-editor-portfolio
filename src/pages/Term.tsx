"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  const lastUpdated = "January 10, 2026";

  return (
    <section className="relative min-h-screen bg-background text-foreground py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {lastUpdated}
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <p>
              These Terms of Service ("Terms") govern your engagement with RahulMotion ("Provider", "we", "us", or "our") for freelance video editing and related creative services. By requesting a quote, paying a deposit, or using our services, you ("Client" or "you") agree to these Terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12">1. Services</h2>
            <p>We provide video editing, color grading, motion graphics, and related services as described in the project proposal, quote, or statement of work. Services are performed on a freelance basis.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12">2. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>50% deposit required before work begins (non-refundable)</li>
              <li>Balance due upon final delivery or as per agreed milestones</li>
              <li>Payments via bank transfer, PayPal, or other specified methods</li>
              <li>Late payments may incur 1.5% monthly interest or service suspension</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12">3. Intellectual Property & Rights</h2>
            <p>Upon full payment, we grant you a non-exclusive, perpetual license to use the final deliverables. We retain rights to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pre-existing tools, templates, or techniques</li>
              <li>Use the project in our portfolio (unless otherwise agreed)</li>
            </ul>
            <p>You warrant that any materials provided do not infringe third-party rights.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12">4. Revisions & Scope</h2>
            <p>Included: [e.g., 2 rounds of revisions]. Additional revisions may incur extra fees. Changes outside original scope require written agreement and may adjust timeline/price.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12">5. Timeline & Delivery</h2>
            <p>Timelines are estimates. Delays due to late client feedback, additional revisions, or force majeure are not our responsibility.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12">6. Termination & Cancellation</h2>
            <p>Either party may terminate with written notice. You pay for work completed. Deposits are non-refundable.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12">7. Limitation of Liability</h2>
            <p>We are not liable for indirect, consequential, or incidental damages. Our total liability shall not exceed the fees paid for the project.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12">8. Governing Law</h2>
            <p>These Terms are governed by the laws of India. Disputes shall be resolved in the courts of [your city/state].</p>

            <h2 className="text-2xl font-bold text-foreground mt-12">9. Contact</h2>
            <p>Questions? Reach us at 
              <Link className="pl-2" to="/contact">
                <Button
                  size="lg"
                  className="rounded-sm cursor-pointer text-sm md:text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.01]"
                >
                  Contact
                </Button>
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;