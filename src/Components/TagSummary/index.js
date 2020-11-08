import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TAG_DISPLAY } from "utils/constants";
import "./style.scss";
import { setFilterTag } from "Redux/Data/actions";
function TagSummary() {
  const tasks = useSelector(({ tasks }) => tasks.tasks);
  const filterTag = useSelector(({ tasks }) => tasks.filterTag);
  const dispatch = useDispatch();
  const getTagCount = (currentTag) => {
    if (currentTag === "") {
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

  const handleTagSelect = (tag) => {
    dispatch(setFilterTag(tag));
  };
  const renderTags = () => {
    return TAG_DISPLAY.map((tag) => {
      return (
        <div
          className={`tag-display ${tag.value === filterTag && "selected-tag"}`}
          key={tag.value}
          onClick={() => handleTagSelect(tag.value)}
        >
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

export default TagSummary;
