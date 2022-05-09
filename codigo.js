function rangeOfNumbers(min,max) {
    let arr = [];
    if (min === max) {
        return min;
    } else {
      do {
          arr.push(min);
          min++
      } while (min < max + 1);
    } 
    return arr
}

document.write(rangeOfNumbers(5,20));

//Range of numbers function.