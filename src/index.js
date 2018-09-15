/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let excludedLovers = [];
  preferences.forEach((value, lover) => {
    if (!excludedLovers.includes(lover)) {
      let whoHeLove = value - 1; 
      let i = 0;
      const apexesOfTriangle = [lover];
      while (i < 3) {
        const nextLover = preferences[whoHeLove];
        if (!apexesOfTriangle.includes(whoHeLove)) {
          apexesOfTriangle.push(whoHeLove);
          whoHeLove = nextLover - 1;
        } else if (
          apexesOfTriangle.length === 3 && whoHeLove === lover
        ) {
          excludedLovers.push(...apexesOfTriangle);
          count++
        }
        i++;
      }
    }  
  });
  return count;
};
