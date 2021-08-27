const Hero = () => {
  return (
    <div className="hero-container gap">
      <div className="text-center">
        <h1 className="font-lg">Start Crafting Your</h1>
        <h1 className="font-lg font-color-primary ">Next Great Idea</h1>
      </div>
      <p className="text-center hero-text mb-2">Simplifying the creating of landing pages, blog pages, application pages and so much more!</p>
      <div className="flex flex-col text-center">
        <div className="pill-container mb-2">
          <a href="/#" className="btn ">
            Purchase Now
          </a>
          <span className="pill">only $15/mo</span>
        </div>
        <a href="/#" className="font-color-primary">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Hero;
