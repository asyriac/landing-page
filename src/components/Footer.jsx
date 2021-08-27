const Footer = () => {
  return (
    <div className="mb-2 footer">
      <div className="flex flex-justify-content-center flex-wrap gap mb-1">
        <a href="/#">About</a>
        <a href="/#">Blog</a>
        <a href="/#">Team</a>
        <a href="/#">Pricing</a>
        <a href="/#">Contact</a>
        <a href="/#">Terms</a>
      </div>
      <div className="flex flex-justify-content-center flex-wrap gap mb-1">
        <a href="/#">
          <i className="fab fa-facebook"></i>{" "}
        </a>
        <a href="/#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/#">
          <i className="fab fa-twitter mr-1"></i>
        </a>
        <a href="/#">
          <i className="fab fa-github"></i>
        </a>
        <a href="/#">
          <i className="fas fa-basketball-ball"></i>
        </a>
      </div>
      <div className="text-center">
        <p>&copy; SomeCompany, Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
