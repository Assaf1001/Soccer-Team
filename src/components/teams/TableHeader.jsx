import downArrow from "../../assets/icons/downArrow.svg";

const TableHeader = ({ onClickSortTableBy }) => {
  const titleList = [
    { title: "Favorite", name: "favorite", canBeSorted: true },
    { title: "Crest", name: "crest", canBeSorted: false },
    { title: "Name", name: "name", canBeSorted: true },
    { title: "Year founded", name: "founded", canBeSorted: true },
  ];

  return (
    <thead>
      <tr className="table-header">
        {titleList.map((item) => (
          <td key={item.name}>
            <div>
              <h3>{item.title}</h3>
              {item.canBeSorted && (
                <div className="arrows">
                  <img
                    onClick={() => onClickSortTableBy(item.name)}
                    className="up-arrow"
                    src={downArrow}
                    alt="upArrow"
                  />
                  <img
                    onClick={() => onClickSortTableBy(item.name, false)}
                    className="down-arrow"
                    src={downArrow}
                    alt="downArrow"
                  />
                </div>
              )}
            </div>
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
