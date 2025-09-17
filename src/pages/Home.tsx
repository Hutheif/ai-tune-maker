import { useNavigate } from "react-router-dom";
import { ProductSearchBar } from "@/components/ProductSearchBar";

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/compare?search=${encodeURIComponent(query)}`);
  };

  const suggestions = [
    "iPhone 15 vs Samsung Galaxy S24",
    "MacBook Pro vs Dell XPS",
    "AirPods Pro vs Sony WH-1000XM5",
    "iPad vs Surface Pro",
    "Nintendo Switch vs Steam Deck"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            SmartCompare
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Compare products and find the best deals with AI-powered recommendations
          </p>

          {/* Search Bar */}
          <div className="search-card mb-8">
            <ProductSearchBar onSearch={handleSearch} />
          </div>

          {/* Popular Searches */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Popular comparisons:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSearch(suggestion)}
                  className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm transition-colors hover:shadow-sm"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="font-semibold mb-2">Smart Search</h3>
            <p className="text-sm text-muted-foreground">
              Find and compare products across multiple categories and brands
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="font-semibold mb-2">AI Recommendations</h3>
            <p className="text-sm text-muted-foreground">
              Get personalized suggestions based on your needs and preferences
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="font-semibold mb-2">Best Deals</h3>
            <p className="text-sm text-muted-foreground">
              Compare prices and find the best deals from trusted retailers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;