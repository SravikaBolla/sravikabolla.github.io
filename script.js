(function(){
  const t=document.querySelector('[data-theme-toggle]'),
        m=document.querySelector('.menu-toggle'),
        n=document.getElementById('site-nav'),
        r=document.documentElement;
  let d=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  r.setAttribute('data-theme',d);

  function s(){
    if(!t)return;
    t.innerHTML=d==='dark'
      ?'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      :'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  s();
  t&&t.addEventListener('click',()=>{d=d==='dark'?'light':'dark';r.setAttribute('data-theme',d);s()});

  if(m&&n){
    m.addEventListener('click',()=>{
      const open=!n.classList.contains('open');
      n.classList.toggle('open',open);
      m.setAttribute('aria-expanded',String(open));
      m.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
    });
    n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      n.classList.remove('open');
      m.setAttribute('aria-expanded','false');
      m.setAttribute('aria-label','Open navigation menu');
    }));
  }

  const c=document.getElementById('countdown');
  if(c){
    const target=new Date('2026-05-21T07:30:00');
    function u(){
      let diff=target-new Date();
      if(diff<0)diff=0;
      const vals=[
        Math.floor(diff/86400000),
        Math.floor(diff/3600000%24),
        Math.floor(diff/60000%60),
        Math.floor(diff/1000%60)
      ];
      c.querySelectorAll('strong').forEach((el,i)=>el.textContent=String(vals[i]).padStart(2,'0'));
    }
    u();
    setInterval(u,1000);
  }

  const f=document.getElementById('feedback-form'),
        st=document.getElementById('form-status');
  if(f&&st){
    f.addEventListener('submit',()=>{
      st.textContent='Your email app should open with a draft message.';
    });
  }
})();