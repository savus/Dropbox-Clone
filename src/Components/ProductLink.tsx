export const ProductLink = ({
  iconClass,
  productHeader,
  productContent,
}: {
  iconClass: string;
  productHeader: string;
  productContent: string;
}) => {
  return (
    <a href="#" className="product-link">
      <div className="icon-container">
        <i className={iconClass}></i>
      </div>
      <div className="content-container">
        <h4 className="product-header">{productHeader}</h4>
        <p className="product-description">{productContent}</p>
      </div>
    </a>
  );
};
