<!-- lib/Navbar.svelte -->

<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Button,
    Input,
  } from "flowbite-svelte";
  let navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Artists", href: "/artists" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ];
  let activeLink = "/";
</script>

<Navbar class="bg-transparent">
  <NavBrand href="/">
    <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
    <span class="self-center whitespace-nowrap text-lg font-semibold text-white"
      >Brand</span
    >
  </NavBrand>
  <div class="flex md:order-2">
    <Button size="lg" class="bg-black text-white">Get started</Button>
    <NavHamburger />
  </div>
  <NavUl class="order-1 border border-gray-400 rounded-lg  bg-opacity-50">
    {#each navigationLinks as item (item.href)}
      <NavLi
        class={activeLink === item.href
          ? "text-lg text-yellow-300 bg-gray-900"
          : "text-white text-lg bg-gray-900"}
        href={item.href}
        on:click={() => (activeLink = item.href)}
      >
        {item.label}
      </NavLi>
    {/each}
  </NavUl>
</Navbar>
