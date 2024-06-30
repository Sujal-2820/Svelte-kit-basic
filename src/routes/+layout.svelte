<script>
  import "../app.css";
  import Navbar from "$lib/Navbar.svelte";
</script>

<div class="main-body">
  <div class="content-body">
    <Navbar />
    <br /><br />
    <slot />
  </div>
</div>

<style>
  .main-body {
    border: 2px solid;
    background-color: rgb(36, 36, 36); /* Ensure the background color of the body is black */
  }
  .content-body {
    /* background: linear-gradient(to bottom, #402f78 0%, black 100%); */
    background-color: rgb(36, 36, 36);
    margin: 6px 100px;
  }
  /* Media query for tablets */
  @media (max-width: 768px) {
    .content-body {
      margin: 6px 0px; /* Adjust margin for tablets */
    }
  }
                 
  /* Media query for smartphones */
  @media (max-width: 480px) {
    .content-body {
      margin: 6px 2px; /* Adjust margin for smartphones */
    }
  }
</style>
