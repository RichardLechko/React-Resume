import React from "react";

const HIGHLIGHT_RE = /\[\[([^\]]+)\]\]/g;

export const renderHighlighted = (text) => {
  if (!text) return null;
  const nodes = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(HIGHLIGHT_RE)) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <strong key={`hl-${key++}`} className="highlight-text">
        {match[1]}
      </strong>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
};
