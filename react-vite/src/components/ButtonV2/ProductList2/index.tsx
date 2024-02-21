import { products } from "../../../data/products-homework-7";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
const ProductsList2 = () => {
  return (
    <div className="product_list flex my-5 justify-around">
      {products.map((product) => {
        let discount = 0;
        if (product.promoPrice) {
          discount = 100 - (product.promoPrice * 100) / product.price;
        }
        return (
          <div className="item flex flex-col space-y-1.25">
            {discount > 0 ? <span className="block float-right bg-red-500	text-white p-0.5 px-1.5 rounded text-sm w-12">-{discount}%</span> : null}
            <img src={product.thumb} alt={product.name} />
            <p className="border-b border-solid	border-neutral-300">{product.shopName}</p>
            {product.promoPrice && product.promoPrice > 0 ? (
              <div className="price">
                <strong className="text-green-500 text-base">${product.promoPrice}</strong>
                <del className="mx-2 text-sm text-slate-400">${product.price}</del>
                <span className="text-sm text-red-500">-{discount}%</span>
              </div>
            ) : (
              <div className="price">
                <strong>{product.price}</strong>
              </div>
            )}
            <h3 className="text-sky-400">{product.name}</h3>
            <div className="flex">
              <FaStar className="text-yellow-300	" />
              <FaStar className="text-yellow-300	" />
              <FaStar className="text-yellow-300	" />
              <FaStar className="text-yellow-300	" />
              <FaRegStar />
            </div>
            <div className="w-full h-3 relative bg-slate-300	">
              <div className="w-4/5 h-3 bg-yellow-200	absolute top-0 left-0 ">
              </div>
            </div>
            <h3>Sold: {product.sold}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList2;