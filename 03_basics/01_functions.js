function solve(nums1 , nums2){
  return nums1+nums2;
}

console.log(solve(3,7));

function  loginuser(username){
  if(!username){
    console.log("Please enter the username");
    return ;
  }
  return `${username} just logged in`
}

console.log(loginuser("manash"));