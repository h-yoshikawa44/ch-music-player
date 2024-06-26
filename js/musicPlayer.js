/* global document, HTMLAudioElement, HTMLImageElement, HTMLInputElement */

import LostInTheCityLightsImg from '/images/cover-1.png';
import LostInTheCityLightsSrc from '/musics/lost-in-city-lights-145038.mp3';
import ForestLullabyImg from '/images/cover-2.png';
import ForestLullabySrc from '/musics/forest-lullaby-110624.mp3';

const hiddenClass = 'hidden';
const musics = [
  {
    name: 'Lost in the City Lights',
    author: 'Cosmo Sheldrake',
    src: LostInTheCityLightsSrc,
    img: LostInTheCityLightsImg,
  },
  {
    name: 'Forest Lullaby',
    author: 'Lesfm',
    src: ForestLullabySrc,
    img: ForestLullabyImg,
  },
];
const MUSIC_PLAY_MODE = {
  PLAY: 'play',
  PAUSE: 'pause',
};
const BASE_SLIDER_COLOR = '#e5e7eb';
const ACTIVE_SLIDER_COLOR = '#c93b76';

let currentMode = MUSIC_PLAY_MODE.PAUSE;
let currentMusicIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  const musicImg = document.getElementById('music-img');
  const musicName = document.getElementById('music-name');
  const musicAuthor = document.getElementById('music-author');
  const currentMusicTime = document.getElementById('current-music-time');
  const musicTime = document.getElementById('music-time');
  const musicSlider = document.getElementById('music-slider');
  const audio = document.getElementById('audio');

  const previousMusicButton = document.getElementById('previous-music-button');
  const playButton = document.getElementById('player-button');
  const pauseButton = document.getElementById('pause-button');
  const nextMusicButton = document.getElementById('next-music-button');

  audio.preload = 'metadata';

  /**
   * 曲のセットアップ
   */
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

  /**
   * 曲の読み込み
   */
  const loadMusic = () => {
    if (!(audio instanceof HTMLAudioElement)) return;

    musicSlider.max = audio.duration;

    const baseDuration = Math.floor(audio.duration);
    const minutes = Math.floor(baseDuration / 60)
      .toString()
      .padStart(2, '0');
    const duration = (baseDuration % 60).toString().padStart(2, '0');
    musicTime.textContent = `${minutes}:${duration}`;
  };

  /**
   * 曲再生
   */
  const playMusic = () => {
    if (!(audio instanceof HTMLAudioElement)) return;

    audio.play();
    currentMode = MUSIC_PLAY_MODE.PLAY;
    playButton.classList.add(hiddenClass);
    pauseButton.classList.remove(hiddenClass);
  };

  /**
   * 曲停止
   */
  const pauseMusic = () => {
    if (!(audio instanceof HTMLAudioElement)) return;

    audio.pause();
    currentMode = MUSIC_PLAY_MODE.PAUSE;
    pauseButton.classList.add(hiddenClass);
    playButton.classList.remove(hiddenClass);
  };

  /**
   * 曲前送り
   */
  const previousMusic = () => {
    // 今の曲が最初の曲かどうか
    if (currentMusicIndex === 0) {
      currentMusicIndex = musics.length - 1;
    } else {
      currentMusicIndex = currentMusicIndex - 1;
    }
    setCurrentMusic();
  };

  /**
   * 曲後送り
   */
  const nextMusic = () => {
    // 今の曲が最後の曲かどうか
    if (currentMusicIndex === musics.length - 1) {
      currentMusicIndex = 0;
    } else {
      currentMusicIndex = currentMusicIndex + 1;
    }
    setCurrentMusic();
  };

  /**
   * input - range 要素の色更新
   *
   * range の元のスタイルを CSS の appearance で無効化しているため、CSS だけでは領域ごとの背景色指定が難しい。
   * JavaScript で塗分けるようにする。
   */
  const updateRangeGradient = () => {
    if (!(musicSlider instanceof HTMLInputElement)) return;

    const progress =
      (Number(musicSlider.value) / Number(musicSlider.max)) * 100;
    musicSlider.style.background = `linear-gradient(to right, ${ACTIVE_SLIDER_COLOR} ${progress}%, ${BASE_SLIDER_COLOR} ${progress}%)`;
  };

  /**
   * 曲の再生位置の秒数に応じて、分・秒の表示を同期
   *
   * @param {number} currentTime 今の曲の再生位置の秒数
   */
  const syncCurrentMusicTime = (currentTime) => {
    const minutes = Math.floor(currentTime / 60)
      .toString()
      .padStart(2, '0');
    const duration = (currentTime % 60).toString().padStart(2, '0');
    currentMusicTime.textContent = `${minutes}:${duration}`;
  };

  /**
   * 曲の再生位置を range に同期
   */
  const syncRange = () => {
    if (
      !(audio instanceof HTMLAudioElement) ||
      !(musicSlider instanceof HTMLInputElement)
    )
      return;

    const currentDuration = Math.floor(audio.currentTime);
    syncCurrentMusicTime(currentDuration);

    musicSlider.value = audio.currentTime;
    updateRangeGradient();
  };

  setCurrentMusic();

  audio.addEventListener('loadedmetadata', loadMusic);
  audio.addEventListener('timeupdate', syncRange);
  audio.addEventListener('ended', nextMusic);

  musicSlider.addEventListener('input', () => {
    audio.currentTime = musicSlider.value;
    syncCurrentMusicTime(musicSlider.value);
    updateRangeGradient();
  });

  playButton.addEventListener('click', playMusic);
  pauseButton.addEventListener('click', pauseMusic);
  previousMusicButton.addEventListener('click', previousMusic);
  nextMusicButton.addEventListener('click', nextMusic);
});
