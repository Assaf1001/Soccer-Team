export const sortTeams = (teams, sortBy, isAsc = true, isFavoriteTeam) => {
  if (sortBy === "favorite") {
    return teams.sort((a, b) => {
      if (isFavoriteTeam(a.id)) return isAsc ? -1 : 1;
      else return isAsc ? 1 : -1;
    });
  } else {
    return teams.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return isAsc ? 1 : -1;
      else if (a[sortBy] < b[sortBy]) return isAsc ? -1 : 1;
      else return 0;
    });
  }
};
