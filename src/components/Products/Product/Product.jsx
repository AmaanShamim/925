import "./Product.scss";
import ProductImg from "../../../assets/products/product-img.jpg";

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={ProductImg} alt="" />
            </div>
            <div className="product-details">
                <span className="name">Product Name</span>
                <span className="price">&#8377;499</span>
                <span className="price-cut">&#8377;1499</span>
            </div>
        </div>
    );
};

export default Product;
