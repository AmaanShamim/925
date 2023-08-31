import "./SingleProduct.scss";
import RealatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaCartPlus,
} from "react-icons/fa";
import ProductImg from "../../assets/products/product-img.jpg";

const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={ProductImg} alt="" />
          </div>
          <div className="right">
            <span className="name">Product Name</span>
            <div className="price-banner">
              <span className="price">&#8377;499</span>
              <span className="price-cut">&#8377;1499</span>
            </div>
            <span className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              blanditiis et nobis asperiores eius sit expedita, corrupti in odio
              iure ab architecto eaque adipisci quisquam minima numquam omnis,
              possimus autem.
            </span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category :
                <span>Ring</span>
              </span>
              <span className="text-bold">
                Share :
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RealatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
