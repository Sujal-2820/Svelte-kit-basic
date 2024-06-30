<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  interface Artist {
    imgSrc: string;
    name: string;
    description: string;
  }

  let artists: Artist[] = [
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      name: "John Doe",
      description: "A talented musician known for his rock performances.",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      name: "Jane Smith",
      description: "A versatile artist with a passion for jazz music.",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      name: "Alex Johnson",
      description: "An up-and-coming pop singer with a unique voice.",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      name: "Emily Davis",
      description: "An indie rock star known for her energetic performances.",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      name: "Michael Brown",
      description: "A classical pianist who has performed worldwide.",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      name: "Sarah Wilson",
      description: "A country music singer with a heartfelt style.",
    },
  ];

  onMount(() => {
    const artistsContainer = document.querySelector(
      ".artists-container"
    ) as HTMLElement;
    const progressBar = document.querySelector(".progress-bar") as HTMLElement;

    function updateProgressBar() {
      if (window.innerWidth <= 768) {
        // Horizontal progress bar for smartphone view
        const scrollLeft = artistsContainer.scrollLeft;
        const maxScrollLeft =
          artistsContainer.scrollWidth - artistsContainer.clientWidth;
        const scrollPercentage = scrollLeft / maxScrollLeft;
        progressBar.style.width = `${scrollPercentage * 100}%`;
      } else {
        // Vertical progress bar for full-screen view
        const scrollTop = artistsContainer.scrollTop;
        const maxScrollTop =
          artistsContainer.scrollHeight - artistsContainer.clientHeight;
        const scrollPercentage = scrollTop / maxScrollTop;
        progressBar.style.height = `${scrollPercentage * 100}%`;
      }
    }

    if (artistsContainer && progressBar) {
      artistsContainer.addEventListener("scroll", updateProgressBar);
      window.addEventListener("resize", updateProgressBar); // Update progress bar on resize
      updateProgressBar(); // Initial call to set progress bar state
    }

    return () => {
      if (artistsContainer) {
        artistsContainer.removeEventListener("scroll", updateProgressBar);
      }
      window.removeEventListener("resize", updateProgressBar);
    };
  });
</script>

<div class="featured-artists-container">
  <h2 class="artists-title">Featured Artists</h2>
</div>
<div class="artists-container">
  <div class="progress-container">
    <div class="progress-bar"></div>
  </div>
  <div class="carousel">
    {#each artists as artist (artist.name)}
      <div class="artist-item" in:fade={{ duration: 500 }}>
        <div class="artist-info">
          <h2 class="artist-name">{artist.name}</h2>
          <p class="artist-description">{artist.description}</p>
        </div>
        <div class="image-container" in:fly={{ x: -100, duration: 500 }}>
          <img src={artist.imgSrc} alt={artist.name} />
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .featured-artists-container {
    margin-left: 120px;
    display: flex;
    justify-content: flex-start; /* Align title to the left */
    padding: 0 0;
    margin-bottom: 0; /* Remove margin to avoid space between containers */
  }

  .artists-title {
    font-size: 2rem;
    background-color: #333;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f3f4f6; /* Border around the title */
    border-bottom: none;
    padding: 0.5rem 1rem; /* Padding for better appearance */
    border-radius: 15px;
    border-end-start-radius: 0px;
    border-end-end-radius: 0px;
    border-bottom: none;
  }

  .artists-container {
    margin: auto 70px;
    display: grid;
    grid-template-columns: 50px 1fr; /* Two columns: progress bar and content */
    padding: 2rem;
    padding-top: 0; /* Remove top padding to avoid space between containers */
    overflow-y: scroll;
    height: 55vh; /* Adjusted height to match a single artist's view */
    scroll-snap-type: y mandatory;
    background-color: rgb(36, 36, 36);
  }

  .progress-container {
    position: sticky; /* Make the progress container sticky */
    top: 2rem; /* Align with the padding of artists-container */
    height: 46vh; /* Ensure it matches the height minus padding */
    display: flex;
    align-items: center;
  }

  .progress-bar {
    width: 4px;
    height: 0;
    background: rgb(251, 251, 251);
    transition: height 0.3s ease;
    margin-left: auto; /* Align to the right side of the progress container */
    margin-right: auto; /* Center horizontally */
  }

  .artists-container::-webkit-scrollbar {
    display: none;
  }

  .artists-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .carousel {
    display: flex;
    flex-direction: column;
    gap: 0.5rem; /* Further reduced gap */
  }

  .artist-item {
    display: flex;
    flex-direction: row;
    gap: 0.5rem; /* Further reduced gap */
    align-items: center;
    padding: 0.5rem 0; /* Further reduced padding */
    scroll-snap-align: start;
    height: 50vh; /* Adjusted height to match container */
    justify-content: center;
    position: relative;
  }

  .artist-info {
    flex: 1;
    margin-left: 100px;
    text-align: left;
    animation: fadeIn 2s ease-in-out;
  }

  .artist-name {
    font-size: 2.3rem;
    color: #fbfbfb;
    margin-bottom: 0.5rem;
    animation: slideIn 1s ease-in-out;
  }

  .artist-description {
    font-size: 1.2rem;
    color: #d9d9d9;
    animation: slideIn 1.5s ease-in-out;
  }

  .image-container {
  margin-right: 200px;
  width: 250px; /* Adjust width */
  height: 260px; /* Adjust height to make it square */
  overflow: hidden;
  border-radius: 15px; /* Rounded corners */
  border: 4px solid #94a3b8; /* Border color */
  flex-shrink: 0;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}


  @media (max-width: 768px) {
    .featured-artists-container {
      justify-content: center;
    }

    .artists-title {
      background-color: #f3f4f6;
      border: 1px solid #f3f4f6;
    }
    .artists-container {
      overflow-x: scroll;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
      height: 55vh; /* Ensures the height is appropriate */
      position: relative; /* Added for positioning progress bar */
    }

    .artists-container {
      background-color: #f3f4f6;
      border: 1px solid #f3f4f6;
    }

    .carousel {
      display: flex;
      flex-direction: row;
      gap: 1rem; /* Space between items */
    }

    .artist-item {
      display: flex;
      flex-direction: column;
      align-items: center; /* Center items horizontally */
      text-align: center;
      height: 100vh; /* Ensure full viewport height */
      width: 100vw; /* Each item takes full viewport width */
      scroll-snap-align: center;
      justify-content: center; /* Center items vertically */
      padding-top: 2rem; /* Add some padding at the top */
      padding-bottom: 2rem; /* Add some padding at the bottom */
    }

    .progress-container {
      visibility: hidden;
    }

    .image-container {
      order: -1; /* Place image container above the info */
      width: 50%; /* Adjust width for smaller screens */
      height: auto; /* Maintain aspect ratio */
      margin-top: 30px;
      margin-bottom: 0.5rem; /* Add space between image and info */
      margin-left: auto;
      margin-right: auto;
    }

    .artist-info {
      width: 80%;
      margin-right: 97px;
      text-align: center;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .artist-name {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .artist-description {
      font-size: 1rem;
    }
  }

  /* Custom animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(-20px);
    }
    to {
      transform: translateX(0);
    }
  }
</style>
