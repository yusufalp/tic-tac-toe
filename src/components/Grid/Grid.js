import './Grid.css';

const Grid = (props) => {
  return (
    <>
      <div
        className={`grid ${props.rows >= 12 ? "small-grid" : ""} ${props.value === "X" ? "red" : "green"}`}
        onClick={() => props.handleGridClick(props.index)}>
        {props.value}
      </div>
      {props.index % props.rows === props.rows - 1 ? <br /> : ''}
    </>
  );
}

export default Grid;