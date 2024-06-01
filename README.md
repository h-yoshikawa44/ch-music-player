<!-- Please update value in the {}  -->

<h1 align="center">Music Player</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://h-yoshikawa44.github.io/ch-music-player/">
      Demo
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/solution/17324">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenge/music-player">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Desktop](#desktop)
  - [Mobile](#mobile)
  - [Built With](#built-with)
- [Features](#features)
- [How To Use](#how-to-use)
- [learned/improved](#learnedimproved)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

### Desktop

![overview - desktop](./screenshots/desktop.png)

### Mobile

<img src="./screenshots/mobile.png" alt="overview - mobile" width="50%">

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

Base

- [HTML](https://developer.mozilla.org/ja/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/ja/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/ja/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/)：20.11.1
- [Vite](https://ja.vitejs.dev/)：5.2.7

Other major libraries

- [Lightning CSS](https://lightningcss.dev/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenge/music-player) was to build an application to complete the given user stories.

- [x] Create a music player app that matches the given design.
- [x] Use HTML to create the basic structure.
- [x] Add image, title, author, progress bar, player button,... according to the design.
- [x] Use vanilla JavaScript to add interactivity.
- [x] Users should be able to play and stop the current song.
- [x] Users should be able to go to next and previous songs.
- [x] Users should be able to change play time with the progress bar.
- [x] The page should be responsive on different screen sizes.
- [x] Deploy the solution and submit Repository URL and Demo URL.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/h-yoshikawa44/ch-music-player.git
# or
git clone git@github.com:h-yoshikawa44/ch-music-player.git

# Install dependencies
npm install

# Run the Vite
npm run dev
```

## learned/improved

The music player functionality could be implemented more cleanly if implemented in a class...

- Basic usage of web audio api.
- How to customize input type=range to create a music playback seek bar mechanism.
  - The system of updating the color of the seek bar with JavaScript according to the song playback position was particularly impressive.

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For exmpale -->

- [MDN - HTMLMediaElement](https://developer.mozilla.org/ja/docs/Web/API/HTMLMediaElement)
- [MDN - String.prototype.padStart()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [input type="range"](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/range)
- [audio タグ（要素）を Javascript を使って操作](https://www.webdesignleaves.com/pr/jquery/javascript-audio.html)
- [input type=range レンジスライダーをカスタマイズ](https://www.webdesignleaves.com/pr/css/input-range-style.html)

## Contact

- Website：[h-yoshikawa44.com](https://h-yoshikawa44.com)
- GitHub：[@h-yoshikawa44](https://github.com/h-yoshikawa44)
- Twitter：[@yoshi44_lion](https://twitter.com/yoshi44_lion)
