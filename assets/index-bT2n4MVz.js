(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const e of t.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&c(e)}).observe(document,{childList:!0,subtree:!0});function m(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(n){if(n.ep)return;n.ep=!0;const t=m(n);fetch(n.href,t)}})();const u="hidden",i=[{name:"Lost in the City Lights",author:"Cosmo Sheldrake",src:"./musics/lost-in-city-lights-145038.mp3",img:"./images/cover-1.png"},{name:"Forest Lullaby",author:"Lesfm",src:"./musics/forest-lullaby-110624.mp3",img:"./images/cover-2.png"}],a={PLAY:"play",PAUSE:"pause"},T="#e5e7eb",O="#c93b76";let E=a.PAUSE,s=0;document.addEventListener("DOMContentLoaded",()=>{const d=document.getElementById("music-img"),r=document.getElementById("music-name"),m=document.getElementById("music-author"),c=document.getElementById("current-music-time"),n=document.getElementById("music-time"),t=document.getElementById("music-slider"),e=document.getElementById("audio"),v=document.getElementById("previous-music-button"),l=document.getElementById("player-button"),f=document.getElementById("pause-button"),I=document.getElementById("next-music-button");e.preload="metadata";const p=()=>{!(e instanceof HTMLAudioElement)||!(d instanceof HTMLImageElement)||(d.src=i[s].img,r.textContent=i[s].name,m.textContent=i[s].author,e.src=i[s].src,e.load(),E===a.PLAY&&e.play())},S=()=>{if(!(e instanceof HTMLAudioElement))return;t.max=e.duration;const o=Math.floor(e.duration),g=Math.floor(o/60).toString().padStart(2,"0"),L=(o%60).toString().padStart(2,"0");n.textContent=`${g}:${L}`},A=()=>{e instanceof HTMLAudioElement&&(e.play(),E=a.PLAY,l.classList.add(u),f.classList.remove(u))},B=()=>{e instanceof HTMLAudioElement&&(e.pause(),E=a.PAUSE,f.classList.add(u),l.classList.remove(u))},b=()=>{s===0?s=i.length-1:s=s-1,p()},y=()=>{s===i.length-1?s=0:s=s+1,p()},M=()=>{if(!(t instanceof HTMLInputElement))return;const o=Number(t.value)/Number(t.max)*100;t.style.background=`linear-gradient(to right, ${O} ${o}%, ${T} ${o}%)`},h=o=>{const g=Math.floor(o/60).toString().padStart(2,"0"),L=(o%60).toString().padStart(2,"0");c.textContent=`${g}:${L}`},C=()=>{if(!(e instanceof HTMLAudioElement)||!(t instanceof HTMLInputElement))return;const o=Math.floor(e.currentTime);h(o),t.value=e.currentTime,M()};p(),e.addEventListener("loadedmetadata",S),e.addEventListener("timeupdate",C),e.addEventListener("ended",y),t.addEventListener("input",()=>{e.currentTime=t.value,h(t.value),M()}),l.addEventListener("click",A),f.addEventListener("click",B),v.addEventListener("click",b),I.addEventListener("click",y)});
