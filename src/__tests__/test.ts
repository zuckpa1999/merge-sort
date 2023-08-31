import merge from '../merge';

describe('merge function', () => {
  it('should handle duplicate collections', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [1, 3, 5];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 1, 3, 3, 5, 5]);
  });

  it('should merge two sorted arrays', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle empty arrays', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([]);
  });

  it('should handle one empty array', () => {
    const collection1: number[] = [];
    const collection2 = [1, 2, 3];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3]);
  });

  it('should handle duplicate elements', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [3, 4, 6];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 3, 3, 4, 5, 6]);
  });
});
