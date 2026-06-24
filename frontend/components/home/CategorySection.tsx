const categories = ["Pizza", "Burgers", "Wraps", "Sides", "Drinks", "Desserts"];

export default function CategorySection() {
    return (
        <section>
            <h2>Categories</h2>
            {categories.map((category) => (
                <button key={category}>{category}</button>
            ))}
        </section>
    );
}