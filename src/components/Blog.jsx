import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";

const Blog = () => {
  return (
    <div className="mb-lg">
      <h1 className="font-m">The Project Blog</h1>
      <p className="mb-2">Design and layouts to help you with your app.</p>
      <div className="blog-card-container-1">
        <div className="blog-card background-color-green">
          <img src={blog1} alt="blog1" />
          <div className="blog-card-content">
            <span className="tag">Resource</span>
            <h2>Refreshing Designs</h2>
            <p>Quench satisfying designs to help you stir up emotion and tell a story.</p>
          </div>
        </div>
        <div className="blog-card background-color-pink">
          <img src={blog2} alt="blog2" />
          <div className="blog-card-content">
            <span className="tag">Lifestyle</span>
            <h2>Refreshing Designs</h2>
            <p>Quench satisfying designs to help you stir up emotion and tell a story.</p>
          </div>
        </div>
        <div className="blog-card background-color-yellow">
          <img src={blog3} alt="blog3" />
          <div className="blog-card-content">
            <span className="tag">Entertainment</span>
            <h2>Refreshing Designs</h2>
            <p>Quench satisfying designs to help you stir up emotion and tell a story.</p>
          </div>
        </div>
      </div>
      <div className="blog-card-container-2">
        <div className="blog-card">
          <img src={blog4} alt="blog4" />
          <div className="blog-card-content">
            <span className="tag">Inspiration</span>
            <h4>Best workstation of the year</h4>
            <p>Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
          </div>
        </div>
        <div className="blog-card">
          <img src={blog5} alt="blog5" />
          <div className="blog-card-content">
            <span className="tag">Food</span>
            <h4>Best workstation of the year</h4>
            <p>Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
          </div>
        </div>
        <div className="blog-card">
          <img src={blog6} alt="blog6" />
          <div className="blog-card-content">
            <span className="tag">Resource</span>
            <h4>Best workstation of the year</h4>
            <p>Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
