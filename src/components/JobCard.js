import React from "react";
import { Card } from "react-bootstrap";

const JobCard = ({ job }) => {
  return (
    <Card className="job-card">
      <div className="d-flex justify-content-between mb-2">
        <div className="d-flex gap-2">
          <img src={job.logo} alt="Company logo" className="company-logo" />
          <div>
            <h5 className="mb-0">{job.title}</h5>
            <span className="text-muted small">
              {job.companyName || "Company Name"}
            </span>
          </div>
        </div>
        <div className="favorite">♡</div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="salary">{job.salary}</div>
        <div className="location">{job.location}</div>
      </div>
      <div className="text-end mt-1">
        <small className="text-muted">{job.postDate || "01/05/2025"}</small>
      </div>
    </Card>
  );
};

export default JobCard;
