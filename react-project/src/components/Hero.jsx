const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>Your Feet Deserve The Best</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btns">
        <button>Shop Now</button>
        <button>Categories</button>
        </div>
        
        <p>Also Available on</p>
        <div className="brand-logo">
            <img src="images/flipkart.png" alt="flipkart-logo"></img>
            <img src="images/amazon.png" alt="Amazon-logo"></img>
        </div>
      </div>
      <div className="hero-image">
        <img src="images/shoe_image.png" alt="shoes"></img>
      </div>
    </main>
  );
};

export default Hero;
