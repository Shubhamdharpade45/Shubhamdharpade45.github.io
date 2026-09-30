const dot=document.querySelector('.cursor-dot'),ring=document.querySelector('.cursor-ring');
window.addEventListener('mousemove',e=>{if(dot){dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'}if(ring){ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px'}});
document.querySelectorAll('a,button,.skill-card').forEach(el=>{el.addEventListener('mouseenter',()=>{if(ring){ring.style.width='52px';ring.style.height='52px'}});el.addEventListener('mouseleave',()=>{if(ring){ring.style.width='34px';ring.style.height='34px'}})});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('.magnetic').forEach(btn=>{btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect();btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.18}px)`});btn.addEventListener('mouseleave',()=>btn.style.transform='translate(0,0)')});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id&&id!=='#'&&!id.includes('YOUR_RESUME_LINK_HERE')){const t=document.querySelector(id);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}}));
