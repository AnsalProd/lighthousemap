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

  // Show section
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
      const key = item.dataset.section;
      showSection(key);
      document.getElementById('contentSections').scrollIntoView({behavior:'smooth'});
      sidebar.classList.add('hidden');
      toggleBtn.style.transform = 'translateX(0)';
    });
  });

  // Sidebar toggle
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.toggle-btn');

  toggleBtn.addEventListener('click', () => {
    // تفعيل حركة الصعود للأعلى
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // تفعيل / تعطيل الشريط الجانبي
    sidebar.classList.toggle('hidden');
    toggleBtn.classList.toggle('move-left');

    // إضافة حركة ارتداد صغيرة للزر
    toggleBtn.classList.add('clicked');
    setTimeout(() => toggleBtn.classList.remove('clicked'), 500); // إزالة الحركة بعد نصف ثانية
  });

  // إغلاق الشريط عند الضغط في أي مكان خارج
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      sidebar.classList.add('hidden');
      toggleBtn.classList.remove('move-left');
    }
  });

  // إغلاقه أيضًا عند الضغط على أي قسم داخله
  sidebar.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-item')) {
      sidebar.classList.add('hidden');
      toggleBtn.classList.remove('move-left');
    }
  });
  // Updates ticker
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
    uIndex = (uIndex+1) % updates.length;
  }
  tick();
  setInterval(tick,4000);

})();



