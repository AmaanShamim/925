import "./SingleProduct.scss";
import RealatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaCartPlus,
  FaStar,
} from "react-icons/fa";
import { GiDiamondRing, GiReturnArrow } from "react-icons/gi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { PiAirplaneInFlightLight } from "react-icons/pi";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const product = data?.data[0].attributes;
  const { handleAddToCart } = useContext(Context);
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  if (!data) return;
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product.image.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title} </span>
            <span className="highlight">
              Made With 925 Silver  
              <FaStar />
            </span>
            <div className="price-banner">
              <span className="price">&#8377;{product.price} </span>
              <span className="price-sec">
                MRP &#8377;<span className="price-cut">{product.priceCut}</span>{" "}
                (Incl. of all the taxes){" "}
              </span>
            </div>
            <span className="description">{product.description}</span>
            <div className="product-qualities">
              <div className="quality">
                <GiDiamondRing />
                <span>100% pure 925 silver</span>
              </div>
              <div className="quality">
                <AiOutlineFileProtect />
                <span>3 Months warranty</span>
              </div>
              <div className="quality">
                <GiReturnArrow />
                <span>7 Days easy return</span>
              </div>
              <div className="quality">
                <PiAirplaneInFlightLight />
                <span>Free Shipping</span>
              </div>
            </div>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity} </span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <div className="phn-description">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      PRODUCT DESCRIPTION
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">{product.description}</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      MORE DETAILS
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>Free express shipping</li>
                        <li>7 days return policy</li>
                        <li>3 month warranty</li>
                        <li>
                          International shipments will be delivered in 14 days
                        </li>
                        <li>
                          Brand owned and marketed by: Kiran Jewellers Private
                          Limited, Surat - Dumas Rd, Piplod, Surat, Gujarat,
                          395007
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category :{" "}
                <span>{product.categories.data[0].attributes.title}</span>
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
        <RealatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
