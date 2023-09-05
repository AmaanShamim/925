import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({ id, data }) => {

  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={()=> navigate("/product/"+id)} >
      <div className="thumbnail">
        <img
          src={
            process.env.REACT_APP_DEV_URL + data.image.data[0].attributes.url
          }
          alt=""
        />
      </div>
      <div className="product-details">
        <span className="name">&#8377;{data.title} </span>
        <span className="price">&#8377;{data.price} </span>
        <span className="price-cut">{data.priceCut} </span>
      </div>
    </div>
  );
};

export default Product;
