import { menuItems } from "@/data/menu";
import ProductCard from "@/components/menu/ProductCard";

export default function ProductGrid() {
    return (
        <section>
            <h2>Popular Pizzas</h2>

            {menuItems.map((item) => (
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