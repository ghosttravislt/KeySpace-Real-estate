import flag from "../assets/Images/pngwing.com (2).png";
import flag1 from "../assets/Images/pngwing.com (3).png";
import flag2 from "../assets/Images/pngwing.com (4).png";
import flag3 from "../assets/Images/pngwing.com (5).png";

const Country = () => {
  return (
    <>
      <div className="country-title">Select your desired counrty </div>
      <div className="country-container">
        <div className="country-cards">
          <img src={flag} alt="The flag of ghana" className="country-img" />
          <p className="country-name">Ghana</p>
          <p className="distance">90 miles away</p>
        </div>
        <div className="country-cards">
          <img src={flag1} alt="The flag of nigeria" className="country-img" />
          <p className="country-name">Nigeria</p>
          <p className="distance">90 miles away</p>
        </div>
        <div className="country-cards">
          <img
            src={flag2}
            alt="The flag of South Africa"
            className="country-img"
          />
          <p className="country-name">South Africa</p>
          <p className="distance">90 miles away</p>
        </div>
        <div className="country-cards">
          <img src={flag3} alt="The flag of Kenya" className="country-img" />
          <p className="country-name">Kenya</p>
          <p className="distance">90 miles away</p>
        </div>
      </div>
    </>
  );
};

export default Country;
