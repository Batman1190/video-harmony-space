
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NewsSectionProps {
  title: string;
  embedUrl: string;
}

const NewsSection = ({ title, embedUrl }: NewsSectionProps) => {
  return (
    <Card className="bg-gradient-to-r from-gray-100 to-white border-none shadow-sm mt-8">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
          <iframe 
            src={embedUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={title}
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsSection;
