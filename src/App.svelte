<script lang="ts">
  import Kounter from "./lib/Kounter.svelte";
  import { fade, scale, crossfade } from "svelte/transition";
  import { onMount } from "svelte";
  import { linear, quintIn, quintOut } from "svelte/easing";
  let logoText = "Skrypt Kounter";
  let showLogo = false;
  let showInput = false;

  const [send, receive] = crossfade({
    duration: 1000,
    easing: quintOut,
  });

  onMount(() => {
    showLogo = true;
    setTimeout(
      () => {
        showInput = true;
      },
      500 + logoText.length * 50,
    );
  });
</script>

<main class="background" style={"width: 100%; height: 100%; padding: 5px;"}>
  <div class="flex flex-column">
    <div class="loaded-font logo-text">
      {#if showLogo}
        {#each logoText as char, i}
          <span in:fade|global={{ delay: 500 + i * 50, duration: 400 }}
            >{char}</span
          >
        {/each}
      {/if}
    </div>
    <div style={"width: 100%;"}>
      {#if showInput}
        <div
          in:receive={{ key: "x" }}
          out:send={{ key: "x" }}
          style={"width: 100%; height: 0%;"}
        >
          <Kounter />
        </div>
      {:else}
        <div
          in:receive={{ key: "x" }}
          out:send={{ key: "x" }}
          style={"width: 100%; height: 0%; opacity: 0;"}
        ></div>
      {/if}
    </div>
  </div>
  <!-- <button
    on:click={() => {
      showLogo = !showLogo;
      if (showInput) showInput = false;
    }}>draw</button
  > -->
</main>

<style>
  @import url("https://fonts.cdnfonts.com/css/loaded");

  .background {
    background-image: url("./assets/SkryptKounterBackground.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .loaded-font {
    font-family: "loaded";
  }
  .logo-text {
    color: #44d3f2;
    font-size: 2.5em;
    text-align: center;
  }

  .flex {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
