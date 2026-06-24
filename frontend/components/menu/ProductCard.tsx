type ProductCardProps = {
    name: string;
    description: string;
    price: number;
};

export default function ProductCard({ name, description, price }: ProductCardProps) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <strong>£{price}</strong>
            <br />
            <button>Add to Cart</button>
        </div>
    );
}