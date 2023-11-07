export function Column(tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9) {
  this.tile1 = tile1;
  this.tile2 = tile2;
  this.tile3 = tile3;
  this.tile4 = tile4;
  this.tile5 = tile5;
  this.tile6 = tile6;
  this.tile7 = tile7;
  this.tile8 = tile8;
  this.tile9 = tile9;
}

Column.prototype.doublesCheck = function() {
  const column = [this.tile1, this.tile2, this.tile3, this.tile4, this.tile5, this.tile6, this.tile7, this.tile8, this.tile9];
  let checkArray = [];
  let allGood = true;
  for (let i = 0; i < column.length; i++) {
    if (checkArray.includes(column[i])) {
      allGood = false;
    } else {checkArray.push(column[i])};
  }
  return allGood;
};

Column.prototype.numberCheck = function() {
  const column = [this.tile1, this.tile2, this.tile3, this.tile4, this.tile5, this.tile6, this.tile7, this.tile8, this.tile9];
  let allGood = true;
  column.forEach(function(tile) {
    if (tile < 1 || tile > 9) {
      allGood = false;
      }
    });
    return allGood
  }