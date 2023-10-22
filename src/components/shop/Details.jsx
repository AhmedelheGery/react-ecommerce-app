import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Shop.css";

const Details = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const getSingleProduct = () => {
    return fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  console.log(product);
  return (
    <div className="product-wrapper">
      <div className="img-wrapper">
        <img src={product.image} alt="" />
      </div>
      <div className="details">
        <h2 className="text-primary">{product.category}</h2>
        <h3 className="text-success">{product.title}</h3>
        <h4 className="text-secondary">{product.description}</h4>
        <h5 className="text-warning">{product.price}</h5>
      </div>
    </div>
  );
};

export default Details;
