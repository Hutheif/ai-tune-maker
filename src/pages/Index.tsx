import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { TrackCard } from "@/components/TrackCard";
import { MusicPlayer } from "@/components/MusicPlayer";
import { useMusicPlayer } from "@/hooks/useMusicPlayer";
import { searchTracks } from "@/services/deezerApi";
import { useToast } from "@/hooks/use-toast";
import type { Track } from "@/types/music";

const Index = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();
  
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    playTrack,
    pauseTrack,
    seekTo,
  } = useMusicPlayer();

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const results = await searchTracks(query);
      setTracks(results.data || []);
      setHasSearched(true);
      
      if (!results.data || results.data.length === 0) {
        toast({
          title: "No results found",
          description: "Try searching with different keywords.",
        });
      }
    } catch (error) {
      toast({
        title: "Search failed",
        description: "Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePlay = (track: Track) => {
    if (!track.preview) {
      toast({
        title: "Preview not available",
        description: "This track doesn't have a preview available.",
        variant: "destructive",
      });
      return;
    }
    playTrack(track);
  };

  return (
    <div className="min-h-screen pb-32">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
              AI Tune Maker
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover and play your favorite music with our AI-powered music streaming app
            </p>
          </div>
          
          <SearchBar onSearch={handleSearch} loading={loading} />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted-foreground">Searching for music...</p>
          </div>
        )}

        {!loading && hasSearched && tracks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No tracks found. Try a different search term.</p>
          </div>
        )}

        {!hasSearched && !loading && (
          <div className="text-center py-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Start exploring music</h2>
              <p className="text-muted-foreground">Search for your favorite songs, artists, or albums above</p>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {["The Weeknd", "Dua Lipa", "Post Malone", "Ariana Grande", "Drake"].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSearch(suggestion)}
                    className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {tracks.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Search Results</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {tracks.map((track) => (
                <TrackCard
                  key={track.id}
                  track={track}
                  isPlaying={currentTrack?.id === track.id && isPlaying}
                  onPlay={handlePlay}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Music Player */}
      <MusicPlayer
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        onPlay={() => currentTrack && playTrack(currentTrack)}
        onPause={pauseTrack}
        onSeek={seekTo}
      />
    </div>
  );
};

export default Index;