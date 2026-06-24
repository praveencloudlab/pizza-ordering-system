import { ShoppingCart } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold text-red-600">🍕 Slice Street</h1>

                <nav className="hidden gap-8 font-medium md:flex">
                    <a>Home</a>
                    <a>Menu</a>
                    <a>Offers</a>
                    <a>Contact</a>
                    <a>Login</a>
                </nav>

                <button className="flex items-center gap-2 rounded-full bg-red-600 px-5 py-2 text-white">
                    <ShoppingCart size={18} />
                    Cart
                </button>
            </div>
        </header>
    );
}