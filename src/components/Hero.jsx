const Hero = () => {
  return (
    <>
      <div className="hero-sec">
        <div className="hero-title">Find and choose where you will live</div>
        <form action="" className="form-input">
          <div>
            <label htmlFor="location"> location</label>
            <input type="text" placeholder="Where do you live?" />
          </div>
          <div>
            <label htmlFor="Prop-Type">Prop-Type</label>
            <input type="text" placeholder="property type?" />
          </div>
          <div>
            <label htmlFor="Price-Range"> Price Range</label>
            <input type="text" placeholder="What is your price?" />
          </div>
          <div>
            <label htmlFor="Size-Range">Size Range</label>
            <input type="text" placeholder="What is your size pref?" />
          </div>
          <div className="submit">
            <button className="btn3">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Hero;
