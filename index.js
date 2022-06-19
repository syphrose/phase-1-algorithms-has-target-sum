
function hasTargetSum(array, target) {
  // Write your algorithm here
  let pair=[]
  for(let i=0; i<array.length; i++){
    for(let j=i; j<array.length; j++){
      if(array[i]+array[j]==target){
        pair.push(array[i]);
        pair.push(array[j]);
        return true
      }
      else if ((array[j] + array[j])===target || (array[i] + array[i])===target ) {
        return false
      }
      else if ((array.length===1)){
        return false
      }
    }
  }

  return 
}
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
