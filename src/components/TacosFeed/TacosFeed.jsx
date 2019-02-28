import React from "react";
import queryString from "query-string";

function TacosFeed({ match, location, history }) {
  const originalString = location.search;
  const parsed = queryString.parse(originalString);
  const onClickBack = () => {
    history.goBack();
  };
  if (location.search) {
    return (
      <div>
        <p>This is your search query:</p>
        <p>Search Term: {parsed.searchTerm}</p>
        <p>Search Term: {parsed.year}</p>
        <p>Search Term: {parsed.topic}</p>
      </div>
    );
    //do something if props.location.search exists
  } else {
    return (
      <div>
        <h1>This is your Tacos Feed!</h1>
        <p>{match.params.id}</p>
        <button onClick={onClickBack}>Back</button>
      </div>
    );
    // do something else
  }
}

export default TacosFeed;
