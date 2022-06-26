const ftoc = function(f) {
  let c = (f - 32) * 5 / 9;
  if (parseInt(c) === c)
    return c
  return Number(c.toFixed(1))
};

const ctof = function(c) {
  let f = c * 9 / 5 + 32;
  if (parseInt(f) === f)
    return f
  return Number(f.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
