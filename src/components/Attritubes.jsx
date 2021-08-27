import productivity from "../assets/productivity.png";
import automate from "../assets/automate.png";

const Attributes = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-justify-content-evenly flex-align-item-center attribute-item-container">
        <img src={productivity} className="attribute-img attribute-item-container" alt="attribute-astronaut" />
        <div className="attribute-item-container ">
          <h1 className="mb-1 text-center">Boost Productivity</h1>
          <p className="text-center">Build an atomsphere that creates productivity in your organization and your company culture.</p>
          <ul>
            <li>Maximize productivity and growth</li>
            <li>Speed past your competition</li>
            <li>Learn the top techniques</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-justify-content-evenly flex-align-item-center attribute-item-container">
        <div className="attribute-item-container ">
          <h1 className="mb-1 text-center">Automated tasks</h1>
          <p className="text-center">Save time and money with our revolutionary services. We are the leaders in the industry.</p>
          <ul>
            <li>Automated task management workflow</li>
            <li>Detailed analytics for your data</li>
            <li>Some awesome integrations</li>
          </ul>
        </div>
        <img src={automate} className="attribute-img attribute-item-container" alt="attribute-robot" />
      </div>
    </div>
  );
};

export default Attributes;
