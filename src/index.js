/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  preferences.forEach((value, lover) => {
    let whoHeLove = value - 1; 
    let i = 0;
    const apexesOfTriangle = [whoHeLove];
    while (i < 2) {
      const nextLover = preferences[whoHeLove] - 1;
      if (!apexesOfTriangle.includes(nextLover)) {
        apexesOfTriangle.push(nextLover);
        whoHeLove = nextLover;
      }
      i++;
    }
    if (apexesOfTriangle.length === 3 && whoHeLove === value - 1) {
      count++
    }
  });
  return count;
};
