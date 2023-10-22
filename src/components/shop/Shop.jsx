import { useEffect, useState } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
const Shop = () => {
  const [products, setProducts] = useState(null);
  let [loading, setLoading] = useState(false);

  const getProducts = () => {
    setLoading(true);
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setProducts(json);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <Spinner animation="grow" size="lg" />;
  }

  return (
    <>
      <h1>Products</h1>
      <div className="products-list">
        {products?.map((product) => {
          return (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt="" />

              <h2>{product.title}</h2>
              <p>{product.category}</p>

              {product.price}
              <p>{product.rating.rate}</p>

              <Link to={`/shop/${product.title}/${product.id}`}>
                Show Details
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
