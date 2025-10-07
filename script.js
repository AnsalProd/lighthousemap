(function(){
      const navItems = document.querySelectorAll('.nav-item');
      const sections = {
        library: document.getElementById('librarySection'),
        stories: document.getElementById('storiesSection'),
        leaders: document.getElementById('leadersSection'),
        archive: document.getElementById('archiveSection'),
        parties: document.getElementById('partiesSection'),
        shop: document.getElementById('shopSection'),
        feedback: document.getElementById('feedbackSection')
      };

      // Hide all sections except library on load
      function showSection(key){
        Object.values(sections).forEach(sec=>sec.style.display='none');
        if(sections[key]){
          sections[key].style.display='block';
          sections[key].classList.add('fade-in');
        }
      }
      showSection('library');

      navItems.forEach(item=>{
        item.addEventListener('click', ()=>{
          navItems.forEach(i=>i.classList.remove('active'));
          item.classList.add('active');
          const key = item.getAttribute('data-section');
          showSection(key);
          // scroll to content area smoothly
          document.getElementById('contentSections').scrollIntoView({behavior:'smooth'});
        });
      });

      // Sidebar toggle (collapse)
      const sidebar = document.querySelector('.sidebar');
      const toggleBtn = document.querySelector('.toggle-btn');
      toggleBtn.addEventListener('click', (e) => {
      sidebar.classList.toggle('hidden');
       toggleBtn.style.transform = sidebar.classList.contains('hidden') 
    ? 'translateX(0)' 
    : 'translateX(-250px)';
      });
      document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
       toggleBtn.style.transform = sidebar.classList.contains('hidden') 
    ? 'translateX(0)' 
    : 'translateX(-250px)';
  }
});
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
      sidebar.classList.toggle('hidden');
       toggleBtn.style.transform = sidebar.classList.contains('hidden') 
    ? 'translateX(0)' 
    : 'translateX(-250px)';
  });
});
    
      // Updates rotor (carousel-like updates)
      const updates = [
        'تم الإعلان عن مسابقة جديدة في لجنة المسابقات — شارك الآن!',
        'ورشة إدارة الوقت قادمة الأسبوع المقبل — سجّل حضورك.',
        'قائمة الفائزين في مسابقة الربيع 2024 صارت متاحة في الأرشيف.',
        'حفل افتراضي: لقاء القادة بعد شهر — تفاصيل لاحقًا.'
      ];
      let uIndex=0;
      const updatesEl = document.getElementById('updates');
      function tick(){
        updatesEl.innerHTML = `<p>${updates[uIndex]}</p>`;
        uIndex = (uIndex+1)%updates.length;
      }
      tick();
      setInterval(tick,4000);

      // Entities click: scroll to top hero and highlight intro (example behaviour)
      document.querySelectorAll('.entity').forEach((el,i)=>{
        el.addEventListener('click',()=>{
          // simple example: scroll to top and flash
          window.scrollTo({top:0,behavior:'smooth'});
          el.animate([{transform:'scale(1)'},{transform:'scale(1.04)'},{transform:'scale(1)'}],{duration:600,iterations:1});
        })
      });

    })();