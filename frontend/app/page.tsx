import Header from "@/components/layout/Header";
import Hero from "@/features/home/Hero";
import CategorySection from "@/features/home/CategorySection";
import ProductGrid from "@/features/home/ProductGrid";
import Footer from "@/components/layout/Footer";
import CategoryGrid from "@/features/home/CategoryGrid";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <CategoryGrid />
            <Footer />
        </>
    );
}