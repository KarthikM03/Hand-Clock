setInterval(()=>{
d = new Date();
 hr = d.getHours();
m = d.getMinutes();
 s = d.getSeconds();

hrr = 30*hr + m/2;
mrr = 6*m;
sr = 6*s;
document.querySelector(".hr").style.transform = `rotate(${hrr}deg)`;
document.querySelector(".min").style.transform = `rotate(${mrr}deg)`;
document.querySelector(".sec").style.transform = `rotate(${sr}deg)`;
document.querySelector(".ci").innerHTML = `${hr}:${m}:${s}`;

},1000);
