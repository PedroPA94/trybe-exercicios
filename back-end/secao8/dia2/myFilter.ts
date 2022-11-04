type callbackFunction<T> = (item: T, index: number, array: Array<T>) => boolean

function myFilter<T>(arr: Array<T>, callback: callbackFunction<T>): Array<T> {
  const result: Array<T> = [];

  for(let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) result.push(arr[i])
  }

  return result
}