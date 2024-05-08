export function convertMinutesToHours(runtime: number): string {
  return `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
}

export function formatVotes(votes: number): string {
  return votes >= 1000 ? `${Math.floor(votes / 1000)}K` : `${votes}`;
}
