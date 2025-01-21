import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../store/StoreContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { id, image, title, price, rating } = product;
  const { rate, count } = rating;

  // Standardizing title length to a fixed number of characters (e.g., 20)
  const MAX_TITLE_LENGTH = 20;
  const cardTitle =
    title.length <= MAX_TITLE_LENGTH
      ? title
      : `${title.slice(0, MAX_TITLE_LENGTH)}...`;

  const { dispatch } = useCart();

  // Handling Add to Cart
  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success("Added item to cart!");
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card shadow-sm h-100 d-flex flex-column">
        <Link to={`/shop/${id}`} className="nav-link text-center">
          <img
            src={image}
            className="card-img-top product-img p-3"
            alt={`Image of ${title}`}
          />
        </Link>
        <div className="card-body d-flex flex-column text-center">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text text-success fw-bold">${price.toFixed(2)}</p>
          <p className="card-text text-muted small">
            Rating: {rate} ★ ({count} reviews)
          </p>
        </div>
        <div className="card-footer bg-transparent border-0 mt-auto">
          <button className="btn btn-success w-100" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
