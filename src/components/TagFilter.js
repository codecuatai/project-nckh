import React from "react";

const TagFilter = ({ tags, activeTag, onSelectTag }) => {
  return (
    <div className="d-flex flex-wrap my-3">
      {tags.map((tag, index) => (
        <div
          key={index}
          className={`tag-filter ${activeTag === tag ? "active" : ""}`}
          onClick={() => onSelectTag(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagFilter;
