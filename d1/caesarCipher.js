const ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split('');

const caesarCipher = (str, key) => {
  return str.split('').map(c => {
    if (c === ' ') {
      return c;
    } else {
      return returnVal(c, key);
    }
  }).join('');
}

const returnVal = (char, key) => {
  let currVal = ALPHA.indexOf(char);
  let target = currVal + key;

  if (target < 0) {
    return ALPHA[ALPHA.length + target]
  } else if (target > (ALPHA.length - 1)) {
    return ALPHA[target - ALPHA.length]
  } else {
    return ALPHA[target]
  }
}