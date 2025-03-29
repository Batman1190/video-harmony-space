
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeaturedVideoProps {
  title: string;
  description: string;
  embedUrl: string;
}

const FeaturedVideo = ({ title, description, embedUrl }: FeaturedVideoProps) => {
  return (
    <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-none shadow-sm overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl md:text-2xl text-center">{title}</CardTitle>
        <CardDescription className="text-base text-center italic">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
          <iframe 
            src={embedUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title={title}
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedVideo;
