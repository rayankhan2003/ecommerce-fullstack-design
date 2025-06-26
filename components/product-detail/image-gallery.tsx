interface Props {
  selectedImage: number;
  setSelectedImage: (index: number) => void;
}

export default function ProductGallery({
  selectedImage,
  setSelectedImage,
}: Props) {
  const images = [
    '/images/products/suit.png',
    '/images/products/suit.png',
    '/images/products/suit.png',
    '/images/products/suit.png',
  ];

  return (
    <div className="lg:col-span-1">
      <div className="space-y-4">
        <div className="aspect-square bg-white rounded-lg border p-4">
          <img
            src={images[selectedImage]}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex space-x-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-16 h-16 border rounded-lg p-1 ${
                selectedImage === index ? 'border-blue-500' : 'border-gray-200'
              }`}
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
