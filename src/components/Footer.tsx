
import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">
            <span className="text-white">My</span>
            <span className="text-red-500">Tube.Space</span>
          </h2>
        </div>
        
        <Separator className="my-6 bg-gray-700" />
        
        <div className="max-w-3xl mx-auto text-gray-300">
          <h3 className="text-lg font-semibold mb-3">Video Disclaimer</h3>
          <p className="text-sm mb-2">
            The videos displayed on this website are for informational and entertainment purposes only. 
            All video content, including embedded media, remains the property of its respective creators 
            and copyright owners. We do not claim ownership of third-party videos and provide them for 
            viewing as permitted under applicable laws.
          </p>
          <p className="text-sm mb-2">
            If you believe any content infringes on your copyright, please contact us so we can review 
            and take appropriate action.
          </p>
          <p className="text-sm">
            By using this website, you acknowledge and agree that we are not responsible for the accuracy, 
            legality, or appropriateness of the video content displayed. Viewer discretion is advised.
          </p>
        </div>
        
        <Separator className="my-6 bg-gray-700" />
        
        <div className="text-center">
          <a 
            href="/security-policy" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            Security Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
