import React from "react";

function TacoDetail(props) {
  return (
    <div>
      <p>This is a detailed page for taco with param {props.match.params.id}</p>
    </div>
  );
}

export default TacoDetail;
