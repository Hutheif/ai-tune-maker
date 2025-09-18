import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Search, Filter, Star, ShoppingCart } from "lucide-react";
import { allBikes, bikeCategories } from "@/data/bikes";
import type { Bike } from "@/types/bike";

const Products = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [bikes, setBikes] = useState<Bike[]>(allBikes);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [priceRange, setPriceRange] = useState<string>("all");

  const categoryParam = searchParams.get("category");

  useEffect(() => {
    if (categoryParam && categoryParam !== "all") {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    let filteredBikes = [...allBikes];

    // Filter by search query
    if (searchQuery) {
      filteredBikes = filteredBikes.filter(bike =>
        bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "all") {
      filteredBikes = filteredBikes.filter(bike => bike.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      filteredBikes = filteredBikes.filter(bike => {
        if (max) {
          return bike.price >= min && bike.price <= max;
        } else {
          return bike.price >= min;
        }
      });
    }

    // Sort bikes
    switch (sortBy) {
      case "price-low":
        filteredBikes.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredBikes.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filteredBikes.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filteredBikes.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order for "featured"
        break;
    }

    setBikes(filteredBikes);
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  const handleBuyNow = (bike: Bike) => {
    // In a real app, this would handle the purchase flow
    console.log("Buy now clicked for:", bike.name);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate("/")}
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
              <div className="gradient-text text-2xl font-bold">SPIRO</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigate("/")}
                className="nav-link"
              >
                Home
              </button>
              <button className="nav-link text-primary">
                Products
              </button>
              <button 
                onClick={() => navigate("/contact")}
                className="nav-link"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Our Bikes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our complete collection of futuristic bikes designed for every adventure
          </p>
        </div>

        {/* Filters */}
        <div className="search-container mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search bikes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50 border-primary/30"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-background/50 border-primary/30">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {bikeCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-background/50 border-primary/30">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-1000">Under $1,000</SelectItem>
                <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                <SelectItem value="2000-3000">$2,000 - $3,000</SelectItem>
                <SelectItem value="3000">$3,000+</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-background/50 border-primary/30">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-muted-foreground">
            Showing {bikes.length} of {allBikes.length} bikes
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span>Filters applied</span>
          </div>
        </div>

        {/* Bikes Grid */}
        {bikes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikes.map((bike) => (
              <div key={bike.id} className="bike-card">
                <div className="aspect-square overflow-hidden rounded-t-2xl relative">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {!bike.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-semibold">Out of Stock</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs text-primary bg-primary/10 backdrop-blur-sm px-2 py-1 rounded-full">
                      {bike.category.toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                    <span className="text-white text-xs">{bike.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-primary">
                      {bike.name}
                    </h3>
                    <span className="text-2xl font-bold neon-text">
                      ${bike.price.toLocaleString()}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {bike.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap gap-1">
                      {bike.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {bike.features.length > 3 && (
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          +{bike.features.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{bike.reviewCount} reviews</span>
                      <span className="flex space-x-1">
                        {bike.colors.slice(0, 3).map((color, index) => (
                          <div
                            key={index}
                          className="w-3 h-3 rounded-full border border-primary/30"
                          style={{ 
                            backgroundColor: color.toLowerCase().includes('blue') ? '#0ea5e9' : 
                                           color.toLowerCase().includes('red') ? '#ef4444' :
                                           color.toLowerCase().includes('green') ? '#22c55e' :
                                           color.toLowerCase().includes('black') ? '#000' :
                                           color.toLowerCase().includes('white') ? '#fff' : '#64748b'
                          }}
                          />
                        )))}
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleBuyNow(bike)}
                    disabled={!bike.inStock}
                    className="w-full btn-primary group"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    {bike.inStock ? 'Buy Now' : 'Notify When Available'}
                  </Button>
                </div>
              </div>
            )))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="futuristic-card max-w-md mx-auto">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No bikes found</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Try adjusting your filters or search terms
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setPriceRange("all");
                  setSortBy("featured");
                }}
                className="btn-secondary"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
