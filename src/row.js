// export function Row(tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9) {
//   this.tile1 = tile1;
//   this.tile2 = tile2;
//   this.tile3 = tile3;
//   this.tile4 = tile4;
//   this.tile5 = tile5;
//   this.tile6 = tile6;
//   this.tile7 = tile7;
//   this.tile8 = tile8;
//   this.tile9 = tile9;
// }

Row.prototype.doublesCheck = function() {
  const row = [this.tile1, this.tile2, this.tile3, this.tile4, this.tile5, this.tile6, this.tile7, this.tile8, this.tile9];
  let checkArray = [];
  let allGood = true;
  for (let i = 0; i < row.length; i++) {
    if (checkArray.includes(row[i])) {
      allGood = false;
    } else {checkArray.push(row[i])};
  }
  return allGood;
};

Row.prototype.numberCheck = function() {
  const row = [this.tile1, this.tile2, this.tile3, this.tile4, this.tile5, this.tile6, this.tile7, this.tile8, this.tile9];
  let allGood = true;
  row.forEach(function(tile) {
    if (tile < 1 || tile > 9) {
      allGood = false;
      }
    });
    return allGood
  }  

// export function Row(r1, r2, r3, r4, r5, r6, r7, r8, r9) {
//   this.r1 = r1;
//   this.r2 = r2;
//   this.r3 = r3;
//   this.r4 = r4;
//   this.r5 = r5;
//   this.r6 = r6;
//   this.r7 = r7;
//   this.r8 = r8;
//   this.r9 = r9;
// }

// export function Column(c1, c2, c3, c4, c5, c6, c7, c8, c9) {
//   this.c1 = c1;
//   this.c2 = c2;
//   this.c3 = c3;
//   this.c4 = c4;
//   this.c5 = c5;
//   this.c6 = c6;
//   this.c7 = c7;
//   this.c8 = c8;
//   this.c9 = c9;
// }

// export function Board(row, column) {
//   this.tile = row + column;
// }

// export function Block(tile) {
//   this.BlockA = [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3];
// }

// class HashTable {
//   constructor() {
//     this.values = {};
//     this.length = 0;
//     this.size = 0;
//   }
// }

// calculateHash(key) {
//   return key.toString().length % this.size;
// }

function HashBoard() {
  
}