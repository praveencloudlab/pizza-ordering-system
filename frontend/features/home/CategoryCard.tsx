import AppCard from "@/components/ui/AppCard";

type Props = {
    name: string;
    icon: string;
};

export default function CategoryCard({ name, icon }: Props) {
    return (
        <AppCard className="cursor-pointer p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-red-600 hover:text-white">
            <div className="text-5xl">{icon}</div>

            <h3 className="mt-4 text-lg font-bold">
                {name}
            </h3>
        </AppCard>
    );
}