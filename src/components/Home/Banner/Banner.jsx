import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <div className="text-content">
            <h1>Happy Raksha-Bhandhan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil delectus doloremque beatae eius saepe praesentium, inventore voluptate fuga quis repudiandae nulla ab cumque sequi eaque tenetur aut dolores alias placeat?</p>
            <div className="ctas">
                <div className="cta-banner">read more</div>
                <div className="cta-banner V2">shop now</div>
            </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
