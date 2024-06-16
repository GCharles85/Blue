<script>
    import { onMount } from 'svelte';
    import { predictNextCycle } from '$lib/utils';
  
    let periods = [];
    let nextCycle;
  
    onMount(() => {
      periods = JSON.parse(localStorage.getItem('periods')) || [];
      nextCycle = JSON.parse(localStorage.getItem('nextCycle')) || null;
    });
  </script>
  
  <h1>Menstrual Cycle Calendar</h1>
  
  <div>
    <h2>Previous Cycles</h2>
    {#each periods as period}
      <p>{period.startDate} - {new Date(new Date(period.startDate).getTime() + period.periodLength * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</p>
    {/each}
  </div>
  
  <div>
    <h2>Next Predicted Cycle</h2>
    {#if nextCycle}
      <p>{nextCycle.startDate} - {nextCycle.endDate}</p>
    {/if}
  </div>
  