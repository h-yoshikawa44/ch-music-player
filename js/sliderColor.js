/* global document, HTMLInputElement */

/* ref: https://www.webdesignleaves.com/pr/css/input-range-style.html#h3_index_11 */

const BASE_SLIDER_COLOR = '#e5e7eb';
const ACTIVE_SLIDER_COLOR = '#c93b76';

document.addEventListener('DOMContentLoaded', () => {
  const musicSlider = document.getElementById('music-slider');

  // range の元のスタイルを CSS の appearance で無効化しているため、CSS だけでは領域ごとの背景色指定が難しい
  // JavaScript で塗分けるようにする
  musicSlider.addEventListener('input', () => {
    if (!(musicSlider instanceof HTMLInputElement)) return;

    const progress =
      (Number(musicSlider.value) / Number(musicSlider.max)) * 100;
    musicSlider.style.background = `linear-gradient(to right, ${ACTIVE_SLIDER_COLOR} ${progress}%, ${BASE_SLIDER_COLOR} ${progress}%)`;
  });
});
