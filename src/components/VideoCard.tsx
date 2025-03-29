
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface VideoCardProps {
  title: string;
  channel: string;
  views: string;
  thumbnail: string;
  url: string;
  platform: "YouTube" | "Dailymotion";
}

const VideoCard = ({ title, channel, views, thumbnail, url, platform }: VideoCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <Badge 
          className={`absolute top-2 right-2 ${
            platform === "YouTube" ? "bg-red-600" : "bg-blue-600"
          }`}
        >
          {platform}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold line-clamp-2 mb-1 text-sm md:text-base" title={title}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{channel}</p>
        <p className="text-xs text-muted-foreground mt-1">{views}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          Watch on {platform} <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
