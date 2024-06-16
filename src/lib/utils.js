export function predictNextCycle(periods, cycleLength) {
    if (periods.length === 0) return null;
    
    let lastPeriod = periods[periods.length - 1];
    let lastPeriodEndDate = new Date(lastPeriod.startDate);
    lastPeriodEndDate.setDate(lastPeriodEndDate.getDate() + lastPeriod.periodLength);
    
    let nextPeriodStartDate = new Date(lastPeriodEndDate);
    nextPeriodStartDate.setDate(nextPeriodStartDate.getDate() + cycleLength);
  
    return {
      startDate: nextPeriodStartDate.toISOString().split('T')[0],
      length: lastPeriod.periodLength,
      endDate: new Date(nextPeriodStartDate.getTime() + lastPeriod.periodLength * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    };
  }
  