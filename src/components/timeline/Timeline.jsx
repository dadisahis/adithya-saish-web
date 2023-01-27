import react from "react";
import "./timeline.scss";

function Timeline(data) {
  return (
    <div className="timeline_container">
      <div className="timeline_left">
        <div className="year_rectangle">
          <p>{data.data.year}</p>
        </div>
        <div className="year_arrow"></div>
      </div>

      <div className="timeline_center">
        <div className="circle_highlight">
          <div className="circle"></div>
        </div>
        <div className="vl_container">
          <div className="vl"></div>
        </div>
      </div>
      <div className="timeline_right">
        <div className="profile_name">
          <p>{data.data.profile_name}</p>
        </div>
        <div className="company_name">
          <p>{data.data.company_name}</p>
        </div>
        <div className="time_location_container">
          <div className="time">
            <p>{data.data.timeline}</p>
          </div>
          <div className="location">
            <p>{data.data.location}</p>
          </div>
        </div>
        <div className="description">
          <h4>Achievements/Tasks</h4>
          <ul>
            {data.data.experience.map((item) => (
              <li>
                {" "}
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
