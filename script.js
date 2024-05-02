function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let m = ["", "M", "MM", "MMM"];
    let c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        if(num<4000)
        {
            let thousands = m[parseInt(num/1000)];
            let hundreds = c[parseInt((num%1000) / 100)];
            let tens = x[parseInt((num%100) / 10)];
            let ones = i[parseInt(num%10)];
                
            let ans = thousands + hundreds + tens + ones;
            // console.log(ans);
            return ans;
        }

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
