import { TProduct } from "../types";

export function Product({
  product: { iconClass, productHeader, productContent },
}: {
  product: TProduct;
}) {
  return (
    <div className="product">
      <div className="icon-side">
        <div className="icon-container">
          <i className={`${iconClass}`}></i>
        </div>
      </div>
      <div className="content-container">
        <a href="#" className="product-header">
          {productHeader}
        </a>
        <p className="product-content">{productContent}</p>
      </div>
    </div>
  );
}
