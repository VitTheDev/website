const projectUrls = [
  {
    youtubeUrl: 'https://www.youtube.com/embed/SnV3xX9GhD0',
    id: 1,
    gitHub: 'https://github.com/VitTheDev/Todo-Lists',
  },
  {
    youtubeUrl: 'https://www.youtube.com/embed/HMc3KoSY3JM',
    id: 2,
    gitHub: 'https://github.com/VitTheDev/Hangman-game',
  },
  {
    youtubeUrl: 'https://www.youtube.com/embed/C_tR0MxX7dE',
    id: 3,
    gitHub: 'https://github.com/VitTheDev/Loan-Calculator',
  },
  {
    youtubeUrl: 'https://www.youtube.com/embed/jtGKSpeBkp0',
    id: 4,
    gitHub: 'https://github.com/VitTheDev/movie-seats',
  },
  {
    youtubeUrl: 'https://www.youtube.com/embed/Osd24nmoJew',
    id: 5,
    gitHub: 'https://github.com/VitTheDev/timer',
  },
  {
    youtubeUrl: 'https://www.youtube.com/embed/d5E13WsEW1Q',
    id: 6,
    gitHub: 'https://github.com/VitTheDev/Lights-Out-Game',
  },
  {
    youtubeUrl: 'https://www.youtube.com/embed/4dzDkA9I0sE',
    id: 7,
    gitHub: 'https://github.com/VitTheDev/Timeline',
  },
  {
    youtubeUrl: 'https://www.youtube.com/embed/H8tahVEILaY',
    id: 8,
    gitHub: 'https://github.com/VitTheDev/Budget-Tracker',
  },
  {
    youtubeUrl: 'https://www.youtube.com/embed/HpLBeh0lZO8',
    id: 9,
    gitHub: 'https://github.com/VitTheDev/Let-s-Cook',
  },
];

const modal = document.getElementById('modal');
const modalBg = document.getElementById('modal-bg');
const projectsEl = document.getElementById('items');

const displayModal = () => {
  if (!modalBg.classList.contains('visible')) {
    modalBg.classList.add('visible');
  } else {
    removeModal();
  }
};

const removeModal = () => {
  const closeModalBtn = document.getElementById('closeModalBtn');
  closeModalBtn.addEventListener('click', () => {
    modalBg.classList.remove('visible');
    modal.innerHTML = '';
  });
};

projectsEl.addEventListener('click', (e) => {
  if (e.target.classList.contains('details')) {
    displayModal();
    modal.innerHTML = '';
    projectUrls.forEach((obj) => {
      if (obj.id == e.target.parentElement.id) {
        modal.innerHTML = `
       <div class="modal-video">
       <iframe src="${obj.youtubeUrl}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
       <div class="modal-text">
        <h2>GitHub Repository:</h2>
        <h3>${obj.gitHub}</h3>
        <button class="btn btn-main" id="closeModalBtn">Close</button>
       </div>
       `;
      }
    });
    removeModal();
  }
});
