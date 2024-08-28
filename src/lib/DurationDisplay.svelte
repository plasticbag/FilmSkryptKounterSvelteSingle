<script lang="ts">
  import type { Duration } from "./types";

  export let duration: Duration;
</script>

{#if duration.hours > 0}
  {duration.hours} {duration.hours > 1 ? "hours" : "hour"}
{/if}
{#if duration.minutes > 0}
  {duration.minutes} {duration.minutes > 1 ? "minutes" : "minute"}
{/if}
{#if duration.seconds > 0}
  {duration.seconds} {duration.seconds > 1 ? "seconds" : "second"}
{/if}
