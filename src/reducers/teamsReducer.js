import { saveTeamsIdListOnLocalStorage } from "../utils/localStorage";

export const teamsInitialState = {
  teams: [],
  favoriteTeamsIdList: [],
};

const teamsReducer = (state, action) => {
  switch (action.type) {
    case "SET_TEAMS":
      return { ...state, teams: action.teams };
    case "SET_FAVORITE_TEAMS":
      return { ...state, favoriteTeamsIdList: action.favoriteTeamsIdList };
    case "UPDATE_FAVORITE_TEMAS":
      const newFavoriteTeamsIdList = [...state.favoriteTeamsIdList];
      if (newFavoriteTeamsIdList.includes(action.teamId)) {
        newFavoriteTeamsIdList.splice(
          newFavoriteTeamsIdList.indexOf(action.teamId),
          1
        );
      } else {
        newFavoriteTeamsIdList.push(action.teamId);
      }
      saveTeamsIdListOnLocalStorage(newFavoriteTeamsIdList);

      return { ...state, favoriteTeamsIdList: newFavoriteTeamsIdList };
    default:
      return state;
  }
};

export default teamsReducer;
