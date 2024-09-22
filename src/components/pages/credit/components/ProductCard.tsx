import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
interface Product {
  id: number;
  name: string;
  description: string;
  media: { url: string }; 
  is_active: boolean;
}

export const ProductListSkeleton = () => {
  return (
  <div className="w-full flex justify-between items-center p-4 rounded-lg shadow-lg bg-white mb-4">
      
      <Skeleton circle={true} height={50} width={50} />

      
      <div className="flex-1 ml-4">
        <Skeleton width={100} height={15} />
        <Skeleton width={150} height={12} className="mt-1" />
      </div>

      
      <div className="flex items-center">
        <Skeleton width={80} height={20} />
        <Skeleton circle={true} height={15} width={15} className="ml-2" />
      </div>
    </div>
  );
};

interface ProductsProps {
  productDetail: Product[];
}
export const Products : React.FC<ProductsProps> = ({ productDetail }) => {
  return (
    <>
      {/* Desktop view */}
      <div className="flex flex-col w-full justify-between gap-4 pt-10">
        {productDetail?.map((product, index) => (
          <div
            key={product.id}
            className="flex justify-between w-full shadow p-2 rounded-xl text-xs text-gray-500 items-center gap-2"
          >
            <div className="flex gap-4 items-center">
              {/* Use placeholder image if product_image is empty */}
              <img
                src={
                  product.media.url 
                }
                alt={product.name}
                className="w-10 h-10"
              />
              <div>
                <p>{product.name}</p>
                <div className="flex gap-2">
                  <span className="md:flex hidden">
                    {product.description || "this is description"} |
                  </span>
                  <span className="md:flex hidden">view all</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end px-2">
              {/* <span className="text-xl text-gray-800 font-semibold">${product.price}</span> */}
              {product.is_active && (
                <div className="relative inline-flex">
                  {/* Button */}
                  <button className="px-4 py-2 font-semibold rounded-lg  border-green-500 text-customBlue shadow-lg animate-pulse-brightness">
                    Available
                  </button>

                  {/* Ping Dot */}
                  <span className="absolute top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

