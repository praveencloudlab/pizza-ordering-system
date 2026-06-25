type SectionTitleProps = {
    title: string;
    subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-2 text-gray-600">
                    {subtitle}
                </p>
            )}
        </div>
    );
}