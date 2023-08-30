import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "../Category/Category";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products />
        </div>
      </div>
    </>
  );
};

export default Home;
