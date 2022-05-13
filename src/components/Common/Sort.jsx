const Sort = (props) => {
  return (
    <span className="flex flex-col">
      <button
        onClick={() => {
          props.porp1.sortFunction(1, props.prop2);
        }}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
          className="bi bi-caret-up"
        >
          <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
        </svg>
      </button>
      <button
        onClick={() => {
          props.porp1.sortFunction(-1, props.prop2);
        }}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down"
          viewBox="0 0 16 16"
        >
          <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
        </svg>
      </button>
    </span>
  );
};
export default Sort;
