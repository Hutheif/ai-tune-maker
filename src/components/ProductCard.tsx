import { Star, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="relative mb-6 group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <img
            src={product.store.logo}
            alt={product.store.name}
            className="w-8 h-8 rounded-full bg-white p-1 shadow-md"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount} reviews)
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ${product.price}
            </span>
            <span className="text-sm text-muted-foreground">
              at {product.store.name}
            </span>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="font-medium mb-2">Key Features</h4>
          <div className="space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="text-sm text-muted-foreground">
                • {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Collapsible Details */}
        <div className="border-t pt-4">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-between w-full text-left font-medium mb-2"
          >
            <span>Detailed Comparison</span>
            {showDetails ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {showDetails && (
            <div className="space-y-4 animate-accordion-down">
              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-green-600 mb-2">Pros</h5>
                  <ul className="space-y-1 text-sm">
                    {product.pros.map((pro, index) => (
                      <li key={index} className="text-green-600">+ {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-600 mb-2">Cons</h5>
                  <ul className="space-y-1 text-sm">
                    {product.cons.map((con, index) => (
                      <li key={index} className="text-red-600">- {con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h5 className="font-medium mb-2">Specifications</h5>
                <div className="space-y-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Buy Button */}
        <Button 
          className="w-full" 
          onClick={() => window.open(product.buyUrl, '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Buy from {product.store.name}
        </Button>
      </div>
    </div>
  );
};