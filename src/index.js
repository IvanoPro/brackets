module.exports = function check(str, bracketsConfig) {
  let arrs = bracketsConfig.map(e => e.join(''))
  for (let i = 0; i < arrs.length; i++) {
    if(str.includes(arrs[i])) {
      str = str.replace(arrs[i], '');
      i=-1;
    }
  }
  return str ? false : true;
}