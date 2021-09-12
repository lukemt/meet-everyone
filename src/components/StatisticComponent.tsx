// Component that renders a the statistic

export function StatisticComponent(props: {
  statistic: { [key: string]: { [key: string]: number } };
}) {
  return (
    <div className="floor">
      {Object.keys(props.statistic).map((person) => (
        <div className="border" key={person}>
          {person}:
          {Object.keys(props.statistic[person]).map((person2) => (
            <div
              key={person2}
              className={getColor(props.statistic[person][person2])}
            >
              {person2}: {props.statistic[person][person2]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function getColor(count: number) {
  if (count === 0) {
    return "gray";
  }
  if (count === 1) {
    return "green";
  }
  return "red";
}
