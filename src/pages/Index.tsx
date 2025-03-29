
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import VideoCard from "@/components/VideoCard";
import FeaturedVideo from "@/components/FeaturedVideo";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [youtubeResults, setYoutubeResults] = useState([]);
  const [dailymotionResults, setDailymotionResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // This would normally fetch real data from the YouTube and Dailymotion APIs
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    console.log("Searching for:", searchQuery);
    
    // Simulate API calls with mock data
    setTimeout(() => {
      // Mock YouTube results
      setYoutubeResults([
        {
          id: "yt1",
          title: "Queen of Tears - Episode Highlights",
          channel: "K-Drama Channel",
          views: "1.2M views",
          thumbnail: "https://picsum.photos/id/1/320/180",
          url: "https://www.youtube.com/watch?v=example1"
        },
        {
          id: "yt2",
          title: "Behind the Scenes with the Cast",
          channel: "Entertainment Weekly",
          views: "856K views",
          thumbnail: "https://picsum.photos/id/2/320/180",
          url: "https://www.youtube.com/watch?v=example2"
        },
        {
          id: "yt3",
          title: "Queen of Tears - Official Trailer",
          channel: "Netflix Korea",
          views: "3.4M views",
          thumbnail: "https://picsum.photos/id/3/320/180",
          url: "https://www.youtube.com/watch?v=example3"
        },
        {
          id: "yt4",
          title: "Analysis: What Makes Queen of Tears Special",
          channel: "Drama Critics",
          views: "567K views",
          thumbnail: "https://picsum.photos/id/4/320/180",
          url: "https://www.youtube.com/watch?v=example4"
        }
      ]);
      
      // Mock Dailymotion results
      setDailymotionResults([
        {
          id: "dm1",
          title: "Queen of Tears - Episode 1 Recap",
          channel: "Drama Recaps",
          views: "950K views",
          thumbnail: "https://picsum.photos/id/5/320/180",
          url: "https://www.dailymotion.com/video/example1"
        },
        {
          id: "dm2",
          title: "Exclusive Interview: Lead Actress",
          channel: "Dailymotion Exclusives",
          views: "723K views",
          thumbnail: "https://picsum.photos/id/6/320/180",
          url: "https://www.dailymotion.com/video/example2"
        },
        {
          id: "dm3",
          title: "Fan Reactions - Queen of Tears Finale",
          channel: "Fan Zone",
          views: "1.1M views",
          thumbnail: "https://picsum.photos/id/7/320/180",
          url: "https://www.dailymotion.com/video/example3"
        },
        {
          id: "dm4",
          title: "Queen of Tears - Music Compilation",
          channel: "K-Drama OST",
          views: "689K views",
          thumbnail: "https://picsum.photos/id/8/320/180",
          url: "https://www.dailymotion.com/video/example4"
        }
      ]);
      
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-800 text-white p-4 md:p-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold">
                <span className="text-white">My</span>
                <span className="text-yellow-300">Tube.Space</span>
              </h1>
              <div className="ml-4 flex space-x-2">
                <a 
                  href="https://buymeacoffee.com/musikalangw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition-colors"
                >
                  Buy Me a Coffee
                </a>
                <a 
                  href="https://www.tiktok.com/@glowandcare1190" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs bg-black text-white px-2 py-1 rounded hover:bg-gray-800 transition-colors"
                >
                  TikTok
                </a>
              </div>
            </div>
            <p className="text-sm text-yellow-200 max-w-xl text-center md:text-right">
              Search and watch videos from YouTube and Dailymotion in one place with MyTube.Space's seamless 2-in-1 search platform.
            </p>
          </div>
          <p className="text-xs text-white text-center md:text-right mt-1">Proud to be Pangasinense</p>
        </div>
      </header>

      {/* Search Bar */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto p-4">
          <div className="flex">
            <Input
              type="text"
              placeholder="Search for videos..."
              className="flex-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button 
              onClick={handleSearch} 
              className="ml-2 bg-red-600 hover:bg-red-700"
              disabled={isSearching}
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4">
        {/* Featured Video */}
        <FeaturedVideo 
          title="Featured Video of the Week: QUEEN OF TEARS"
          description="Chaebol heiress and husband rediscover love through illness and hardships."
          embedUrl="https://www.dailymotion.com/embed/playlist/x8attq?mute=1"
        />

        {/* Video Results */}
        <Tabs defaultValue="youtube" className="my-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="youtube">YouTube Results</TabsTrigger>
            <TabsTrigger value="dailymotion">Dailymotion Results</TabsTrigger>
          </TabsList>
          
          {/* YouTube Tab */}
          <TabsContent value="youtube">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {youtubeResults.length > 0 ? (
                youtubeResults.map((video) => (
                  <VideoCard 
                    key={video.id}
                    title={video.title}
                    channel={video.channel}
                    views={video.views}
                    thumbnail={video.thumbnail}
                    url={video.url}
                    platform="YouTube"
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-500">
                  {isSearching ? (
                    <p>Searching YouTube videos...</p>
                  ) : (
                    <p>Search for videos or browse the featured content</p>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
          
          {/* Dailymotion Tab */}
          <TabsContent value="dailymotion">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {dailymotionResults.length > 0 ? (
                dailymotionResults.map((video) => (
                  <VideoCard 
                    key={video.id}
                    title={video.title}
                    channel={video.channel}
                    views={video.views}
                    thumbnail={video.thumbnail}
                    url={video.url}
                    platform="Dailymotion"
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-500">
                  {isSearching ? (
                    <p>Searching Dailymotion videos...</p>
                  ) : (
                    <p>Search for videos or browse the featured content</p>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* News Section */}
        <NewsSection 
          title="Latest News from GMA"
          embedUrl="https://www.youtube.com/embed/videoseries?list=PLCpdvYcv59AhPuMparH_AmXGrMy5Q-V1a"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
