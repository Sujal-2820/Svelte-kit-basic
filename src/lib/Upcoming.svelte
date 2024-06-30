<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  interface Event {
    imgSrc: string;
    title: string;
    date: string;
    location: string;
  }

  let upcomingEvents: Event[] = [
  {
    imgSrc: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
    title: "Rock 'n' Roll Extravaganza",
    date: "2024-07-01",
    location: "New York, NY",
  },
  {
    imgSrc: "https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_640.jpg",
    title: "Jazz Night Spectacular",
    date: "2024-07-10",
    location: "Los Angeles, CA",
  },
  {
    imgSrc: "https://cdn.pixabay.com/photo/2023/04/03/12/59/crowd-7896788_640.jpg",
    title: "Electronic Dance Fest",
    date: "2024-07-15",
    location: "San Francisco, CA",
  },
  {
    imgSrc: "https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_640.jpg",
    title: "Country Music Jamboree",
    date: "2024-07-20",
    location: "Austin, TX",
  },
  {
    imgSrc: "https://cdn.pixabay.com/photo/2022/08/31/20/47/concert-7424190_640.jpg",
    title: "Indie Rock Fiesta",
    date: "2024-07-25",
    location: "Chicago, IL",
  },
  {
    imgSrc: "https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_640.jpg",
    title: "Pop Hits Live",
    date: "2024-08-01",
    location: "Miami, FL",
  },
];


  let slider: HTMLElement | null = null;
  let observed = false;
  let showScrollArrow = true;

  function handleIntersection(entries: IntersectionObserverEntry[]) {
    if (entries[0].isIntersecting) {
      observed = true;
    }
  }

  onMount(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    const upcomingContainer = document.querySelector(".upcoming-container");
    if (upcomingContainer) {
      observer.observe(upcomingContainer);
    }

    // Hide scroll arrow after 5 seconds
    setTimeout(() => {
      showScrollArrow = false;
    }, 5000);
  });
</script>

<div class="upcoming-container" in:fly={{ y: 100, duration: 500 }} class:observed={observed}>
  <h2 class="upcoming-title">Upcoming Events</h2>
  <div class="upcoming-grid" bind:this={slider}>
    {#each upcomingEvents as event}
      <div class="card">
        <div class="image-container">
          <img src={event.imgSrc} alt={event.title} />
        </div>
        <div class="event-details">
          <h3 class="event-title">{event.title}</h3>
          <p class="event-date">{event.date}</p>
          <p class="event-location">{event.location}</p>
        </div>
      </div>
    {/each}
  </div>
  {#if showScrollArrow}
    <div class="scroll-arrow">→</div>
  {/if}
</div>

<style>
  .upcoming-container {
    position: relative;
    overflow: hidden;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .upcoming-container.observed {
    opacity: 1;
    transform: translateY(0);
  }

  .upcoming-title {
    text-align: center;
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .upcoming-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    transition: all 0.3s ease;
  }

  .card {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    border: 2px solid #ddd;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .image-container {
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    position: relative;
  }

  .card img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .event-details {
    padding: 1rem;
  }

  .event-title {
    font-size: 1.25rem;
    color: #333;
    margin: 0.5rem 0;
  }

  .event-date,
  .event-location {
    font-size: 0.9rem;
    color: #666;
  }

  .scroll-arrow {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.5);
    animation: fadeOut 5s forwards;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    .upcoming-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .upcoming-grid {
      display: flex;
      overflow-x: auto;
      scroll-behavior: smooth;
    }

    .card {
      min-width: 80%;
      flex-shrink: 0;
      margin-right: 1rem;
    }
  }
</style>
