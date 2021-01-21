import React from 'react';
import './Grid.css';

const Grid = (props) => {
  return (
    <>
      <div
        className={`grid ${props.rows >= 10 ? "small-grid" : ""}`}
        onClick={() => props.handleGridClick(props.index)}>
        {props.value}
      </div>
      {props.index % props.rows === props.rows - 1 ? <br /> : ''}
    </>
  );
}

export default Grid;