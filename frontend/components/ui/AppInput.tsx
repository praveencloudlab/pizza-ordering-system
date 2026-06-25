import { Input } from "@/components/ui/input";
type AppInputProps = {
    placeholder?: string;
    className?: string;
};

export default function AppInput({ placeholder, className = "" }: AppInputProps) {
    return (
        <Input
            placeholder={placeholder}
            className={`rounded-full px-5 py-6 text-gray-900 ${className}`}
        />
    );
}