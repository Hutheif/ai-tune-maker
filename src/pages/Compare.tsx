import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { AISummary } from "@/components/AISummary";
import { ProductSearchBar } from "@/components/ProductSearchBar";
import { demoProducts, demoAISummary } from "@/data/demoProducts";
import type { Product } from "@/types/product";

const Compare = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [aiSummary, setAiSummary] = useState("");
  
  const query = searchParams.get("search") || "";

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  const handleSearch = async (searchQuery: string) => {
    setLoading(true);
    
    // Update URL
    setSearchParams({ search: searchQuery });
    
    // Simulate API call
    setTimeout(() => {
      setProducts(demoProducts);
      setAiSummary(demoAISummary);
      setLoading(false);
    }, 1000);
  };

  const handleNewSearch = (newQuery: string) => {
    handleSearch(newQuery);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
          <p className="text-muted-foreground">Finding the best products for you...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Search
            </Link>
            <h1 className="text-lg font-semibold gradient-text">SmartCompare</h1>
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
          
          <ProductSearchBar 
            onSearch={handleNewSearch} 
            loading={loading}
            placeholder="Try a new comparison..." 
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {query && (
          <>
            {/* Search Results Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                Comparing results for: <span className="text-primary">"{query}"</span>
              </h2>
              <p className="text-muted-foreground">
                Found {products.length} products to help you make the best choice
              </p>
            </div>

            {/* AI Summary */}
            {aiSummary && products.length > 0 && (
              <AISummary summary={aiSummary} query={query} />
            )}

            {/* Product Comparison */}
            {products.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Side-by-side Comparison</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Sticky Button */}
            <div className="sticky-button lg:hidden">
              <div className="container mx-auto px-4">
                <Button 
                  className="w-full h-12"
                  onClick={() => {
                    const bestProduct = products[0]; // Assuming first is recommended
                    window.open(bestProduct?.buyUrl, '_blank');
                  }}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy Recommended Product
                </Button>
              </div>
            </div>
          </>
        )}

        {!query && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Use the search bar above to start comparing products
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;