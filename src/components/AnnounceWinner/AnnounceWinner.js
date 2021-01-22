/*
  Create a new array of arrays (result), to split the allGrids
  array into rows, columns or diagonals we are going to check for the winner.
  While we are splitting, we are also changing the initial value of "null"
  with "X" or "O", which ever is clicked by the user.
*/

export const announceWinner = (rows, allGrids) => {
  const result = [];

  let linesToCheck = [];
  let index = 0;

  for (let i = 0; i < rows; i++) {
    linesToCheck = [];
    for (let j = 0; j < rows; j++) {
      linesToCheck.push(allGrids[j + index]);
    }
    result.push(linesToCheck);
    index += rows;
  }

  for (let i = 0; i < rows; i++) {
    index = i;
    linesToCheck = [];
    for (let j = 0; j < rows; j++) {
      linesToCheck.push(allGrids[index]);
      index += rows;
    }
    result.push(linesToCheck);
  }

  linesToCheck = [];
  index = 0;
  for (let i = 0; i < rows; i++) {
    linesToCheck.push(allGrids[i + index]);
    index += rows;
  }
  result.push(linesToCheck);

  linesToCheck = [];
  index = rows - 1;
  let start = allGrids.length - 1;
  for (let i = 0; i < rows; i++) {
    linesToCheck.push(allGrids[start - index]);
    index += rows - 1;
  }
  result.push(linesToCheck);

  /*
  Every time a new square is clicked, we check if the chunks of arrays
  we splitted above meets the criteria of winning, that is if values
  in one of the arrays are either all X or all O.
  */

  const isX = currentValue => currentValue === "X";
  const isO = currentValue => currentValue === "O";
  for (let i = 0; i < result.length; i++) {
    let isAllX = result[i].every(isX);
    let isAllO = result[i].every(isO)
    if (isAllX || isAllO) {
      return `Winner is ${isAllX ? "X" : "O"}`;
    }
  }
}
