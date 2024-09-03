<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import DurationDisplay from "./DurationDisplay.svelte";
  import type { Duration } from "./types";

  let text: string = "";
  let duration: Duration = { hours: 0, minutes: 0, seconds: 0 };
  $: {
    let seconds = text.length / 10;
    duration.hours = Math.floor(seconds / 3600);
    seconds = seconds - duration.hours * 3600;
    duration.minutes = Math.floor(seconds / 60);
    seconds = seconds - duration.minutes * 60;
    duration.seconds = Math.ceil(seconds);
  }
</script>

<div>
  <textarea placeholder="Enter a skrypt" bind:value={text} rows="10" cols="50"
  ></textarea>
  <div class="container">
    {#if text.length > 0}
      <div in:fade out:fly={{ y: 40, duration: 250 }} class="duration-message">
        This skrypt will take
        <strong>
          <DurationDisplay {duration} />
        </strong>
        to read
      </div>
    {:else}
      <div in:fade out:fly={{ y: 40, duration: 250 }} class="empty-message">
        Enter your skrypt to find out how long it will take to read
      </div>
    {/if}
  </div>
</div>

<style>
  .container {
    display: grid;
  }

  .duration-message,
  .empty-message {
    grid-column: 1/2;
    grid-row: 1/2;
  }
</style>
