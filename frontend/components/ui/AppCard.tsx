import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

type AppCardProps = {
    children: ReactNode;
    className?: string;
};

export default function AppCard({ children, className = "" }: AppCardProps) {
    return (
        <Card className={`rounded-3xl border-none bg-white shadow-md transition hover:shadow-xl ${className}`}>
            {children}
        </Card>
    );
}