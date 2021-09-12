import React from "react";
import "./App.css";
import { generateRooms, move, Room } from "../logic/rooms";
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
  const [roomsState, setRoom] = React.useState(initalRooms);
  const [roundState, setRound] = React.useState(1);
  const [statisticState, setStatistic] = React.useState(initialStatistic);

  const handleClick = () => {
    console.log("hello!!!", roundState);
    console.table(roomsState);
    const newRooms = move(roomsState, roundState);
    const newStatistic = logStatistic(statisticState, newRooms);
    setRoom(newRooms);
    setStatistic(newStatistic);
    setRound(roundState + 1);
  };

  return (
    <>
      <div className="floor">
        <div style={{ flexGrow: 1 }}>
          <h2>Rooms</h2>
          <div className="floor">
            {roomsState.map((room, index) => (
              <RoomComponent room={room} key={index} />
            ))}
          </div>
        </div>
        <div>
          <h2>Round {roundState}</h2>
          <button className="bigbutton" onClick={handleClick}>
            Next Round
          </button>
        </div>
      </div>
      <h2>Who met who?</h2>
      <StatisticComponent statistic={statisticState} />
    </>
  );
}
export default App;
