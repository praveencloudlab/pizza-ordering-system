import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function CategoryGrid() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <SectionTitle
                title="Popular Categories"
                subtitle="Choose your favourite food"
            />

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        name={category.name}
                        icon={category.icon}
                    />
                ))}
            </div>
        </section>
    );
}