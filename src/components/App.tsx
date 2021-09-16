import React from "react";
import "./App.css";
import { generateRooms, move } from "../logic/rooms";
import RoomComponent from "./RoomComponent";
import { initStatistic, logStatistic } from "../logic/statistic";
import { StatisticComponent } from "./StatisticComponent";

export const persons = [
  "Hans",
  "Peter",
  "Rolf",
  "Heidi",
  "Mathilde",
  "Lone",
  "Leonie",
  "Dieter",
  // "Kurt",
  // "☕️ Pause",
];

const initalRooms = generateRooms(persons);
let initialStatistic = initStatistic(persons);
initialStatistic = logStatistic(initialStatistic, initalRooms);

function App() {
  const [rooms, setRooms] = React.useState(initalRooms);
  const [round, setRound] = React.useState(1);
  const [statistic, setStatistic] = React.useState(initialStatistic);

  const handleClick = () => {
    console.log("hello!!!", round);
    console.table(rooms);
    const newRooms = move(rooms, round);
    const newStatistic = logStatistic(
      statistic,
      newRooms.slice(0, round % 2 === 0 ? undefined : -1)
    );
    setRooms(newRooms);
    setStatistic(newStatistic);
    setRound(round + 1);
  };

  return (
    <>
      <div className="floor">
        <div style={{ flexGrow: 1 }}>
          <h2>Rooms</h2>
          <div className="floor">
            {rooms
              .slice(0, round % 2 === 1 ? undefined : -1)
              .map((room, index) => (
                <RoomComponent room={room} key={index} />
              ))}
          </div>
        </div>
        <div>
          <h2>Round {round}</h2>
          <button className="bigbutton" onClick={handleClick}>
            Next Round
          </button>
        </div>
      </div>
      <h2>Who met whom?</h2>
      <StatisticComponent statistic={statistic} />
      <a href="https://github.com/lukemt/meet-everyone">
        source code on github
      </a>
    </>
  );
}
export default App;
