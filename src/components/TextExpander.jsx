import { useState } from "react";

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const wordCount = children.split(" ").length;
  const isExpandable = wordCount > 30;
  const displayText =
    isExpanded || !isExpandable
      ? children
      : children.split(" ").slice(0, 30).join(" ") + "...";

  return (
    <span className="text-accent-100 text-xs md:text-sm opacity-80 mb-4">
      {displayText}{" "}
      {isExpandable && (
        <button
          className="text-primary-300 border-b border-primary-300 leading-3 pb-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </span>
  );
}

export default TextExpander;
