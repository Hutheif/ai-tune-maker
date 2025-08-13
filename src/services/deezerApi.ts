import type { SearchResponse } from "@/types/music";

const DEEZER_API_BASE = "https://api.deezer.com";
const CORS_PROXY = "https://api.allorigins.win/raw?url=";

export const searchTracks = async (query: string, limit = 25): Promise<SearchResponse> => {
  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `${CORS_PROXY}${encodeURIComponent(`${DEEZER_API_BASE}/search?q=${encodedQuery}&limit=${limit}`)}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error searching tracks:", error);
    throw new Error("Failed to search tracks. Please try again.");
  }
};

export const getArtistTopTracks = async (artistId: number): Promise<SearchResponse> => {
  try {
    const url = `${CORS_PROXY}${encodeURIComponent(`${DEEZER_API_BASE}/artist/${artistId}/top?limit=10`)}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching artist top tracks:", error);
    throw new Error("Failed to fetch artist tracks. Please try again.");
  }
};