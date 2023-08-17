import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { product, showDetails } = props;
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.price}</p>
          {showDetails && (
            <Link to={`product/${product.id}`} className="btn btn-primary">
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
