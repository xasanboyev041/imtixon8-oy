const ProductVariants = ({ variants }) => {
    return (
      <div>
        {variants.map((variant) => (
          <div key={variant.id}>
            <p>{variant.name}</p>
            <p>{variant.price}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductVariants;
  