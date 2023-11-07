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
} )