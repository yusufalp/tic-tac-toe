import './Dropdown.css';

const Dropdown = (props) => {
  return (
    <div className="board-select">
      <form>
        <label htmlFor="board-size"> Select Board Size
          <select
            id="board-size"
            name="board-size"
            onChange={props.handleSelect}
          >
            {props.items.map((item, i) => {
              return <option key={i} value={item}>{`${item}x${item}`}</option>
            })}
          </select>
        </label>
      </form>
    </div>
  );
}

export default Dropdown;