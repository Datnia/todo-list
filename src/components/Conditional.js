import React from "react";

function Conditional(props) {
  return (
    <div>
      <h1>header</h1>

      {props.isLoading ? <h1>hello</h1> : <h1>goodbye</h1>}

      <h1>footer</h1>
    </div>
  );
}

export default Conditional;
