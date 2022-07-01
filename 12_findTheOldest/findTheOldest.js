const findTheOldest = function (people) {
  const oldest = people.sort((p1, p2) => {
    let a2 = p2.yearOfDeath - p2.yearOfBirth;
    let a1 = p1.yearOfDeath - p1.yearOfBirth;
    return a2 > a1;
  });

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
