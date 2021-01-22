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
