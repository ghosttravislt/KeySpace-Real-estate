import TrendImg from "../assets/Images/trend-img.jpg";
import TrendImg1 from "../assets/Images/trend-img2.jpg";
import TrendImg2 from "../assets/Images/trend-img4.jpg";

const Location = () => {
  const tetx1 = ` Stay informed and updated with the latest trends, home improvement
          ideas, and our clients story who have achieved their real estate
          dreams`;

  return (
    <>
      <div className="title-container">
        <div className="country-title1">
          Uncover The Latest Trends And Stories
        </div>
        <div className="trends-text">{`${tetx1}`}</div>
      </div>
      <div className="trends-container">
        <div className="trends-cards">
          <img src={TrendImg} alt="" className="trend-img" />
          <div className="cards-text">
            {/* category section */}
            <div className="cat-section">
              <p className="cat-text">Unique housing</p>
              <a href="#" className="arrow">
                <i className="fi fi-bs-arrow-up-right arrow-icon"></i>
              </a>
            </div>
            <p className="card-text-title">
              Modern architectural masterpiece featuring clean lines
            </p>

            <p className="card-time">10 hours ago</p>
          </div>
        </div>
        <div className="trends-cards">
          <img src={TrendImg1} alt="" className="trend-img" />
          <div className="cards-text">
            {/* category section */}
            <div className="cat-section">
              <p className="cat-text">Unique housing</p>
              <a href="#" className="arrow">
                <i className="fi fi-bs-arrow-up-right arrow-icon"></i>
              </a>
            </div>
            <p className="card-text-title">
              Modern architectural masterpiece featuring clean lines
            </p>

            <p className="card-time">10 hours ago</p>
          </div>
        </div>
        <div className="trends-cards">
          <img src={TrendImg2} alt="" className="trend-img" />
          <div className="cards-text">
            {/* category section */}
            <div className="cat-section">
              <p className="cat-text">Unique housing</p>
              <a href="#" className="arrow">
                <i className="fi fi-bs-arrow-up-right arrow-icon"></i>
              </a>
            </div>
            <p className="card-text-title">
              Modern architectural masterpiece featuring clean lines
            </p>

            <p className="card-time">10 hours ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
