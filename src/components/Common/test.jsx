import { useReducer } from "react";

const initialstate = 0;

reducer = (state, action) => {
  if (action == "add") {
    state + 1;
  }
  if (action == "sub") {
    state--;
  }
};

const testing = () => {
  const [state, disptach] = useReducer[(reducer, initialstate)];
  return (
    <>
      <div>
        <p>{state}</p>
        <button
          onClick={() => {
            type = "add";
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            type = "sub";
          }}
        >
          sub
        </button>
      </div>
    </>
  );
};
