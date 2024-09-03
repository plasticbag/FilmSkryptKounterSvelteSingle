<script lang="ts">
  import { onMount } from "svelte";
  import { draw } from "svelte/transition";
  import { cubicInOut, linear } from "svelte/easing";
  let condition = false;

  export let stroke = "white";
  export let fill = "none";
  export let stroke_width = 0.3;

  function customTransistion(
    node: SVGElement & { getTotalLength(): number },
    { duration }: { duration: number },
  ) {
    let len = node.getTotalLength();
    return {
      duration,
      delay: 300,
      css: (t: number, u: number) => {
        const eased = cubicInOut(t);

        return `
          opacity: ${eased};
          stroke-dasharray: ${len};
          stroke-dashoffset: ${u * len};
        `;
      },
    };
  }

  onMount(() => {
    condition = true;
  });
</script>

<svg
  width="100%"
  height="100%"
  viewBox="0 0 80.353908 5.6388001"
  version="1.1"
  id="skryptkountertextsvg"
  xmlns="http://www.w3.org/2000/svg"
>
  {#if condition}
    <path
      transition:customTransistion={{ duration: 750 }}
      d="M 5.037666,4.969933 4.394199,5.621866 H 0 v -1.27 H 3.784599 V 3.445933 H 0 v -2.794 L 0.643466,0 h 4.3942 v 1.261533 h -3.7846 v 0.9144 h 3.7846 z M 5.88433,0.008466 h 1.27 v 5.588 h -1.27 z m 5.071533,0 -2.015066,2.777067 2.015066,2.810933 H 9.448797 l -2.032,-2.810933 2.032,-2.777067 z m 5.765794,0.643467 V 3.4798 h -1.507066 l 1.507066,2.142066 H 15.214591 L 13.800658,3.4798 V 2.159 h 1.659466 V 1.286933 h -2.531533 v 4.334933 h -1.27 V 0.016933 h 4.436533 z m 4.0386,2.413 V 5.621866 H 19.346324 V 2.963333 l -1.778,-2.04893299 V 0.008466 h 0.905933 l 1.642534,1.778 1.5494,-1.778 h 1.007533 v 0.90593401 z m 3.945462,2.556933 h -1.27 V 0 h 5.096933 v 2.810933 l -0.635,0.635 h -2.277533 v -1.27 h 1.642533 v -0.889 h -2.556933 z m 9.787469,-5.6134 v 1.27 h -1.921933 v 4.3434 h -1.27 v -4.3434 h -1.913467 v -1.27 z m 5.079992,0 h 1.27 v 5.588 h -1.27 z m 5.071533,0 -2.015066,2.777067 2.015066,2.810933 h -1.507066 l -2.032,-2.810933 2.032,-2.777067 z m 2.861728,5.6134 V 4.334933 h 1.667934 V 1.2954 H 46.617441 V 5.621866 H 45.999375 L 45.355908,4.9784 v -4.318 l 0.643467,-0.643467 h 3.793066 l 0.635,0.643467 V 5.621866 Z M 51.28258,0.016933 h 1.261533 V 5.6134 h -0.635 L 51.28258,4.986866 Z m 5.08,0 V 4.986866 L 55.736046,5.6134 h -2.286 V 4.351866 h 1.651 V 0.016933 Z M 62.483982,5.6388 H 61.171649 L 58.521582,2.201333 V 5.6388 H 57.209249 V 0 h 1.312333 l 2.650067,3.462866 V 0 h 1.312333 z m 5.952064,-5.630334 v 1.27 h -1.921933 v 4.3434 h -1.27 v -4.3434 h -1.913467 v -1.27 z M 74.244172,4.3434 v 1.27 H 69.909238 L 69.282705,4.969933 V 0.668866 L 69.909238,0.0254 h 3.7084 l 0.626534,0.643466 V 3.4544 h -2.861734 v -1.27 h 1.6256 v -0.889 h -2.472266 v 3.048 z M 80.15391,0.651933 V 3.4798 H 78.646843 L 80.15391,5.621866 H 78.646843 L 77.23291,3.4798 V 2.159 h 1.659467 V 1.286933 h -2.531533 v 4.334933 h -1.27 V 0.016933 h 4.436533 z"
      id="scryptkountertextpath"
      stroke-width={stroke_width}
      {fill}
      {stroke}
      stroke-opacity="0.8"
      style="font-size:32px;font-family:Loaded;white-space:pre;"
      aria-label="SKRYPT KOUNTER"
    />
  {/if}
</svg>
