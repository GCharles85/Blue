<script>
    import { onMount } from 'svelte';
  
    let nextCycle;
  
    onMount(() => {
      nextCycle = JSON.parse(localStorage.getItem('nextCycle'));
    });
  </script>
  
  <h1>Predicted Next Menstrual Cycle</h1>
  
  {#if nextCycle}
    <p>Start Date: {nextCycle.startDate}</p>
    <p>Length: {nextCycle.length} days</p>
    <p>End Date: {nextCycle.endDate}</p>
  {/if}
  