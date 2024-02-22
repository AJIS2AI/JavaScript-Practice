function pickup(nums) {
  let permute = [];

  const f = (prefix, nums) => {
    for (let i=0; i<nums.length; i++) {
      permute.push(prefix + nums[i]);

      if (permute.indexOf(nums[i] + prefix) == -1) {
        permute.push(nums[i] + prefix);
      }
      f(prefix + nums[i], nums.slice(i+1));
    }
  }
  f('', nums);

  let result = permute.filter(x=> x.length == len);
  result.sort((a,b)=> {return b-a});

  return result[0];
}

const num = prompt("Input a number.").split('');
const len = +prompt("Hom many numbers do you wanna pick up?");
console.log(pickup(num));
