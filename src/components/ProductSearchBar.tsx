import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ProductSearchBarProps {
  onSearch: (query: string) => void;
  loading?: boolean;
  placeholder?: string;
}

export const ProductSearchBar = ({ 
  onSearch, 
  loading = false,
  placeholder = "Compare smartphones, laptops, headphones..." 
}: ProductSearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 h-14 text-lg rounded-xl border-2 focus:border-primary"
          />
        </div>
        <Button 
          type="submit" 
          variant="default"
          size="lg"
          disabled={loading || !query.trim()}
          className="h-14 px-8 rounded-xl"
        >
          {loading ? "Searching..." : "Compare"}
        </Button>
      </div>
    </form>
  );
};