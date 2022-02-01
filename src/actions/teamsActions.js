export const setTeamsAction = (teams) => ({
  type: "SET_TEAMS",
  teams,
});

export const setFavoriateTeamsAction = (favoriteTeamsIdList) => ({
  type: "SET_FAVORITE_TEAMS",
  favoriteTeamsIdList,
});

export const updateFavoriteTeamsIdListAction = (teamId) => ({
  type: "UPDATE_FAVORITE_TEMAS",
  teamId,
});
