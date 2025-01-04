import icon from "../assets/Images/home (2).png";
import icon1 from "../assets/Images/bar-chart.png";
import icon2 from "../assets/Images/honesty.png";
import icon3 from "../assets/Images/new-house.png";
const Service = () => {
  return (
    <>
      <div className="country-title">Our services </div>;
      <div className="services-container">
        <div className="services-card">
          <img src={icon} alt="home icon" className="icon" />
          <div className="service-detial">
            <p className="service-title">Sell your home</p>
            <p className="service-info">
              We sell your home at the best market price and very quickly as
              well.
            </p>
          </div>
        </div>
        <div className="services-card">
          <img src={icon1} alt="" className="icon" />
          <div className="service-detial">
            <p className="service-title">Buy your home</p>
            <p className="service-info">
              We offer you free consultancy to get a loan for your new frame.
            </p>
          </div>
        </div>
        <div className="services-card">
          <img src={icon2} alt="" className="icon" />
          <div className="service-detial">
            <p className="service-title">Legal services</p>
            <p className="service-info">
              We offer expert legal help for all related property items
            </p>
          </div>
        </div>
        <div className="services-card">
          <img src={icon3} alt="" className="icon" />
          <div className="service-detial">
            <p className="service-title">Free evalution</p>
            <p className="service-info">
              We do a free evaluation to be sure you want to start selling
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
