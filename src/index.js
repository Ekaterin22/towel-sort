module.exports = function towelSort (matrix) {
  if(matrix == null || !Array.isArray(matrix)) return [];
  for(i = 0; i < matrix.length; i++){
    if(i % 2 == 0) 
    // fuction for sorting array
      matrix[i].sort((a, b) => a - b)
    else 
        // fuction for reverse sorting array
      matrix[i].sort((a, b) => a - b).reverse();
  }
  // return 1 dimensional array
  return matrix.flat();
}
