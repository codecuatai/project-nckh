import React from "react";
import { Card } from "react-bootstrap";

const CVCard = ({ cv }) => {
  return (
    <div className="cv-card">
      <img src={cv.image} alt={cv.title} />
      <div className="p-3">
        <div className="cv-tags mb-1">
          {cv.tags.map((tag, index) => (
            <span key={index} className={tag.highlighted ? "text-muted" : ""}>
              {tag.name}
            </span>
          ))}
        </div>
        <div className="cv-title">{cv.title}</div>
      </div>
    </div>
  );
};

export default CVCard;
