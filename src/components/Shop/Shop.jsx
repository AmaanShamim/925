import Product from "../Products/Product/Product";
import { Context } from "../../utils/context";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import "./Shop.scss";

const Shop = () => {
  const { products, setProducts } = useContext(Context);

  useEffect(() => {
    getProducts();
  },);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  return (
    <div className="products-container">
      <div className="section-heading">Shop</div>
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
