import { Row } from '../src/row.js';

describe('row', () => {
  
  test('should create row object from row constructor', () => {
    const row = new Row(1,2,3,4,5,6,7,8,9);
    expect(row.tile1).toEqual(1);
    expect(row.tile2).toEqual(2);
    expect(row.tile3).toEqual(3);
    expect(row.tile4).toEqual(4);
    expect(row.tile5).toEqual(5);
    expect(row.tile6).toEqual(6);
    expect(row.tile7).toEqual(7);
    expect(row.tile8).toEqual(8);
    expect(row.tile9).toEqual(9);
  });

  test('should check if number is repeated in row', () => {
    const row = new Row(1,2,3,4,5,6,7,8,9);
    const row2 = new Row(1,1,3,4,5,6,7,8,9);
    expect(row.doublesCheck()).toBe(true);
    expect(row2.doublesCheck()).toBe(false);
  });

  test('should check if all tiles are numbers from 1 to 9', () => {
    const row = new Row(1,2,3,4,5,6,7,8,9);
    const row2 = new Row(1,2,3,4,5,6,7,8,10);
    expect(row.numberCheck()).toBe(true);
    expect(row2.numberCheck()).toBe(false);
  });

})