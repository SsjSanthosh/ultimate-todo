import React from "react";
import { connect } from "react-redux";
import { TAG_DISPLAY } from "utils/constants";
import "./style.scss";
function TagSummary({ tasks }) {
  const getTagCount = (currentTag) => {
    if (currentTag === "All") {
      return tasks.length;
    }
    let count = 0;
    tasks.forEach((task) => {
      task.tag.forEach((tag) => {
        if (tag === currentTag) count++;
      });
    });
    return count;
  };
  const renderTags = () => {
    return TAG_DISPLAY.map((tag) => {
      return (
        <div className="tag-display" key={tag.value}>
          <span className="task-tag" style={{ backgroundColor: tag.color }}>
            {tag.label}
          </span>
          <span className="tag-count">{getTagCount(tag.value)}</span>
        </div>
      );
    });
  };
  return <div className="bg-color-grey-light tags-wrapper">{renderTags()}</div>;
}

const mapStateToProps = ({ tasks }) => {
  return { tasks };
};

export default connect(mapStateToProps)(TagSummary);
