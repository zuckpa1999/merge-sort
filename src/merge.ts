// Please write a typescript project with unit test:

// For implementing function with this interface
//     merge (int[] collection_1, int[] collection_2) : int []

// given
//      collection_1, collection_2 already sorted from min(0) to max

// Please provide accessible repo of typescript project with unit test
// and provide how to setup dependency and execute code and unit test

// Note: Don't allow to use any sort function

// merge sort's logic
function merge(collection1: number[], collection2: number[]): number[] {
  const merged: number[] = [];
  let i = 0;
  let j = 0;

  while (i < collection1.length && j < collection2.length) {
    if (collection1[i] < collection2[j]) {
      merged.push(collection1[i]);
      i++;
    } else {
      merged.push(collection2[j]);
      j++;
    }
  }

  // Append any remaining elements from both of the collections
  return merged.concat(collection1.slice(i), collection2.slice(j));
}

export default merge;
