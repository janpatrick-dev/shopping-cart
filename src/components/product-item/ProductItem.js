import './ProductItem.css';

const ProductItem = (props) => {

  const { title, price, cover_url } = props.game;
  
  const onClick = () => {
    // Move to product page
  }
  
  return (
    <div className='product-item'>
      <img src={cover_url} alt={title} />
      <div className='product-details'>
        <h3>{title}</h3>
        <p>${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;