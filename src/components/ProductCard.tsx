import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  url: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  imageUrl,
  price,
  url
}) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden transition-transform hover:scale-105">
      <div className="h-36 sm:h-40 md:h-48 bg-gray-200 overflow-hidden flex items-center justify-center p-2">
        <img 
          src={imageUrl} 
          alt={name} 
          className="max-h-full w-auto object-contain"
        />
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-medium text-base sm:text-lg mb-1 line-clamp-1">{name}</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-medium text-green-500">{price}</span>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs sm:text-sm font-medium text-peregrinos-text hover:text-peregrinos-accent transition-colors px-2 py-1 bg-gray-50 rounded-md"
          >
            Ver produto
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;