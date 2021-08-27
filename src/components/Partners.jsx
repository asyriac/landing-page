import disney from "../assets/disney.png";
import google from "../assets/google.png";
import hubspot from "../assets/hubspot.png";
import youtube from "../assets/youtube.png";
import slack from "../assets/slack.png";
import shopify from "../assets/shopify.png";
const Partners = () => {
  return (
    <div>
      <h3 className="text-center text-uppercase">Trusted by top-leading companies.</h3>
      <div className="flex flex-align-item-center flex-justify-content-center flex-wrap">
        <img src={disney} className="brand-img" alt="partner1" />
        <img src={google} className="brand-img" alt="partner2" />
        <img src={hubspot} className="brand-img" alt="partner3" />
        <img src={youtube} className="brand-img" alt="partner4" />
        <img src={slack} className="brand-img" alt="partner5" />
        <img src={shopify} className="brand-img" alt="partner6" />
      </div>
    </div>
  );
};

export default Partners;
