import react from "react";
import "./timeline.scss";

function Timeline() {
  return (
    <div className="timeline_container">
      <div className="timeline_left">
        <div className="year_rectangle">
          <p>2021</p>
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
          <p>Software Developer</p>
        </div>
        <div className="company_name">
          <p>Superbolter</p>
        </div>
        <div className="time_location_container">
          <div className="time">
            <p>June 2020 - July 2021</p>
          </div>
          <div className="location">
            <p>Bangalore</p>
          </div>
        </div>
        <div className="description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
