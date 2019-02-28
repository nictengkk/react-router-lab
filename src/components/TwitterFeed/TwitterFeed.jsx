import React from "react";
import queryString from "query-string";

function TwitterFeed({ data, location }) {
  const originalString = location.search;

  const parsed = queryString.parse(originalString);

  if (location.search) {
    return (
      <div>
        <p>This is your search query:</p>
        <p>Search Term: {parsed.searchTerm}</p>
        <p>Search Term: {parsed.year}</p>
        <p>Search Term: {parsed.topic}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>This is your TwitterFeed</p>
        <p>{data}</p>
      </div>
    );
  }
}

export default TwitterFeed;
