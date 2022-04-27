let c,f;

c=Number(prompt("Enter a temp in C")).toFixed(2);

f = (c* 9/5 + 32).toFixed(2);

console.log(`${c} C= ${f} F`);