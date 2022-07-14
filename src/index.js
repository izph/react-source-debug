import * as React from "react";
import * as ReactDOM from "react-dom";

function App(props) {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>title</h1>
      <div>count: {count}</div>
      <button
        onClick={e => {
          setCount((count) => count + 1);
        }}
      >
        +
    </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
