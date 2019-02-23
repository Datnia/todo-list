import React from "react";

function Joke(props) {
  return (
    <div>
      <h3>{props.question}</h3>
      <p>{props.punchline}</p>
      <br />
    </div>
  );
}

export default Joke;
