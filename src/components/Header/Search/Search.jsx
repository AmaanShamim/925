import "./Search.scss";
import { MdClose } from "react-icons/md";
import ProductImg from "../../../assets/products/product-img.jpg";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" placeholder="Search for products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={ProductImg} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">product name</span>
              <span className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                voluptate recusandae magnam harum vitae, a molestias
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
