import { Product } from "@/types/product";

export const products: Product[] = [
    {
        id: 1,
        name: "Pepperoni Heatwave",
        description: "Loaded with pepperoni and mozzarella",
        price: 9.99,
        rating: 4.8,
        category: "Pizza",
        image: "/images/products/pepperoni.png",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "BBQ Chicken",
        description: "Chicken, onions and BBQ sauce",
        price: 10.99,
        rating: 4.7,
        category: "Pizza",
        image: "/images/products/bbq.png",
        badge: "Popular"
    },
    {
        id: 3,
        name: "Margherita",
        description: "Fresh mozzarella and basil",
        price: 8.99,
        rating: 4.9,
        category: "Pizza",
        image: "/images/products/margherita.png"
    }
];