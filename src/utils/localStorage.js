export const saveTeamsIdListOnLocalStorage = (TeamsIdList) => {
  const jsonData = JSON.stringify(TeamsIdList);
  window.localStorage.setItem("TeamsIdList", jsonData);
};

export const getTeamsIdListFromLocalStorage = () => {
  const jsonData = window.localStorage.getItem("TeamsIdList");
  return JSON.parse(jsonData) || [];
};
