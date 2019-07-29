let args = process.argv.splice(2);

const LIGHT_GRID = 
[
  [1,4,5,16,17],
  [2,3,6,15,18],
  [9,8,7,14,19],
  [10,11,12,13,20],
  '25 24 23 22 21'.split(' ').map(c => Number(c))
]

const fantabulous = (timeInSeconds) => {
  for (let i = 0; i < LIGHT_GRID.length; i++) {
    for (let j = 0; j < LIGHT_GRID[i].length; j++) {
      if(LIGHT_GRID[i][j] === timeInSeconds) {
        return [j + 1, i + 1];
      }
    }
  }
}

console.log(args)
console.log(fantabulous(Number(args[0])))