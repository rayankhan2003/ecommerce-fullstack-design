interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
  viewMode: 'grid' | 'list';
}

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  return (
    <div
      className={
        viewMode === 'grid'
          ? 'border p-4 rounded-md bg-white'
          : 'flex items-center border p-4 rounded-md bg-white space-x-4'
      }
    >
      <img
        src={product.image}
        alt={product.name}
        className={
          viewMode === 'grid'
            ? 'w-full h-40 object-cover'
            : 'w-24 h-24 object-cover'
        }
      />
      <div>
        <h4 className="text-sm font-medium">{product.name}</h4>
        <p className="text-sm text-gray-500">${product.price}</p>
      </div>
    </div>
  );
}
