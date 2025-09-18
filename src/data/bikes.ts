import type { Bike, BikeCategory } from "@/types/bike";

export const bikeCategories: BikeCategory[] = [
  {
    id: "electric",
    name: "Electric Bikes",
    description: "Powered by the future - experience effortless rides with cutting-edge electric technology",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    count: 12
  },
  {
    id: "mountain",
    name: "Mountain Bikes",
    description: "Conquer any terrain with these rugged, high-performance mountain machines",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    count: 8
  },
  {
    id: "road",
    name: "Road Bikes",
    description: "Speed demons built for the asphalt - lightweight, aerodynamic, lightning fast",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    count: 6
  },
  {
    id: "hybrid",
    name: "Hybrid Bikes",
    description: "The perfect fusion of comfort and performance for urban adventures",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    count: 5
  }
];

export const featuredBikes: Bike[] = [
  {
    id: "spiro-x1-electric",
    name: "Spiro X1 Electric",
    price: 2499,
    currency: "USD",
    rating: 4.9,
    reviewCount: 347,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "electric",
    brand: "Spiro",
    inStock: true,
    features: [
      "750W High-Torque Motor",
      "80-Mile Range",
      "4-Hour Fast Charging",
      "Smart LCD Display",
      "Regenerative Braking",
      "Anti-Theft GPS"
    ],
    specs: {
      frame: "Carbon Fiber Monocoque",
      wheels: "28-inch Alloy Rims",
      brakes: "Hydraulic Disc Brakes",
      gears: "11-Speed Shimano",
      weight: "22.5 kg",
      maxSpeed: "28 mph",
      range: "80 miles",
      battery: "48V 17.5Ah Lithium-ion"
    },
    colors: ["Cyber Blue", "Neon Green", "Shadow Black", "Arctic White"],
    description: "The future of urban mobility. Our flagship electric bike combines cutting-edge technology with sleek design for the ultimate riding experience."
  },
  {
    id: "spiro-phantom-mountain",
    name: "Spiro Phantom Mountain",
    price: 1899,
    currency: "USD",
    rating: 4.8,
    reviewCount: 256,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "mountain",
    brand: "Spiro",
    inStock: true,
    features: [
      "Full Suspension",
      "29-inch Tubeless Tires",
      "Dropper Seat Post",
      "12-Speed Eagle GX",
      "RockShox Fork",
      "Lightweight Frame"
    ],
    specs: {
      frame: "Aluminum 6061-T6",
      wheels: "29-inch Carbon Rims",
      brakes: "SRAM Guide T Disc",
      gears: "12-Speed SRAM Eagle",
      weight: "14.2 kg"
    },
    colors: ["Stealth Black", "Lava Red", "Forest Green"],
    description: "Engineered for extreme terrain. The Phantom Mountain bike delivers unmatched performance on the toughest trails."
  },
  {
    id: "spiro-velocity-road",
    name: "Spiro Velocity Road",
    price: 1599,
    currency: "USD",
    rating: 4.7,
    reviewCount: 189,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "road",
    brand: "Spiro",
    inStock: true,
    features: [
      "Aerodynamic Design",
      "Ultra-Light Frame",
      "22-Speed Shimano",
      "Carbon Fiber Fork",
      "Race Geometry",
      "Tubeless Ready"
    ],
    specs: {
      frame: "Carbon Fiber",
      wheels: "700c Carbon Wheels",
      brakes: "Shimano 105 Disc",
      gears: "22-Speed Shimano 105",
      weight: "8.9 kg"
    },
    colors: ["Racing Red", "Cyber Blue", "Pure White"],
    description: "Built for speed. The Velocity road bike is designed for cyclists who demand nothing but the fastest, most efficient ride possible."
  }
];

export const allBikes: Bike[] = [
  ...featuredBikes,
  {
    id: "spiro-urban-hybrid",
    name: "Spiro Urban Hybrid",
    price: 899,
    currency: "USD",
    rating: 4.6,
    reviewCount: 432,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "hybrid",
    brand: "Spiro",
    inStock: true,
    features: [
      "Comfortable Geometry",
      "7-Speed Shimano",
      "LED Light System",
      "Cargo Rack Ready",
      "Puncture-Resistant Tires",
      "Quick Release Wheels"
    ],
    specs: {
      frame: "Aluminum Alloy",
      wheels: "28-inch Hybrid Tires",
      brakes: "V-Brake System",
      gears: "7-Speed Shimano Tourney",
      weight: "13.5 kg"
    },
    colors: ["Midnight Blue", "Sunset Orange", "Classic Silver"],
    description: "Perfect for city commuting and weekend adventures. The Urban Hybrid offers the ideal balance of comfort and performance."
  },
  {
    id: "spiro-thunder-electric",
    name: "Spiro Thunder Electric",
    price: 3299,
    currency: "USD",
    rating: 4.9,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "electric",
    brand: "Spiro",
    inStock: true,
    features: [
      "1000W Motor",
      "100-Mile Range",
      "2-Hour Fast Charging",
      "AI-Powered Assistance",
      "Smartphone Integration",
      "Advanced Security"
    ],
    specs: {
      frame: "Carbon Titanium Hybrid",
      wheels: "29-inch Smart Rims",
      brakes: "Electromagnetic Disc",
      gears: "Electronic CVT",
      weight: "19.8 kg",
      maxSpeed: "35 mph",
      range: "100 miles",
      battery: "52V 20Ah Graphene"
    },
    colors: ["Electric Blue", "Lightning Yellow", "Storm Gray"],
    description: "The most advanced electric bike ever created. Thunder represents the pinnacle of electric mobility technology."
  },
  {
    id: "spiro-apex-mountain",
    name: "Spiro Apex Mountain",
    price: 2799,
    currency: "USD",
    rating: 4.8,
    reviewCount: 201,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "mountain",
    brand: "Spiro",
    inStock: false,
    features: [
      "Pro-Level Suspension",
      "Carbon Frame",
      "12-Speed SRAM XX1",
      "Wireless Shifting",
      "Tubeless Tire System",
      "Custom Geometry"
    ],
    specs: {
      frame: "Full Carbon Fiber",
      wheels: "27.5-inch Carbon Rims",
      brakes: "SRAM Code RSC",
      gears: "12-Speed SRAM XX1 Eagle",
      weight: "12.1 kg"
    },
    colors: ["Carbon Black", "Neon Orange", "Electric Purple"],
    description: "Professional-grade mountain bike built for the most demanding riders. The Apex pushes the boundaries of what's possible."
  }
];