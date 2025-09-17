import type { Product } from "@/types/product";

export const demoProducts: Product[] = [
  {
    id: "samsung-galaxy-a15",
    name: "Samsung Galaxy A15",
    price: 199,
    currency: "USD",
    rating: 4.2,
    reviewCount: 1247,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    store: {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop"
    },
    features: [
      "6.5-inch FHD+ Display",
      "50MP Triple Camera",
      "5000mAh Battery",
      "128GB Storage"
    ],
    pros: [
      "Great battery life",
      "Solid camera performance",
      "Affordable price point",
      "Reliable brand"
    ],
    cons: [
      "Plastic build quality",
      "No wireless charging",
      "Limited software updates"
    ],
    specs: {
      "Display": "6.5-inch FHD+",
      "Processor": "MediaTek Dimensity 700",
      "RAM": "4GB",
      "Storage": "128GB",
      "Battery": "5000mAh",
      "Camera": "50MP + 5MP + 2MP"
    },
    buyUrl: "https://amazon.com/samsung-galaxy-a15"
  },
  {
    id: "xiaomi-redmi-12",
    name: "Xiaomi Redmi 12",
    price: 179,
    currency: "USD",
    rating: 4.1,
    reviewCount: 982,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    store: {
      name: "Best Buy",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=100&fit=crop"
    },
    features: [
      "6.79-inch FHD+ Display",
      "50MP Dual Camera",
      "5000mAh Battery",
      "128GB Storage"
    ],
    pros: [
      "Large display",
      "Excellent value",
      "Fast charging",
      "Good performance"
    ],
    cons: [
      "MIUI interface",
      "No IP rating",
      "Limited US warranty"
    ],
    specs: {
      "Display": "6.79-inch FHD+",
      "Processor": "MediaTek Helio G88",
      "RAM": "4GB",
      "Storage": "128GB",
      "Battery": "5000mAh",
      "Camera": "50MP + 8MP"
    },
    buyUrl: "https://bestbuy.com/xiaomi-redmi-12"
  }
];

export const demoAISummary = "Based on your search for budget smartphones, SmartCompare recommends the **Xiaomi Redmi 12** as the better choice. While both phones offer similar core features like 5000mAh batteries and 50MP cameras, the Redmi 12 provides a larger 6.79-inch display and costs $20 less. The Samsung Galaxy A15 offers better brand recognition and software support, but the Redmi 12's superior price-to-performance ratio and larger screen make it the smarter choice for budget-conscious users.";