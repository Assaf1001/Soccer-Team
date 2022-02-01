import { useEffect, useState, useContext } from "react";
import { getTeams } from "../../server/api";
import { sortTeams } from "../../utils/sortTeams";
import { getTeamsIdListFromLocalStorage } from "../../utils/localStorage";
import { TeamsContext } from "../../context/TeamsContext";
import {
  setFavoriateTeamsAction,
  setTeamsAction,
  updateFavoriteTeamsIdListAction,
} from "../../actions/teamsActions";

import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import Loader from "../shared/Loader";
import Modal from "../shared/Modal";

const TeamsTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalErrorMessage, setModalErrorMessage] = useState("");
  const { teamsState, dispatchTeamsState } = useContext(TeamsContext);
  const [sortedTeams, setSortedTeams] = useState([]);

  const isFavoriteTeam = (teamId) =>
    teamsState.favoriteTeamsIdList.includes(teamId);

  const onChangeToggleIsFavorite = (teamId) => {
    dispatchTeamsState(updateFavoriteTeamsIdListAction(teamId));
  };

  const onClickSortTableBy = (sortBy, isAsc) => {
    const newSortedTeams = [...sortedTeams];
    setSortedTeams(sortTeams(newSortedTeams, sortBy, isAsc, isFavoriteTeam));
  };

  const fetchData = async () => {
    try {
      const teamsData = await getTeams();
      dispatchTeamsState(setTeamsAction(teamsData));
      setSortedTeams(teamsData);
      setIsLoading(false);
    } catch (err) {
      setIsModalOpen(true);
      setModalErrorMessage(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dispatchTeamsState(
      setFavoriateTeamsAction(getTeamsIdListFromLocalStorage())
    );
    fetchData();
  }, []);

  return (
    <div className="table-wrapper">
      {isLoading ? (
        <Loader />
      ) : isModalOpen ? (
        <Modal message={modalErrorMessage} />
      ) : (
        <>
          <h2 className="table-title">The Teams</h2>
          <table className="teams-table">
            <TableHeader onClickSortTableBy={onClickSortTableBy} />
            <tbody>
              {sortedTeams.map((team) => (
                <TableRow
                  key={team.id}
                  team={team}
                  isFavoriteTeam={isFavoriteTeam(team.id)}
                  onChangeToggleIsFavorite={onChangeToggleIsFavorite}
                />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default TeamsTable;
