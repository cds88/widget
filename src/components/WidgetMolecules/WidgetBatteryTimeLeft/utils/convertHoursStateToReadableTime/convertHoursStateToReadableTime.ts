/**
 * Converts hours as integer 
 * (3 hours, 20 hours, 30.5 hours) to human readable format:
 * (3h,      20h,      30:30h)
 * 
 * @param hours 
 * @returns string representation of hours integer
 */
export function convertHoursStateToReadableTime(hours: number): string {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);

  if (m === 0) {
    return `${h}h`;
  }
  const formattedMinutes = m < 10 ? `0${m}` : `${m}`;

  return `${h}:${formattedMinutes}h`;
}
