const rates=[30,35,40,45,50];let r1=40,r2=40,r3=40,r5=40;
const f=n=>Math.round(n).toLocaleString('ja-JP');
function mk(id,setter){const w=document.getElementById(id);
rates.forEach(v=>{const b=document.createElement('button');b.textContent=v+'%';
if(v===40)b.classList.add('active');
b.onclick=()=>{[...w.children].forEach(x=>x.classList.remove('active'));b.classList.add('active');setter(v);calc();};
w.appendChild(b);});}
mk('m1',v=>r1=v);mk('m2',v=>r2=v);mk('m3',v=>r3=v);mk('m5',v=>r5=v);
function calc(){
let a=(+c1.value||0)*1.1;e1.textContent=f(a);s1.textContent=f(a/(1-r1/100));
need2.textContent=Math.ceil((((+c2.value||0)*1.1)/(1-r2/100))/(+p2.value||1));
let yc=((+c3.value||0)*1.1)/((+y3.value||100)/100||1);cost3.textContent=f(yc);sell3.textContent=f(yc/(1-r3/100));
let one=((+c5.value||0)*1.1)/((+n5.value||1)); if(!isFinite(one)) one=0; one5.textContent=f(one); sell5.textContent=f(one/(1-r5/100));
}
document.querySelectorAll('input').forEach(i=>i.oninput=calc); calc();
