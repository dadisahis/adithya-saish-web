import react from "react";
import "./certifications.scss";
import Azure from "../../assets/Azure.png";

function Certifications(data) {
  return (
    <div className="certification_container">
      <div className="certification_left">
        <img src={data.data.image} alt="" />
      </div>
      <div className="certification_right">
        <p className="certification_name">{data.data.name}</p>
        <p className="issuer">{data.data.issuer}</p>
        <p className="date">{data.data.date}</p>
      </div>
    </div>
  );
}

export default Certifications;
