<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { predictNextCycle } from '$lib/utils';
  
    let cycleLength;
    let periodLength;
    let startDate;
    let periods = [];
  
    function addPeriod() {
      periods = [...periods, { startDate, periodLength }];
      startDate = '';
      periodLength = '';
    }
  
    function handleSubmit() {
      const nextCycle = predictNextCycle(periods, cycleLength);
      localStorage.setItem('nextCycle', JSON.stringify(nextCycle));
      goto('/result');
    }
  </script>
  
  <h1>Menstrual Cycle Tracker</h1>
  
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label>Cycle Length (days):</label>
      <input type="number" bind:value={cycleLength} required>
    </div>
    <div>
      <label>Start Date:</label>
      <input type="date" bind:value={startDate} required>
    </div>
    <div>
      <label>Period Length (days):</label>
      <input type="number" bind:value={periodLength} required>
    </div>
    <button type="button" on:click={addPeriod}>Add Period</button>
    <button type="submit">Submit</button>
  </form>
  
  <ul>
    {#each periods as period}
      <li>{period.startDate} - {period.periodLength} days</li>
    {/each}
  </ul>
  