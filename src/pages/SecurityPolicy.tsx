
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const SecurityPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-red-600 to-red-800 text-white p-4 md:p-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text-white">My</span>
              <span className="text-yellow-300">Tube.Space</span>
            </h1>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-red-600">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 md:p-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Security Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Our Commitment to Security</h2>
          <p className="mb-4">
            At MyTube.Space, we are committed to ensuring the security and privacy of our users. 
            This security policy outlines the measures we take to protect your information and provide 
            a safe browsing experience.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Content Security Policy</h2>
          <p className="mb-4">
            We implement a strict Content Security Policy (CSP) to prevent cross-site scripting (XSS) 
            attacks and other code injection attacks. Our CSP restricts the sources from which content 
            can be loaded, ensuring that only trusted sources are permitted.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Data Protection</h2>
          <p className="mb-4">
            MyTube.Space does not store personal user data on our servers. We do not require registration 
            or login to use our services. Any search queries are processed securely and are not stored 
            permanently.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">External Content</h2>
          <p className="mb-4">
            Our platform embeds content from YouTube and Dailymotion. While we ensure secure connections 
            to these services, please be aware that these platforms have their own privacy and security 
            policies which are outside our control.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Reporting Security Issues</h2>
          <p className="mb-4">
            If you discover a security vulnerability or have concerns about the security of our website, 
            please contact us immediately. We take all security reports seriously and will investigate 
            promptly.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Updates to This Policy</h2>
          <p className="mb-4">
            We may update this security policy from time to time to reflect changes in our practices or 
            for other operational, legal, or regulatory reasons. We encourage you to periodically review 
            this page for the latest information on our security practices.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityPolicy;
