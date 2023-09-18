import React from "react";
import "./TalkCard.css";

export default function TalkCard({talkDetails}) {
  return (
    <div>
      <div className="container">
        <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              Send me a mail
            </a>
            <a href={talkDetails.event_url} target="_" className="talk-button">
              Schedule a time
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
