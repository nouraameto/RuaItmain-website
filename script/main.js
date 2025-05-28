const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');
const navLinks = document.querySelectorAll('nav a');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Initial state
sunIcon.style.display = 'none';

function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle('dark-mode');

  if (isDarkMode) {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
    navLinks.forEach(link => link.classList.add('dark-mode-link'));
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
    navLinks.forEach(link => link.classList.remove('dark-mode-link'));
  }
}

moonIcon.addEventListener('click', toggleDarkMode);
sunIcon.addEventListener('click', toggleDarkMode);

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

  // const loadMoreBtn = document.getElementById('load-more-videos');
  // const extraVideos = document.getElementById('team');

  // loadMoreBtn.addEventListener('click', () => {
  //   extraVideos.classList.remove('hidden');
  //   loadMoreBtn.style.display = 'none';
  // });


  const toggleBtn = document.getElementById('toggleVideosBtn');
  const extraVideos = document.querySelectorAll('.extra-video');
  let isExpanded = false;

  toggleBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;

    extraVideos.forEach(video => {
      video.classList.toggle('hidden', !isExpanded);
    });

    toggleBtn.textContent = isExpanded ? 'إخفاء الفيديوهات' : 'عرض المزيد من الفيديوهات';
  });


