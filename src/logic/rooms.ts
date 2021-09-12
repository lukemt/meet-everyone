declare global {
  interface Array<T> {
    at(o: number): T;
  }
}

type Person = string;

export interface Room {
  window: Person;
  aisle: Person;
}

export const generateRooms = (personsParam: Person[]): Room[] => {
  const persons = personsParam.slice();
  const rooms: Room[] = [];
  while (persons.length) {
    rooms.push({
      window: persons.pop() ?? "ERROR",
      aisle: persons.pop() ?? "☕️ Pause",
    });
  }
  return rooms;
};

/////////////////////////////////////////////
// const specialRoom: Room = {
//   window: null,
//   aisle: null,
// };

// function moveLeft() {
//   rooms.slice().forEach((room, index) => {
//     if (index === 0) {
//       specialRoom.window = room.window;
//     } else {
//       rooms[index - 1].window = room.window;
//     }
//   });
//   specialRoom.aisle = rooms.at(-1).aisle;
//   rooms.at(-1).window = null;
//   rooms.at(-1).aisle = null;
// }

// function moveRight() {
//   rooms.slice(0, -1).forEach((room, index) => {
//     rooms[index + 1].aisle = room.aisle;
//   });
//   rooms[0].aisle = specialRoom.window;
//   rooms.at(-1).window = specialRoom.aisle;
//   specialRoom.window = null;
//   specialRoom.aisle = null;
// }

function moveLeftFancy(rooms: Room[]) {
  const roomsReturn = rooms.map((room) => ({ ...room })); // deep copy
  rooms.forEach((room, index) => {
    roomsReturn.at(index - 1).window = room.window;
  });
  return roomsReturn;
}

function moveRightFancy(rooms: Room[]) {
  const roomsReturn = rooms.map((room) => ({ ...room })); // deep copy
  rooms.forEach((room, index) => {
    if (index === rooms.length - 1) {
      // last room
      roomsReturn[0].aisle = room.window;
      roomsReturn[index].window = room.aisle;
    } else {
      // other rooms
      roomsReturn[index + 1].aisle = room.aisle;
    }
  });
  return roomsReturn;
}

export function move(rooms: Room[], round: number) {
  if (round % 2 === 1) {
    return moveLeftFancy(rooms);
  } else {
    return moveRightFancy(rooms);
  }
}
