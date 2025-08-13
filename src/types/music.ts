export interface Track {
  id: number;
  title: string;
  artist: {
    id: number;
    name: string;
    picture_medium: string;
  };
  album: {
    id: number;
    title: string;
    cover_medium: string;
    cover_xl: string;
  };
  duration: number;
  preview: string;
  explicit_lyrics: boolean;
}

export interface SearchResponse {
  data: Track[];
  total: number;
  next?: string;
}

export interface Album {
  id: number;
  title: string;
  cover_medium: string;
  cover_xl: string;
  artist: {
    id: number;
    name: string;
  };
  tracks?: {
    data: Track[];
  };
}