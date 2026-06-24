import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import ProductGrid from "@/components/home/ProductGrid";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <CategorySection />
            <ProductGrid />
            <Footer />
        </>
    );
}