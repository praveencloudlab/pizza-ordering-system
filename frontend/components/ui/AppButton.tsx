import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type AppButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
};

export default function AppButton({
                                      children,
                                      variant = "primary",
                                      className = "",
                                  }: AppButtonProps) {
    const styles = {
        primary: "bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-3 font-semibold",
        secondary: "bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full px-6 py-3 font-semibold",
        outline: "border border-red-600 text-red-600 hover:bg-red-50 rounded-full px-6 py-3 font-semibold",
    };

    return (
        <Button className={`${styles[variant]} ${className}`}>
            {children}
        </Button>
    );
}