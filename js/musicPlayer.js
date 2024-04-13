/* global document, HTMLAudioElement, HTMLImageElement */

const hiddenClass = 'hidden';
const musics = [
  {
    name: 'Lost in the City Lights',
    author: 'Cosmo Sheldrake',
    src: './musics/lost-in-city-lights-145038.mp3',
    img: './images/cover-1.png',
  },
  {
    name: 'Forest Lullaby',
    author: 'Lesfm',
    src: './musics/forest-lullaby-110624.mp3',
    img: './images/cover-2.png',
  },
];
const MUSIC_PLAY_MODE = {
  PLAY: 'play',
  PAUSE: 'pause',
};

let currentMode = MUSIC_PLAY_MODE.PAUSE;
let currentMusicIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  const musicImg = document.getElementById('music-img');
  const musicName = document.getElementById('music-name');
  const musicAuthor = document.getElementById('music-author');
  const musicTime = document.getElementById('music-time');
  const audio = document.getElementById('audio');

  const previousMusicButton = document.getElementById('previous-music-button');
  const playButton = document.getElementById('player-button');
  const pauseButton = document.getElementById('pause-button');
  const nextMusicButton = document.getElementById('next-music-button');

  const setCurrentMusic = () => {
    if (
      !(audio instanceof HTMLAudioElement) ||
      !(musicImg instanceof HTMLImageElement)
    )
      return;

    musicImg.src = musics[currentMusicIndex].img;
    musicName.textContent = musics[currentMusicIndex].name;
    musicAuthor.textContent = musics[currentMusicIndex].author;
    audio.src = musics[currentMusicIndex].src;
    audio.load();

    // 再生中に曲送りをした場合は、次の曲も自動再生する
    if (currentMode === MUSIC_PLAY_MODE.PLAY) {
      audio.play();
    }
  };

  const loadMusic = () => {
    if (!(audio instanceof HTMLAudioElement)) return;

    const baseDuration = Math.floor(audio.duration);
    const minutes = Math.floor(baseDuration / 60)
      .toString()
      .padStart(2, '0');
    const duration = (baseDuration % 60).toString().padStart(2, '0');
    musicTime.textContent = `${minutes}:${duration}`;
  };

  const playMusic = () => {
    if (!(audio instanceof HTMLAudioElement)) return;

    audio.play();
    currentMode = MUSIC_PLAY_MODE.PLAY;
    playButton.classList.add(hiddenClass);
    pauseButton.classList.remove(hiddenClass);
  };

  const pauseMusic = () => {
    if (!(audio instanceof HTMLAudioElement)) return;

    audio.pause();
    currentMode = MUSIC_PLAY_MODE.PAUSE;
    pauseButton.classList.add(hiddenClass);
    playButton.classList.remove(hiddenClass);
  };

  const previousMusic = () => {
    // 今の曲が最初の曲かどうか
    if (currentMusicIndex === 0) {
      currentMusicIndex = musics.length - 1;
    } else {
      currentMusicIndex = currentMusicIndex - 1;
    }
    setCurrentMusic();
  };

  const nextMusic = () => {
    // 今の曲が最後の曲かどうか
    if (currentMusicIndex === musics.length - 1) {
      currentMusicIndex = 0;
    } else {
      currentMusicIndex = currentMusicIndex + 1;
    }
    setCurrentMusic();
  };

  setCurrentMusic();

  audio.addEventListener('loadedmetadata', loadMusic);
  playButton.addEventListener('click', playMusic);
  pauseButton.addEventListener('click', pauseMusic);
  previousMusicButton.addEventListener('click', previousMusic);
  nextMusicButton.addEventListener('click', nextMusic);
});