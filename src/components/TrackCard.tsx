import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Track } from "@/types/music";

interface TrackCardProps {
  track: Track;
  isPlaying: boolean;
  onPlay: (track: Track) => void;
}

export const TrackCard = ({ track, isPlaying, onPlay }: TrackCardProps) => {
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="music-card group">
      <div className="relative">
        <img
          src={track.album.cover_medium}
          alt={`${track.album.title} by ${track.artist.name}`}
          className="w-full aspect-square object-cover rounded-xl mb-4"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
          <Button
            variant="player"
            size="icon"
            onClick={() => onPlay(track)}
            className="h-12 w-12"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6 ml-1" />
            )}
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-sm line-clamp-2 leading-tight">
          {track.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-1">
          {track.artist.name}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{track.album.title}</span>
          <span>{formatDuration(track.duration)}</span>
        </div>
      </div>
    </div>
  );
};