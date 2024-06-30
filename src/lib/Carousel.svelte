<script lang="ts">
  import { onMount } from "svelte";

  let currentIndex = 0;
  const images = [
    { src: "/images/Tree.jpg", alt: "Tree" },
    { src: "/images/Landscape.jpg", alt: "Landscape" },
    { src: "/images/Sunset.jpg", alt: "Sunset" },
  ];

  let items: HTMLElement[] = [];
  let thumbnails: HTMLElement[] = [];

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlider();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlider();
  }

  function showSlider() {
    items.forEach((item, index) => {
      item.classList.toggle("active", index === currentIndex);
    });
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.classList.toggle("active", index === currentIndex);
    });
  }

  onMount(() => {
    items = Array.from(document.querySelectorAll(".slider .list .item")) as HTMLElement[];
    thumbnails = Array.from(document.querySelectorAll(".thumbnail .item")) as HTMLElement[];

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        currentIndex = index;
        showSlider();
      });
    });

    const interval = setInterval(next, 8000);

    return () => clearInterval(interval);
  });
</script>

<div class="custom-body">
  <div class="slider-container">
    <div class="slider">
      <div class="list">
        {#each images as image, index}
          <div class="item {index === 0 ? 'active' : ''}">
            <img src={image.src} alt={image.alt} />
            <div class="content">
              <h2>Slider {index + 1}</h2>
              <p>This is a test description to showcase how it will look in the actual carousel when the project will move to production stage</p>
              <button class="carousel-list-button">Click Me!</button>
            </div>
          </div>
        {/each}
      </div>
    </div>
    <div class="arrows">
      <button id="prev" on:click={prev}>&lt;</button>
      <button id="next" on:click={next}>&gt;</button>
    </div>
    <div class="thumbnail-container">
      <div class="thumbnail">
        {#each images as image, index}
          <div class="item {index === 0 ? 'active' : ''}">
            <img src={image.src} alt={image.alt} />
            <div class="content">Name Slider</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

  .custom-body {
    font-family: Poppins, sans-serif;
    margin: 0;
    background-color: #010101;
    color: #eee;
    border: 3px solid white;
    border-top: 0px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-end-start-radius: 30px;
    border-end-end-radius: 30px;
  }

  .slider-container {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .slider {
    flex: 1;
    position: relative;
    margin-top: -50px;
  }

  .slider .list {
    position: relative;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }

  .slider .list .item {
    position: absolute;
    inset: 0;
    overflow: hidden;
    opacity: 0;
    transition: 0.5s;
  }

  .slider .list .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slider .list .item::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(to top, #000000 2%, transparent);
  }

  .slider .list .item .content {
    position: absolute;
    left: 10%;
    top: 20%;
    width: 500px;
    max-width: 80%;
    z-index: 1;
  }

  .slider .list .item .content p:first-child {
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  .slider .list .item .content h2 {
    font-size: 100px;
    margin: 0;
  }

  .slider .list .item .content p,
  .slider .list .item .content button {
    margin: 10px 0;
    opacity: 0;
    transform: translateY(30px);
    filter: blur(20px);
    transition: opacity 0.5s 0.7s, transform 0.5s 0.7s, filter 0.5s 0.7s;
  }

  .slider .list .item.active .content p,
  .slider .list .item.active .content button {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  .slider .list .item.active {
    opacity: 1;
    z-index: 10;
  }

  @keyframes showContent {
    to {
      transform: translateY(0);
      filter: blur(0);
      opacity: 1;
    }
  }

  .slider .list .item.active p:first-child,
  .slider .list .item.active h2,
  .slider .list .item.active p:last-child,
  .slider .list .item.active button {
    transform: translateY(30px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent 0.5s 0.7s ease-in-out 1 forwards;
  }

  .slider .list .item.active h2 {
    animation-delay: 1s;
  }

  .slider .list .item.active p,
  .slider .list .item.active button {
    animation-delay: 1.3s;
    animation-duration: 1.3s;
  }

  .arrows {
    position: absolute;
    bottom: 180px; /* Adjust this value as needed to place the arrows just above the thumbnails */
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 100;
  }

  .arrows button {
    background-color: #eee5;
    border: none;
    font-family: monospace;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: x-large;
    color: #eee;
    transition: 0.5s;
  }

  .arrows button:hover {
    background-color: #eee;
    color: black;
  }

  .thumbnail-container {
    position: relative;
    padding: 20px 50px;
    box-sizing: border-box;
  }

  .thumbnail {
    display: flex;
    gap: 10px;
    width: 100%;
    height: 150px;
    overflow-x: auto;
    justify-content: center;
  }

  .thumbnail::-webkit-scrollbar {
    width: 0;
  }

  .thumbnail .item {
    width: 150px;
    height: 100%;
    filter: brightness(0.5);
    transition: 0.5s;
    flex-shrink: 0;
  }

  .thumbnail .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .thumbnail .item.active {
    filter: brightness(1.5);
  }

  .thumbnail .item .content {
    position: absolute;
    inset: auto 10px 10px 10px;
  }

  .carousel-list-button {
    margin-top: 25px;
    background: rgba(255, 255, 255, 0.3);
    border: none;
    padding: 10px 20px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
  }

  .carousel-list-button:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.05);
  }

  .carousel-list-button:active {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(0.95);
  }

  @media screen and (max-width: 678px) {
    .thumbnail {
      justify-content: start;
    }

    .slider .list .item .content h2 {
      font-size: 60px;
    }
  }
</style>
