// Find missing no in array
let a = [0, 1, 2, 6, 4, 5];
let b = [5, 4, 3, 2, 9, 0];

function missingnum(a, b) {
  let missing =[];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      missing.push(a[i]);
    }
  }
  return missing;
}
console.log(missingnum(a,b));
