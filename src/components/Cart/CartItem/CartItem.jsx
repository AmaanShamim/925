import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import ProductImg from "../../../assets/products/product-img.jpg";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={ProductImg} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">product name</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="highlight">&#8377;499</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
