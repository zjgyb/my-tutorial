var minArray = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;
  let mid = 0;
  while (left < right) {
    mid = Math.ceil((left + right) / 2);
    if (numbers[left] < numbers[right]) {
      return numbers[left];
    }

    if (numbers[mid] > numbers[left]) {
      left = mid;
    } else if (numbers[mid] < numbers[right]) {
      right = mid;
    } else {
      left += 1;
    }
  }

  return numbers[mid];
};
