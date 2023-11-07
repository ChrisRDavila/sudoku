import { Column } from './../src/column.js';

describe('column', () => {

  test('should create column object from column constructor', () => {
    const column = new Column(1,2,3,4,5,6,7,8,9);
    expect(column.tile1).toEqual(1);
    expect(column.tile2).toEqual(2);
    expect(column.tile3).toEqual(3);
    expect(column.tile4).toEqual(4);
    expect(column.tile5).toEqual(5);
    expect(column.tile6).toEqual(6);
    expect(column.tile7).toEqual(7);
    expect(column.tile8).toEqual(8);
    expect(column.tile9).toEqual(9);
  });

  // test('should return true if all numbers only appear once in column', () => {
  //   const column = new Column(1,2,3,4,5,6,7,8,9);
  //   expect(column.doublesCheck()).toBe(true);
  // });

  // test('should return false if all numbers only appear once in column', () => {
  //   const column = new Column(1,1,3,4,5,6,7,8,9);
  //   expect(column.doublesCheck()).toBe(false);
  // });

  // test('should return true if all tiles are numbers from 1 to 9', () => {
  //   const column = new Column(1,2,3,4,5,6,7,8,9);
  //   expect(column.numberCheck()).toBe(true);
  // });

  // test('should return false if any of the tiles is not a number from 1 to 9', () => {
  //   const column = new Column(0,2,3,4,5,6,7,8,9);
  //   expect(column.numberCheck()).toBe(false);
  // });

})