import { products } from "@/data/products";
import ProductCard from "@/features/product/ProductCard";

export default function ProductGrid() {
    return (
        <section>
            <h2>Popular Pizzas</h2>

            {products.map((item) => (
                <ProductCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                />
            ))}
        </section>
    );
}