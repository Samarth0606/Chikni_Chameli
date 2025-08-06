let n = process.argv.pop();
let count3 = 1;
let count5 = 1;
for(let i=1;i<=n;i++){
    let str = "";
    if(count3 === 3){ str+="Fizz"; count3=0; }
    if(count5 === 5){ str+="Buzz"; count5=0; }
    if(str === ""){ str+=i }
    count3++;
    count5++;
    console.log(str);
}


