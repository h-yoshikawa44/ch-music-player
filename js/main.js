/* global document, HTMLAudioElement */

import '../css/reset.css';
import '../css/style.css';

const hiddenClass = 'hidden';

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  const playButton = document.getElementById('player-button');
  const pauseButton = document.getElementById('pause-button');

  const playMusic = () => {
    if (!(audio instanceof HTMLAudioElement)) return;

    audio.play();
    playButton.classList.add(hiddenClass);
    pauseButton.classList.remove(hiddenClass);
  };

  const pauseMusic = () => {
    if (!(audio instanceof HTMLAudioElement)) return;

    audio.pause();
    pauseButton.classList.add(hiddenClass);
    playButton.classList.remove(hiddenClass);
  };

  playButton.addEventListener('click', playMusic);
  pauseButton.addEventListener('click', pauseMusic);
});
