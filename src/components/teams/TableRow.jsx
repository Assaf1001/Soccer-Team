const TableRow = ({
  team: { id, crestUrl, name, founded },
  onChangeToggleIsFavorite,
  isFavoriteTeam,
}) => {
  return (
    <tr className={`table-row ${isFavoriteTeam ? "favorie" : ""}`}>
      <td>
        <input
          type="checkbox"
          checked={isFavoriteTeam}
          onChange={() => onChangeToggleIsFavorite(id)}
        />
      </td>
      <td>
        <img src={crestUrl} alt={name} />
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <p>{founded}</p>
      </td>
    </tr>
  );
};

export default TableRow;
